import React, { useState } from "react";
import { FaPalette } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import { PiTextTBold } from "react-icons/pi";
import StatusBadge from "../../../../../Components/ui/StatusBadge";
import CloseIcon from "../../../Components/Ui/CloseIcon";

const StatusInput: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
  const [textStyle, setTextStyle] = useState<"normal" | "bold" | "italic">("normal");

  const colors = [
    "bg-purple-700",
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-pink-500",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 680) {
      setStatus(e.target.value);
    }
  };

  const handleColorChange = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const handleSend = () => {
    alert(`Status sent: ${status}`);
  };

  const toggleTextStyle = () => {
    setTextStyle((prevStyle) => {
      if (prevStyle === "normal") return "bold";
      if (prevStyle === "bold") return "italic";
      return "normal";
    });
  };

  return (
    <div
      className={`relative h-full w-full flex flex-col items-center justify-center text-center ${colors[currentColorIndex]}`}
    >
      <textarea
        value={status}
        onChange={handleInputChange}
        placeholder="Type a status"
        className={`text-white placeholder-white bg-transparent outline-none text-4xl w-full max-w-3xl text-center h-auto resize-none leading-6`}
        style={{
          fontWeight: textStyle === "bold" ? "bold" : "normal",
          fontStyle: textStyle === "italic" ? "italic" : "normal",
          textAlign: "center",
        }}
        maxLength={680}
      ></textarea>

      {/* Top Buttons */}
      <div className="absolute top-4 right-4 p-2">
        <div className="flex">
          {/* Background Color Button */}
          <StatusBadge
            content={
              <button onClick={handleColorChange} title="Change Background Color">
                <FaPalette />
              </button>
            }
            textSize="text-lg"
          />

          {/* Text Style Toggle Button */}
          <StatusBadge
            content={
              <button onClick={toggleTextStyle} title="Toggle Text Style">
                <PiTextTBold />
              </button>
            }
            textSize="text-lg"
          />
        </div>
      </div>

      {/* Close Icon */}
      <div className="absolute top-4 left-4 p-2">
        <CloseIcon />
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white flex justify-between items-center p-4"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="text-sm">{680 - status.length} characters left</div>
        <button onClick={handleSend}>
          <StatusBadge
            content={<RiSendPlane2Fill />}
            color={"bg-green-500"}
            textColor={"text-white"}
            textSize="text-2xl"
            size={12}
          />
        </button>
      </div>
    </div>
  );
};

export default StatusInput;
