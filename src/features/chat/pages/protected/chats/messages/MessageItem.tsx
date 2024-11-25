// import React from "react";

// interface MessageItemProps {
//   message: {
//     senderName: string; // اسم المرسل
//     text: string; // نص الرسالة
//     time: string; // وقت الرسالة
//     type: "sent" | "received"; // نوع الرسالة: إرسال أو استقبال
//   };
// }

// const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
//   // تحديد الأنماط بناءً على نوع الرسالة
//   const messageStyle =
//     message.type === "sent"
//       ? "bg-blue-500 text-white self-end" // رسائل الإرسال باللون الأزرق والنص باللون الأبيض
//       : "bg-white text-gray-700 self-start"; // رسائل الاستقبال باللون الأبيض والنص باللون الرمادي

//   return (
//     <div
//       className={`flex flex-col max-w-xs p-3 my-2 rounded-lg shadow ${
//         message.type === "sent" ? "ml-auto" : "mr-auto"
//       } ${messageStyle}`}
//     >
//       <div className="flex justify-between items-center">
//         <span className="font-medium">{message.senderName}</span>
//         <span className="text-xs text-gray-500">{message.time}</span>
//       </div>
//       <p className="text-sm">{message.text}</p>
//     </div>
//   );
// };

// export default MessageItem;



import React from "react";

interface MessageItemProps {
  message: {
    text: string; // نص الرسالة
    time: string; // وقت الرسالة
    type: "sent" | "received"; // نوع الرسالة: إرسال أو استقبال
    isReply?: boolean; // هل الرسالة رد؟
    senderName?: string; // اسم المرسل (اختياري)
  };
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const messageStyle =
    message.type === "sent"
      ? "bg-blue-700 text-white self-end"
      : "bg-white text-gray-700 self-start";

  return (
    <div
      className={`flex flex-col max-w-xs p-3 my-2 rounded-lg shadow ${
        message.type === "sent" ? "ml-auto" : "mr-auto"
      } ${messageStyle}`}
    >
      {/* عرض الاسم فقط إذا كانت الرسالة ردًا */}
      {message.isReply && message.senderName && (
        <span className="font-medium text-xs text-gray-500">
          {message.senderName}
        </span>
      )}
      <p className="text-sm">{message.text}</p>
      <span className="text-xs text-gray-500 mt-1">{message.time}</span>
    </div>
  );
};

export default MessageItem;
