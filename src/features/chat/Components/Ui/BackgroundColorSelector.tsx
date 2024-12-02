import React from "react";
import { FaPalette } from "react-icons/fa";
import StatusBadge from "../../../../Components/ui/StatusBadge";

interface Props {
  colors: string[];
  currentColorIndex: number;
  onChangeColor: (index: number) => void;
}

const BackgroundColorSelector: React.FC<Props> = ({
  colors,
  currentColorIndex,
  onChangeColor,
}) => {
  const handleColorChange = () => {
    onChangeColor((currentColorIndex + 1) % colors.length);
  };

  return (
    <StatusBadge
      content={
        <button onClick={handleColorChange} title="Change Background Color">
          <FaPalette />
        </button>
      }
      textSize="text-lg"
    />
  );
};

export default BackgroundColorSelector;
