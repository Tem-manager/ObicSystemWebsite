import React from "react";
import { PiTextTBold } from "react-icons/pi";
import StatusBadge from "../../../../Components/ui/StatusBadge";

interface Props {
  textStyle: "normal" | "bold" | "italic";
  onToggleTextStyle: (style: "normal" | "bold" | "italic") => void;
}

const TextStyleToggle: React.FC<Props> = ({ textStyle, onToggleTextStyle }) => {
  const toggleTextStyle = () => {
    const nextStyle =
      textStyle === "normal" ? "bold" : textStyle === "bold" ? "italic" : "normal";
    onToggleTextStyle(nextStyle);
  };

  return (
    <StatusBadge
      content={
        <button onClick={toggleTextStyle} title="Toggle Text Style">
          <PiTextTBold />
        </button>
      }
      textSize="text-lg"
    />
  );
};

export default TextStyleToggle;
