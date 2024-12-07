import React from "react";
import { moods } from "../../../Constants/moods";

interface MoodGridProps {
  onMoodSelect: (mood: { emoji: string; label: string }) => void;
}

const MoodGrid: React.FC<MoodGridProps> = ({ onMoodSelect }) => {
  return (
    <div className="overflow-y-auto max-h-[60vh] bg-gray-100 rounded-lg shadow-lg">
      <div className="w-80 grid grid-cols-3 gap-4 p-4">
        {moods.map((mood, index) => (
          <div
            key={index}
            role="button"
            aria-label={`Select mood ${mood.label}`}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer hover:bg-gray-50 transition"
            onClick={() => onMoodSelect(mood)}
          >
            <div className="text-3xl">{mood.emoji}</div>
            <p className="mt-2 text-sm text-gray-700 font-medium">{mood.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodGrid;
