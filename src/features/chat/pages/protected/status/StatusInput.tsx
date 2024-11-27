// components/StatusInput.tsx
import React, { useState } from "react";

const StatusInput: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("bg-purple-700");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleColorChange = (color: string) => {
    setBgColor(color);
  };

  return (
    <div
      className={`relative h-full w-full flex flex-col items-center justify-center text-center ${bgColor}`}
    >
      {/* Input Field */}
      <input
        type="text"
        value={status}
        onChange={handleInputChange}
        placeholder="Type a status"
        className="text-white placeholder-white bg-transparent outline-none text-2xl"
      />

      {/* Buttons for Changing Colors */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => handleColorChange("bg-purple-700")}
          className="w-8 h-8 bg-purple-700 rounded-full border-2 border-white"
        ></button>
        <button
          onClick={() => handleColorChange("bg-red-500")}
          className="w-8 h-8 bg-red-500 rounded-full border-2 border-white"
        ></button>
        <button
          onClick={() => handleColorChange("bg-green-500")}
          className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"
        ></button>
      </div>
    </div>
  );
};

export default StatusInput;