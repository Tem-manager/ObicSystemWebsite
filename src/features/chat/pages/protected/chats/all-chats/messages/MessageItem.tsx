import React from "react";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus"; // استيراد MessageStatus

interface MessageProps {
  text: string;
  time: string;
  isSent: boolean; // true إذا كانت الرسالة مرسلة، false إذا مستقبلة
  status: "sending" | "sent" | "read" | "failed"; // الحالة الجديدة للرسالة
}

const Message: React.FC<MessageProps> = ({ text, time, isSent, status }) => {
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-full sm:max-w-xs md:max-w-sm px-4 py-2 rounded-lg shadow-lg overflow-hidden ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        <p className="text-sm break-words whitespace-pre-wrap">{text}</p>

        <div
          className={`flex items-center justify-between mt-2 ${
            isSent ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {/* الوقت */}
          <span className="text-xs">
            <TimeDisplay time={time} />
          </span>

          {/* حالة الرسالة (أيقونة) */}
          {isSent && <MessageStatus status={status} />}
        </div>
      </div>
    </div>
  );
};

export default Message;
