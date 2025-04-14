"use client";
import { useEffect, useState } from "react";
import GameMenu from "./Components/GameMenu";
import NavigationTab from "./Components/NavigationTab";
import StartMenu from "./Components/StartMenu";
import UserInput from "./Components/UserInput";
import BrowseMenu from "./Components/BrowseMenu";
import { useUser } from "./UserContext";
import { gameOptions, QuestionData } from "./types";

type Reference = {
  name: string;
  link: string;
};

// type QuestionData = {
//   question: string;
//   answers: string[];
//   correctAnswer: number;
//   explanation: string;
//   time: number;
//   references: Reference[];
// };

export default function Home() {
  const { user } = useUser();
  const [gameInfo, setGameInfo] = useState<gameOptions | null>(null);
  const [gameData, setGameData] = useState<QuestionData[]>([]);

  const [menuOption, setMenuOption] = useState<"start" | "browse">("start");

  return user ? (
    <div className="flex flex-col h-screen">
      <NavigationTab />
      <div className="flex-grow mt-28">
        {gameInfo || gameData.length > 0 ? (
          <GameMenu gameOptions={gameInfo} setGameOptions={setGameInfo} setMenuOption={setMenuOption} gameData={gameData} setGameData={setGameData} />
        ) : menuOption === "start" ? (
          <StartMenu setMenuOption={setMenuOption} setGameInfo={setGameInfo} />
        ) : menuOption === "browse" ? (
          <BrowseMenu setMenuOption={setMenuOption} setGameData={setGameData} />
        ) : null}
      </div>
    </div>
  ) : (
    <UserInput />
  );
}
