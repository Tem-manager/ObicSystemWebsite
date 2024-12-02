import React, { useState } from "react";
import { FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import StatusBadge from "../../../../Components/ui/StatusBadge";

interface Props {
  onEmojiSelect: (emoji: string) => void;
}

const EmojiPickerComponent: React.FC<Props> = ({ onEmojiSelect }) => {
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
        <div className="absolute bottom-20 right-4 bg-white shadow-lg rounded-lg p-2 z-10">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </>
  );
};

export default EmojiPickerComponent;