import { faMusic, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useRef, useEffect, useState, ChangeEvent } from "react";

const NavigationTab: React.FC = () => {
  // State to track if sound is enabled
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  // useRef to store the audio element with proper type annotation
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create the audio element on initial mount if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio("/sound.mp3"); // Ensure this file exists in your public folder
      audioRef.current.loop = true;
    }

    // Play or pause the audio based on soundEnabled state
    if (soundEnabled) {
      audioRef.current.play().catch((err) => {
        console.error("Audio play error:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [soundEnabled]);

  // Handle toggle switch changes
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setSoundEnabled(event.target.checked);
  };

  return (
    <div className="navbar bg-base-100 flex justify-between items-center w-full fixed px-4 h-28">
      {/* Left section: LEADERBOARDS */}
      <div
        className="w-fit bg-primary p-2 rounded-box flex items-center gap-2 transition-all duration-300 ease-in-out
        hover:scale-95 hover:bg-primary-content group cursor-pointer"
      >
        <a className="flex items-center justify-between h-10" href="https://github.com/ajasmbat/trivialquiz-app">
          <svg className="h-full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
          </svg>
          <h1 className="text-primary-content transition-all duration-300 ease-in-out group-hover:text-primary">GITHUB</h1>
        </a>
      </div>

      {/* Center section: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src="/logo.png" width={100} height={100} alt="QUIZGENIE" />
      </div>

      {/* Toggle switch controls sound */}
      <div className="flex gap-2 items-center justify-center bg-base-200 p-5 rounded-box">
        <FontAwesomeIcon icon={faMusic} />
        <input
          type="checkbox"
          checked={soundEnabled}
          onChange={handleToggle}
          className="toggle border-primary-content bg-primary text-primary-content checked:bg-secondary checked:text-secondary-content checked:border-secondary-content"
        />
      </div>
    </div>
  );
};

export default NavigationTab;
