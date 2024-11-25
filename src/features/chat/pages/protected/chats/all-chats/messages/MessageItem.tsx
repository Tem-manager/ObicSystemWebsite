import React from "react";
import CheckIcon from "../../../../../Components/Ui/CheckIcon"; // مكون الأيقونات
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";

interface MessageItemProps {
  message: string; // نص الرسالة
  time: string; // الوقت
  status: "sent" | "delivered" | "seen"; // حالة الرسالة
  isSender?: boolean; // هل المرسل هو المستخدم الحالي؟
}

const MessageItem: React.FC<MessageItemProps> = ({ message, time, status, isSender = false }) => {
  return (
    <div
      className={`flex flex-col items-${isSender ? "end" : "start"} max-w-xs mb-4 ${
        isSender ? "self-end" : "self-start"
      }`}
    >
      {/* فقرة الرسالة */}
      <div
        className={`p-3 rounded-lg ${
          isSender ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {message}
      </div>

      {/* حالة الرسالة والوقت */}
      <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
       <TimeDisplay/>
        <CheckIcon status={status} className="w-4 h-4" />
      </div>
    </div>
  );
};

export default MessageItem;
