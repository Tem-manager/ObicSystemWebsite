import React from "react";
import StatusBadge from "../../../../Components/ui/StatusBadge";
import { IoClose } from "react-icons/io5";

interface DialogProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean; // Control whether the dialog is visible
  BgColor?: string;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  BgColor = "bg-slate-600",
  children,
}) => {
  if (!isOpen) return null; // Render nothing if not open

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close dialog when clicking the overlay
    >
      <div
        className={`${BgColor} p-4 rounded w-screen h-screen relative`}
        onClick={(e) => e.stopPropagation()} // Prevent background click from triggering close
      >
        <button
          className="absolute top-4 left-4 z-50"
          onClick={onClose} // Close button
        >
          <StatusBadge content={<IoClose />} textSize="text-2xl" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
