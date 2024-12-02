// import React from "react";
// import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
// import MessageStatus from "../../../../../Components/Ui/MessageStatus"; // استيراد MessageStatus

// interface MessageProps {
//   text: string;
//   time: string;
//   isSent: boolean; // true إذا كانت الرسالة مرسلة، false إذا مستقبلة
//   status: "sending" | "sent" | "read" | "failed"; // الحالة الجديدة للرسالة
// }

// const Message: React.FC<MessageProps> = ({ text, time, isSent, status }) => {
//   return (
//     <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
//       <div
//         className={`max-w-full sm:max-w-xs md:max-w-sm px-4 py-2 rounded-lg shadow-lg overflow-hidden ${
//           isSent
//             ? "bg-[#192745] text-white rounded-tr-none"
//             : "bg-white text-gray-800 rounded-tl-none"
//         }`}
//       >
//         <p className="text-sm break-words whitespace-pre-wrap">{text}</p>

//         <div
//           className={`flex items-center justify-between mt-2 ${
//             isSent ? "text-gray-300" : "text-gray-500"
//           }`}
//         >
//           {/* الوقت */}
//           <span className="text-xs">
//             <TimeDisplay time={time} />
//           </span>

//           {/* حالة الرسالة (أيقونة) */}
//           {isSent && <MessageStatus status={status} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;
import React from "react";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus"; // استيراد MessageStatus

interface MessageProps {
  text: string;
  time: string;
  isSent: boolean; // true إذا كانت الرسالة مرسلة، false إذا مستقبلة
  status: "sending" | "sent" | "read" | "failed"; // الحالة الجديدة للرسالة
  isDeleted?: boolean; // إضافة خاصية لتحديد ما إذا كانت الرسالة محذوفة
}

const Message: React.FC<MessageProps> = ({ text, time, isSent, status, isDeleted }) => {
  // تعبير منتظم لاكتشاف الروابط
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  // تعبير منتظم لاكتشاف الأرقام
  const phoneRegex = /\b\d{10,15}\b/g;

  // دالة لتحويل النص إلى رابط قابل للنقر
  const renderText = (text: string) => {
    // إذا كان النص يحتوي على روابط أو أرقام، سنقوم بتعديل النص
    let modifiedText = text;

    // تحويل الروابط إلى رابط clickable
    modifiedText = modifiedText.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" class="text-blue-500 underline">${url}</a>`;
    });

    // تحويل الأرقام إلى نص يمكن التعرف عليه (مثال: يمكن تحويله إلى رابط للمكالمة)
    modifiedText = modifiedText.replace(phoneRegex, (phone) => {
      return `<a href="tel:${phone}" class="text-blue-500 underline">${phone}</a>`;
    });

    return modifiedText;
  };

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`w-full max-w-lg sm:max-w-md px-4 py-3 rounded-lg shadow-lg overflow-hidden ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* إذا كانت الرسالة محذوفة */}
        {isDeleted ? (
          <p className={`text-sm ${isSent ? "text-gray-400" : "text-gray-600"}`}>
            {isSent ? "You deleted this message" : "This message was deleted"}
          </p>
        ) : (
          <p
            className="text-base sm:text-lg break-words whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: renderText(text) }} // عرض النص المعدل
          />
        )}

        {/* الوقت */}
        <div
          className={`flex items-center justify-between mt-2 ${
            isSent ? "text-gray-300" : "text-gray-500"
          }`}
        >
          <span className="text-xs">
            <TimeDisplay time={time} />
          </span>

          {/* حالة الرسالة (أيقونة) */}
          {!isDeleted && isSent && <MessageStatus status={status} />}
        </div>
      </div>
    </div>
  );
};

export default Message;

