import { Prisma } from "@/lib/generated/prisma";


export type Reference = {
    refrenceName: string;
    link: string;
  };

export type MenuOption = "start" | "browse";
  
export type QuestionData = {
    question: string;
    answers: string[];
    correctAnswer: number;
    explanation: string;
    references: Reference[];
  };

  export type gameOptions = {
    topic: string;
    difficulty: string;
    amount: number
  };




////

export type DataType = {
  id: string;
  userName: string;
  topic: string;
  difficulty: string;
  image: string; 
  GameScores: GameScores[];
  questions: QuestionData[];
  
};

export type GameScores = {
  userName : string,
  score : number,

}


export type SaveData = {
    user : string
    userscore : number;
    topic: string;
    difficulty: string;
    amount: number
    questions : QuestionData[]
  }



