import React from "react";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus";

interface ImageMessageProps {
  imageUrl: string; // رابط الصورة
  time: string; // وقت الرسالة
  isSent: boolean; // true إذا كانت الرسالة مرسلة، false إذا مستقبلة
  status: "sending" | "sent" | "read" | "failed"; // حالة الرسالة
  comment?: string; // التعليق النصي (اختياري)
  onReply?: (replyContent: string) => void; // دالة الرد
}

const ImageMessage: React.FC<ImageMessageProps> = ({
  imageUrl,
  time,
  isSent,
  status,
  comment,
  onReply,
}) => {
  return (
    <div
      className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}
      onDoubleClick={() =>
        onReply &&
        onReply(
          comment
            ? `Image: ${imageUrl}\nComment: ${comment}`
            : `Image: ${imageUrl}`
        )
      } // استدعاء الرد عند الضغط مرتين
    >
      {/* الحاوية الرئيسية للرسالة */}
      <div
        className={`p-4 rounded-lg shadow-lg relative ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* الصورة */}
        <div className="w-full max-w-[400px] max-h-[400px] overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt="message"
            className="object-contain w-full h-full"
          />
        </div>

        {/* التعليق النصي */}
        {comment && (
          <p
            className={`mt-2 text-sm leading-relaxed ${
              isSent ? "text-white" : "text-gray-800"
            }`}
          >
            {comment}
          </p>
        )}

        {/* الوقت وحالة الرسالة */}
        <div className="flex items-center justify-between mt-2">
          {/* الوقت */}
          <span className="text-xs">
            <TimeDisplay time={time} />
          </span>

          {/* حالة الرسالة - تظهر فقط للرسائل المرسلة */}
          {isSent && <MessageStatus status={status} />}
        </div>
      </div>
    </div>
  );
};

export default ImageMessage;
