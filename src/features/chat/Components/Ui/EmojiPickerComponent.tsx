import React, { useState } from "react";
import { FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import StatusBadge from "../../../../Components/ui/StatusBadge";

interface Props {
  onEmojiSelect: (emoji: string) => void;
  position?:string
}

const EmojiPickerComponent: React.FC<Props> = 
({ onEmojiSelect,
  position="absolute bottom-20 left-4"
 }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleEmojiPicker = () => {
    setIsOpen((prev) => !prev);
  };

  const handleEmojiClick = (emoji: any) => {
    onEmojiSelect(emoji.emoji);
    setIsOpen(false);
  };

  return (
    <>
      <StatusBadge
        content={
          <button onClick={toggleEmojiPicker} title="Pick Emoji">
            <FaSmile />
          </button>
        }
        textSize="text-lg"
        color="text-yellow-300"
      />
      {isOpen && (
        <div className={`${position} bg-white shadow-lg rounded-lg p-2 z-10`}>
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </>
  );
};

export default EmojiPickerComponent;
