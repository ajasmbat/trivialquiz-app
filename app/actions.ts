"use server";
import { DataType, QuestionData } from "./types";
import { openai } from "@/lib/openai";
import { generateQuizPrompt } from "@/lib/quizPrompts";
import { SaveData } from "./types";
import { prisma } from "@/lib/prisma";


export async function getGameData(amount: number , topic : string, difficulty: string ): Promise<QuestionData[]> {
    "use server";

    const prompt = generateQuizPrompt(amount, topic, difficulty);
    console.log("called")

    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    console.log("Chat Recived")

    const raw = chatResponse.choices[0].message.content;
    console.log(raw)


    try {
      const data = JSON.parse(raw || "[]");

      if (!Array.isArray(data)) {
        throw new Error("Output is not an array");
      }

      if (data.length !== amount) {
        console.warn(`Expected ${amount} questions, but got ${data.length}.`);
      }

      console.log(data)
      return data.slice(0, amount); // trim if too many
    } catch (err) {
      console.error("Error parsing OpenAI response:", err);
      return [];
    }
  }


export async function saveGame(gameData: SaveData) {
  try {


  const API_KEY = process.env.GOOGLE_KEY
  const CX = process.env.SEARCH_ENGINE_ID

  
  const url = `https://www.googleapis.com/customsearch/v1?` +
  `q=${encodeURIComponent(gameData.topic)}&` +
  `key=${API_KEY}&cx=${CX}&searchType=image&fileType=png&num=1`;
  const imageUrl = await fetch(url) 
  .then((res) => res.json())
  .then((data) => {
    const item = data.items?.[0]; // get first result
    return item?.link as string || null;    // return direct image URL
  })
  .catch((err) => {
    console.error("Image fetch error:", err);
    return null;
  });
  
  const createdGame = await prisma.game.create({
        data: {
          userName: gameData.user,
          topic: gameData.topic,
          score: gameData.userscore,
          difficulty: gameData.difficulty,
          image: imageUrl as string,
          questions: {
            create: gameData.questions.map((q) => ({
              question: q.question,
              answers: q.answers,
              explanation: q.explanation,
              correctAnswer: q.correctAnswer,
              references: {
                create: q.references.map((r) => ({
                  refrenceName: r.refrenceName,
                  link: r.link,
                })),
              },
            })),
          },
          GameScores: {
            create: {
              userName: gameData.user,
              score: gameData.userscore 
            },
          },
        },
      });
  
      return { success: true, gameId: createdGame.id };
    } catch (error) {
      console.error("Error saving game:", error);
      return { success: false, error: (error as Error).message };
    }
  }



  export async function getGames() {
    try {
      const games: DataType[] = await prisma.game.findMany({
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          userName: true,
          topic: true,
          difficulty: true,
          image: true,
          GameScores: {
            select: {
              id: true,
              userName: true,
              score: true,
            },
          },
          questions: {
            select: {
              question: true,
              answers: true,
              correctAnswer: true,
              explanation: true,
              references: {
                select: {
                  refrenceName: true,
                  link: true,
                },
              
              },
            },
          },
        },
      });
      
      // Return the retrieved games wrapped in a success response.
      return { success: true, games };
    } catch (error) {
      console.error("Error retrieving games:", error);
      return { success: false, error: (error as Error).message };
    }
  }