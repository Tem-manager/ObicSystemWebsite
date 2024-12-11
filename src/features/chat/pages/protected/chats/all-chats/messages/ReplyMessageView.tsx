import React from "react";

const DisplayReply: React.FC = () => {
  // تعريف بيانات الرسالة الأصلية داخل المكون
  const originalMessage = "This is the original message content that was replied to.";
  const sender = "John Doe";
  const time = "12:30 PM";

  return (
    <div className="flex flex-col p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm">
      {/* معلومات المرسل */}
      <div className="flex items-center space-x-2">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {sender}
        </p>
        <span className="text-xs text-gray-500 dark:text-gray-400">{time}</span>
      </div>

      {/* محتوى الرسالة الأصلية */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 break-words">
        {originalMessage}
      </p>
    </div>
  );
};

export default DisplayReply;
