"use client";
import React, { use, useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHeart, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { gameOptions, QuestionData, SaveData, MenuOption } from "../types";
import { motion } from "framer-motion";
import { getGameData, saveGame } from "../actions";
import { useUser } from "../UserContext";

type GameOptionsBaseProps = {
  setGameOptions: React.Dispatch<React.SetStateAction<gameOptions | null>>;
  gameOptions: gameOptions | null;
  gameData: QuestionData[];
  setGameData: React.Dispatch<React.SetStateAction<QuestionData[]>>;
  setMenuOption: (option: MenuOption) => void;
};

const GameMenu = ({ gameOptions, setGameOptions, setMenuOption, gameData, setGameData }: GameOptionsBaseProps) => {
  // Timer state (if you want to use the timer later, you can uncomment the effect)
  // const [minutes, setMinutes] = useState(gameOptions.time);
  // const [seconds, setSeconds] = useState(0);

  // Answer state uses 0 as a sentinel for “no answer selected”
  const [answer, selectAnswer] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [cardFlip, setCardFlip] = useState<boolean>(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [preloaded, setPreloaded] = useState<boolean>(false);
  // const [hearts, setHearts] = useState(3); // currently not used, see CustomHealthUI below

  // Timer effect (commented out as before – uncomment if needed)
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameEnded) {
        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
          setGameEnded(true);
        } else if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds, gameEnded]);
  */

  // Game Initialization – fetch game data only once (using a ref for dev hot reload issues)
  const hasFetched = useRef(false);
  useEffect(() => {
    const fetchData = async () => {
      if (hasFetched.current) return;
      hasFetched.current = true;
      console.log(gameOptions);
      if (gameData.length === 0 && gameOptions) {
        console.log("C");
        const data = await getGameData(gameOptions.amount, gameOptions.topic, gameOptions.difficulty);
        setGameData(data);
        setPreloaded(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const { user } = useUser();

  // Instead of using a useEffect that immediately ends the game based on answer===0 or last question,
  // we now only process the answer if it is nonzero.
  useEffect(() => {
    // Do nothing if no answer has been selected yet.
    if (answer === 0) return;

    // Make sure gameData is loaded (guard against empty data).
    if (!gameData[currentQuestionIndex]) return;

    // Check answer – note: our answer buttons send values 1-4,
    // but our correctAnswer is 0-indexed so we subtract 1.
    if (gameData[currentQuestionIndex].correctAnswer === answer - 1) {
      setScore((prev) => prev + 1);
    }
    // Show explanation card regardless of whether the answer was correct
    setCardFlip(true);
  }, [answer, currentQuestionIndex, gameData]);

  // Save Game Data when user chooses to publish the quiz

  // // Timer UI (if you want to include it, place <CustomTimer /> in your render)
  // const CustomTimer = () => (
  //   <span className="text-3xl font-mono text-primary-content bg-primary p-2 rounded-t-2xl">
  //     {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
  //   </span>
  // );

  // Example Health UI (currently commented out in the render)
  /*
  const CustomHealthUI = () => (
    <span className="text-2xl font-mono text-secondary-content bg-secondary p-2 rounded-t-2xl flex gap-2 items-center">
      {[0, 1, 2].map((i) => (
        <FontAwesomeIcon key={i} icon={faHeart} className={i > hearts ? "" : "hidden"} />
      ))}
    </span>
  );
  */

  // Quit Button simply exits the game
  const QuitButton = () => (
    <div className="text-2xl font-mono text-secondary bg-secondary-content p-2 rounded-t-2xl gap-6 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-content cursor-pointer">
      <FontAwesomeIcon icon={faPowerOff} />
      <h1
        onClick={() => {
          setGameData([]);
          setGameOptions(null);
        }}
      >
        Quit Game
      </h1>
    </div>
  );

  // Loading screen while data is being fetched
  const LoadingScreen = () => {
    const messages = ["Our AI magic is taking place...", "Summoning quiz questions...", "Analyzing your topic...", "Loading trivia greatness...", "Almost there..."];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex flex-col items-center justify-center bg-base-300 h-full w-full">
        <span className="loading loading-ring loading-xl text-primary mb-4"></span>
        <p className="text-lg text-center text-primary animate-fade">{messages[index]}</p>
      </div>
    );
  };

  // Score UI
  const CustomScoreUI = () => (
    <span className="text-2xl font-mono text-secondary bg-secondary-content p-2 rounded-t-2xl gap-6 flex items-center justify-center">
      <FontAwesomeIcon icon={faCoins} />
      <h1>
        {score}/{gameData.length}
      </h1>
    </span>
  );

  // Final game screen when gameEnded is true
  const GameEndedScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const saveGameDataFunc = async () => {
      if (user && gameOptions) {
        setLoading(true);
        const saveGameData: SaveData = {
          user: user.name,
          userscore: score,
          topic: gameOptions.topic,
          difficulty: gameOptions.difficulty,
          amount: gameOptions.amount,
          questions: gameData.map((q) => ({
            question: q.question,
            answers: q.answers,
            explanation: q.explanation,
            correctAnswer: q.correctAnswer,
            references: q.references.map((r) => ({
              refrenceName: r.refrenceName,
              link: r.link,
            })),
          })),
        };

        const response = await saveGame(saveGameData);
        if (response.success) {
          setMenuOption("browse");
          setGameOptions(null);
          setGameData([]);
        } else console.error(response.error);
      }
    };
    return (
      <div className="flex flex-col items-center justify-center bg-base-300 h-full w-full text-center gap-10">
        {loading ? (
          <>
            <span className="loading loading-ring loading-xl text-primary mb-4" />
            <p className="text-lg text-primary animate-fade">Publishing...</p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-primary mb-6">🎉 Game Over!</h1>
            <p className="text-2xl text-base-content">
              Your Final Score: <span className="font-bold">{score}</span> / {gameData.length}
            </p>

            {preloaded && (
              <>
                <CustomButton text="Publish Quiz" bgClassName="bg-secondary" onClick={saveGameDataFunc} />
                <p className="text-warning">Publish Your Quiz So Others Can Play 😆</p>
              </>
            )}
          </>
        )}
      </div>
    );
  };

  // Explanation Screen shows the explanation and references after an answer is selected.
  // It now includes a “Continue” button that either advances to the next question or ends the game.
  const ExplanationScreen = () => {
    const handleContinue = () => {
      // Reset answer for the next question
      selectAnswer(0);
      // If this was the last question, end the game
      if (currentQuestionIndex === gameData.length - 1) {
        setGameEnded(true);
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
      // Reset the card flip so the question screen animates in next
      setCardFlip(false);
    };

    return (
      <div className="flex flex-col gap-10 items-center justify-center h-full bg-base-300 p-20">
        <p className="text-3xl">{gameData[currentQuestionIndex].explanation}</p>
        <div className="flex flex-col gap-2">
          {gameData[currentQuestionIndex].references.map((ref, i) => (
            <a key={i} href={ref.link} target="_blank" rel="noopener noreferrer" className="text-primary underline text-lg">
              🔗 {ref.refrenceName}
            </a>
          ))}
        </div>
        <CustomButton bgClassName="bg-secondary" text="Continue" menuButton={true} onClick={handleContinue} />
      </div>
    );
  };

  // Handler for when an answer button is clicked. We check to avoid double clicks.
  const handleAnswer = (selected: 1 | 2 | 3 | 4) => {
    if (answer !== 0) return; // Prevent processing if an answer has already been chosen
    selectAnswer(selected);
  };

  return (
    <div className="h-full flex justify-center items-center bg-base-300 flex-col">
      <div className="bg-base-200 p-8 rounded-box w-3/4 h-3/4">
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex gap-2 justify-center">
              <CustomScoreUI />
              <QuitButton />
            </div>
            {gameEnded ? (
              <GameEndedScreen />
            ) : cardFlip ? (
              <motion.div
                key="explanation"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex flex-col h-full"
              >
                <ExplanationScreen />
              </motion.div>
            ) : (
              <motion.div
                key="game"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex flex-col h-full"
              >
                <div className="bg-base-300 p-8 h-full flex flex-1 flex-col justify-center items-center gap-6 relative">
                  <h1 className="text-2xl text-base-content text-center">{gameData[currentQuestionIndex].question}</h1>
                  <div className="grid grid-cols-2 gap-12 w-full place-items-center">
                    <CustomButton text={gameData[currentQuestionIndex].answers[0]} bgClassName="bg-success" onClick={() => handleAnswer(1)} />
                    <CustomButton text={gameData[currentQuestionIndex].answers[1]} bgClassName="bg-warning" onClick={() => handleAnswer(2)} />
                    <CustomButton text={gameData[currentQuestionIndex].answers[2]} bgClassName="bg-secondary" onClick={() => handleAnswer(3)} />
                    <CustomButton text={gameData[currentQuestionIndex].answers[3]} bgClassName="bg-error" onClick={() => handleAnswer(4)} />
                  </div>
                  {/* You could display an immediate result overlay here if desired */}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameMenu;
