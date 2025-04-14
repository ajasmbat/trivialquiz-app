import Image from "next/image";
import NavigationTab from "./Components/NavigationTab";
import StartMenu from "./Components/StartMenu";
import GameMenu from "./Components/GameMenu";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavigationTab />
      <div className="flex-grow">
        <StartMenu />
      </div>
    </div>
  );
}
