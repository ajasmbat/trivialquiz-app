import React from "react";
import CustomButton from "./CustomButton";

const StartMenu = () => {
  return (
    <div className="bg-base-300 h-full flex justify-center items-center">
      <div className="bg-base-200 p-6 rounded-box w-1/2 h-1/2 justify-between items-center">
        <div className="bg-base-300 flex flex-col justify-between items-center rounded-box h-full p-20">
          <h1 className="text-2xl text-base-content">What Topic Are You Intrested In</h1>
          <input type="text" placeholder="Type Here" className="input-primary rounded-box p-2 text-base-content text-2xl" />
          <div className="flex justify-between w-full">
            <CustomButton text={"START"} bgClassName={"bg-success"} menuButton={true} />
            <CustomButton text={"RANDOM TOPIC"} bgClassName={"bg-warning"} menuButton={true} />
            <CustomButton text={"BROWSE TOPIC"} bgClassName={"bg-secondary"} menuButton={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
