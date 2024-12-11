import React, { useState } from "react";
import { FaSmile } from "react-icons/fa";
import StatusBadge from "../../../../Components/ui/StatusBadge";
import MoodGrid from "../../pages/protected/status/Stores";

interface Props {
  onFeelingSelect: (emoji: string) => void;
}

const Feeling: React.FC<Props> = ({ onFeelingSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleEmojiPicker = () => setIsOpen((prev) => !prev);

  const handleMoodSelect = (mood: { emoji: string; label: string }) => {
    onFeelingSelect(mood.emoji); // Notify parent
    setIsOpen(false); // Close picker
  };

  return (
    <div className="relative">
      <StatusBadge
        content={
          <button
            onClick={toggleEmojiPicker}
            title="Pick Emoji"
            aria-label="Pick a feeling"
            className="focus:outline-none"
          >
            <FaSmile   />
          </button>
        }
        textSize="text-lg"
      />
      {isOpen && (
        <div className="absolute top-12 right-0 p-2 z-10">
          <MoodGrid onMoodSelect={handleMoodSelect} />
        </div>
      )}
    </div>
  );
};

export default Feeling;
