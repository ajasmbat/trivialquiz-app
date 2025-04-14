import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { useUser } from "../UserContext";

const UserInput = () => {
  const { login } = useUser();
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (name.trim() === "") {
      setError(true);
    } else {
      login({ name: name.trim() });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="bg-base-300 h-dvh flex justify-center items-center">
      <div className="bg-base-200 p-6 rounded-box w-1/2 h-1/2 justify-between items-center">
        <div className="bg-base-300 flex flex-col justify-between items-center rounded-box h-full p-20 space-y-6">
          <h1 className="text-2xl text-base-content">What is your name?</h1>
          <input
            type="text"
            placeholder="Type Here"
            className="input-primary rounded-box p-2 text-base-content text-2xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {error && <p className="text-warning">Please Enter A Name</p>}
          <CustomButton text="ENTER" bgClassName={"bg-primary"} customClass="hover:bg-secondary hover:text-secondary-content" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
