
import React from "react";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus"; // استيراد مكون MessageStatus

interface ImageMessageProps {
  imageUrl: string;
  time: string;
  isSent: boolean; // true إذا كانت الرسالة مرسلة، false إذا مستقبلة
  status: "sending" | "sent" | "read" | "failed"; // إضافة حالة الرسالة
  comment?: string; // التعليق النصي (اختياري)
}

const ImageMessage: React.FC<ImageMessageProps> = ({
  imageUrl,
  time,
  isSent,
  status,
  comment,
}) => {
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      {/* الحاوية الرئيسية للرسالة */}
      <div
        className={`p-2 rounded-lg shadow ${
          isSent ? "bg-[#192745]" : "bg-white"
        }`}
      >
        {/* الصورة */}
        <div className="max-w-[10rem] max-h-[10rem] overflow-hidden rounded-lg">
  <img
    src={imageUrl}
    alt="message"
    className="object-contain w-full h-full"
  />
</div>

        
        {/* التعليق النصي */}
        {comment && (
          <p
            className={`mt-2 text-sm ${isSent ? "text-white" : "text-gray-800"}`}
          >
            {comment}
          </p>
        )}
        
        {/* حالة الرسالة - تظهر فقط للرسائل المرسلة */}
        {isSent && <MessageStatus status={status} />}

        {/* الوقت */}
        <span
          className={`block text-xs mt-2 ${
            isSent ? "text-white" : "text-gray-500"
          }`}
        >
          <TimeDisplay time={time} />
        </span>
      </div>
    </div>
  );
};

export default ImageMessage;
