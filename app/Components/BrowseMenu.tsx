"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { MenuOption, QuestionData, DataType } from "../types";
import { getGames } from "../actions";

type BrowseMenuProps = {
  setMenuOption: (option: MenuOption) => void;
  setGameData: (gameData: QuestionData[]) => void;
};

const BrowseMenu = ({ setMenuOption, setGameData }: BrowseMenuProps) => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const TopicItemCard = ({ data }: { data: DataType }) => (
    <div className="bg-base-200 h-[450px] w-[300px] p-5 rounded-box">
      <div className="flex flex-col bg-base-300 rounded-box h-full">
        <img className="w-[260px] h-[130px] bg-base object-cover" src={data.image} />
        <div className="flex flex-col justify-between h-full p-5">
          <div>
            <p className="text-base-content text-center text-sm">Quiz About:</p>
            <h1 className="text-base-content text-center text-2xl">{data.topic}</h1>
          </div>

          <div className="flex gap-3 flex-col">
            <div className="flex gap-2 flex-col">
              <div className="bg-primary rounded-box">
                <h2 className="text-base-content text-center">Difficulty</h2>
                <h1 className="text-base-content text-center capitalize bg-secondary rounded-b-box">{data.difficulty}</h1>
              </div>

              <div className="bg-primary rounded-box">
                <h2 className="text-base-content text-center">Created By</h2>
                <h1 className="text-base-content text-center capitalize bg-secondary rounded-b-box">{data.userName}</h1>
              </div>
            </div>
          </div>
          <CustomButton
            bgClassName="bg-secondary"
            text="Play"
            menuButton={true}
            onClick={() => {
              setGameData(data.questions);
            }}
          />
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const getDatafunc = async () => {
      setLoading(true);
      const data = await getGames();
      setData(data.games);
      setLoading(false);
    };
    getDatafunc();
  }, []);

  return (
    <div className="bg-base-200 p-6 rounded-box h-full justify-between items-center">
      <div className="bg-base-300 rounded-box p-5 flex flex-col gap-5 h-full">
        <div className="h-20">
          <CustomButton bgClassName="bg-primary" text="Go Back To Menu" menuButton={true} onClick={() => setMenuOption("start")} />
          <h1 className="text-2xl text-base-content text-center">What Topic Are You Interested In</h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-full">
            <span className="loading loading-ring loading-lg text-primary"></span>
          </div>
        ) : data ? (
          <div className="grid grid-cols-3 place-items-center gap-5 overflow-scroll">
            {data.map((g) => (
              <TopicItemCard data={g} key={g.id} />
            ))}
          </div>
        ) : (
          <h1 className="text-warning text-center">Error Getting Games</h1>
        )}
      </div>
    </div>
  );
};

export default BrowseMenu;
