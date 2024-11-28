import React from "react";

interface GenericCardProps {
  leftComponent?: React.ReactNode; // Component to display on the left
  centerComponent?: React.ReactNode; // Component(s) to display in the center
  rightComponent?: React.ReactNode; // Component(s) to display on the right
  className?: string; // Additional styling for the card
  onClick?: () => void; // Optional click handler
}

const GenericCard: React.FC<GenericCardProps> = ({
  leftComponent,
  centerComponent,
  rightComponent,
  className,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center  cursor-pointer border-b border-gray-300 last:border-b-0 hover:bg-gray-100 ${className}`}
      onClick={onClick}
    >
      {/* Left Component */}
      {leftComponent && <div className="mr-4">{leftComponent}</div>}

      {/* Center Component */}
      <div className="flex-1">{centerComponent}</div>

      {/* Right Component */}
      {rightComponent && <div className="flex flex-col items-end text-right">{rightComponent}</div>}
    </div>
  );
};

export default GenericCard;
