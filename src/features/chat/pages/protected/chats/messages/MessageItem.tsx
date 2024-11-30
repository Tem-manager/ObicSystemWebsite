


import React from "react";
import TimeDisplay from "../../../../../../Components/ui/TimeDisplay";

interface MessageProps {
  text: string;
  time: string;
  type: "sent" | "received";
}

const MessageItem: React.FC<MessageProps> = ({ text, time, type }) => {
  return (
    <div
      className={`flex ${type === "sent" ? "justify-end" : "justify-start"} my-2`}
    >
      <div
        className={`max-w-xs p-3 rounded-lg ${
          type === "sent" ? "bg-[#192745] text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        <p className="text-sm">{text}</p>
        <TimeDisplay time={time} className="text-xs mt-1 text-right" />
      </div>
    </div>
  );
};

export default MessageItem;

