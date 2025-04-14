import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CustomDropdown from "./CustomDropdown";
import { MenuOption } from "../types";
import { gameOptions } from "../types";
import { time } from "console";

type StartMenuProps = {
  setMenuOption: (option: MenuOption) => void;
  setGameInfo: (gameData: gameOptions) => void;
};

const StartMenu = ({ setMenuOption, setGameInfo }: StartMenuProps) => {
  const [topic, setTopic] = useState("");
  const [questionAmount, setQuestionAmount] = useState(10);
  const [difficulty, setDifficulty] = useState("Easy");
  const [quizTime, setquizTime] = useState(10);
  const [topicErrorMessage, setTopicErrorMessage] = useState<boolean>(false);

  const setGameDataFunc = () => {
    if (topic.trim()) {
      setGameInfo({ topic: topic.trim(), difficulty: difficulty, amount: questionAmount });
    } else {
      setTopicErrorMessage(true);
    }
  };

  return (
    <div className="bg-base-300 h-full flex justify-center items-center">
      <div className="bg-base-200 p-6 rounded-box w-3/4 h-4/5 justify-between items-center">
        <div className="bg-base-300 flex flex-col justify-between items-center rounded-box h-full p-10 gap-6">
          <div className="flex items-center justify-center flex-1 w-full gap-20">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl text-base-content">What Topic Are You Interested In?</h1>
              <input type="text" placeholder="Type Here" value={topic} onChange={(e) => setTopic(e.target.value)} className="input input-primary rounded-box p-2 text-base-content text-2xl w-full" />
              <p className={`text-warning ${topicErrorMessage ? "" : "hidden"}`}>Please Enter A Topic Name</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center">
                <label>Questions: {questionAmount}</label>
                <input type="range" min="5" max="20" value={questionAmount} onChange={(e) => setQuestionAmount(Number(e.target.value))} className="range" />
              </div>

              <CustomDropdown label="Choose Difficulty" options={["Easy", "Medium", "Hard"]} onSelect={(value: string) => setDifficulty(value)} />

              {/* <div className="flex flex-col items-center">
                <label>Quiz Time: {quizTime} Minutes</label>
                <input type="range" min="2" max="30" step="1" value={quizTime} onChange={(e) => setquizTime(Number(e.target.value))} className="range" />
              </div> */}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center w-full gap-4 mt-4">
            <CustomButton text={"START"} bgClassName={"bg-success"} menuButton={true} onClick={() => setGameDataFunc()} />
            <CustomButton text={"BROWSE TOPIC"} bgClassName={"bg-secondary"} menuButton={true} onClick={() => setMenuOption("browse")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
