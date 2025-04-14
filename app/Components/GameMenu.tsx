"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHeart } from "@fortawesome/free-solid-svg-icons";

const GameMenu = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [answer, selectAnswer] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const CustomTimer = () => (
    <span className="text-3xl font-mono text-primary-content bg-primary p-2 rounded-t-2xl">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </span>
  );

  const CustomHealthUI = () => (
    <span className="text-2xl font-mono text-secondary-content bg-secondary p-2 rounded-t-2xl flex gap-2 items-center">
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
    </span>
  );

  const CustomScoreUI = () => (
    <span className="text-2xl font-mono text-secondary bg-secondary-content p-2 rounded-t-2xl gap-6 flex items-center justify-center">
      <FontAwesomeIcon icon={faCoins} />
      <h1>43</h1>
    </span>
  );

  return (
    <div className="h-full flex justify-center items-center bg-base-300 flex-col">
      <div className="flex gap-2">
        <CustomHealthUI />
        <CustomTimer />
        <CustomScoreUI />
      </div>

      <div className="bg-base-200 p-8 rounded-box w-3/4 h-3/4 ">
        <div className="bg-base-300 p-8 w-full h-full flex flex-col justify-center items-center gap-6 relative">
          <h1 className="text-2xl text-base-content text-center">What is the capital city of Japan?</h1>
          <div className="grid grid-cols-2 gap-12 w-full place-items-center">
            <CustomButton text="Beijing" bgClassName="bg-success" />
            <CustomButton text="Tokyo" bgClassName="bg-warning" />
            <CustomButton text="Seoul" bgClassName="bg-secondary" />
            <CustomButton text="Bangkok" bgClassName="bg-error"  />
          </div>

          {showResult &&
            (isCorrect ? (
              <div className="bg-success flex flex-col justify-center items-center absolute w-full h-full opacity-90 rounded-box">
                <h1 className="text-4xl text-center">CORRECT</h1>
              </div>
            ) : (
              <div className="bg-red-600 flex flex-col justify-center items-center absolute w-full h-full opacity-85 rounded-box">
                <h1 className="text-4xl text-center">INCORRECT</h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GameMenu;
