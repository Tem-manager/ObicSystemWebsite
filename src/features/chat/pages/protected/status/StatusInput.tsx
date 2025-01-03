import React, { useState } from "react"; 
import { RiSendPlane2Fill } from "react-icons/ri";
import StatusBadge from "../../../../../Components/ui/StatusBadge";
import CloseIcon from "../../../Components/Ui/CloseIcon";
import BackgroundColorSelector from "../../../Components/Ui/BackgroundColorSelector";
import TextStyleToggle from "../../../Components/Ui/TextStyleToggle";
import { StatusbgColor } from "../../../Constants/StatusbgColor";
import Feeling from "../../../Components/Ui/Feeling";

const StatusInput: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
  const [textStyle, setTextStyle] = useState<"normal" | "bold" | "italic">("normal");
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 600) {
      setStatus(e.target.value);
    }
  };

  const handleSend = () => {
    if (!status.trim()) {
      alert("Please enter a status before sending.");
      return;
    }
    alert(`Status sent: ${status}`);
  };

  return (
    <div
      className={`relative h-full w-full flex justify-center 
        ${StatusbgColor[currentColorIndex]} items-center text-center bg-contain bg-no-repeat bg-center opacity-75`}
      style={{
        
        backgroundImage: selectedEmoji
          ? `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><text x='20' y='50' font-size='50'>${selectedEmoji}</text></svg>`
            )}")`
          : "none",
       
      }}
    >
      <div
        className="relative flex flex-col items-center justify-center w-full max-w-3xl 
        text-white h-3/4 px-10"
      >
        <textarea
          value={status}
          onChange={handleInputChange} // Fix applied here
          placeholder="Type a Status"
          className="bg-transparent placeholder-white outline-none text-center text-xl resize-none w-full h-full
          overflow-hidden leading-6 "
          style={{
            fontWeight: textStyle === "bold" ? "bold" : "normal",
            fontStyle: textStyle === "italic" ? "italic" : "normal",
          }}
          rows={1}
          maxLength={600}
        />
      </div>

      {/* Control Buttons */}
      <div className="absolute top-4 right-4 p-2">
        <div className="flex space-x-2">
          <Feeling onFeelingSelect={setSelectedEmoji} />
          <BackgroundColorSelector
            colors={StatusbgColor}
            currentColorIndex={currentColorIndex}
            onChangeColor={setCurrentColorIndex}
          />
          <TextStyleToggle textStyle={textStyle} onToggleTextStyle={setTextStyle} />
          
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
        <div className="text-sm">{600 - status.length} characters left</div>
        <button onClick={handleSend}>
          <StatusBadge
            content={<RiSendPlane2Fill />}
            color="bg-green-500"
            textColor="text-white"
            textSize="text-2xl"
            size={12}
          />
        </button>
      </div>
    </div>
  );
};

export default StatusInput;
