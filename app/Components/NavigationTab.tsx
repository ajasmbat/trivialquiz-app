import { faBars, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const NavigationTab = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between w-full">
      <div
        className="w-fit bg-primary p-2 rounded-box flex items-center gap-2 transition-all duration-300 ease-in-out
        hover:scale-95 hover:bg-primary-content group cursor-pointer"
      >
        <FontAwesomeIcon width={40} icon={faTrophy} className="text-primary-content transition-all duration-300 ease-in-out group-hover:text-primary" />
        <h1 className="text-primary-content transition-all duration-300 ease-in-out group-hover:text-primary">LEADERBOARDS</h1>
      </div>

      <div>
        <Image src="/logo.png" width={100} height={100} alt="QUIZGENIE" />
      </div>

      <div className="w-14 bg-primary p-2 rounded-box flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-content cursor-pointer">
        <FontAwesomeIcon icon={faBars} className="text-primary-content transition-all duration-300 ease-in-out" />
      </div>
    </div>
  );
};

export default NavigationTab;
