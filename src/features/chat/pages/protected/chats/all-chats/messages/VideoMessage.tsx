
import React from "react";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus"; // استيراد مكون MessageStatus

interface VideoMessageProps {
  videoUrl: string; // رابط الفيديو
  comment: string;  // التعليق النصي
  time: string;     // وقت الرسالة
  isSent: boolean;  // true للمرسلة، false للمستقبلة
  status?: "sending" | "sent" | "read" | "failed"; // حالة الرسالة (اختياري)
}

const VideoMessage: React.FC<VideoMessageProps> = ({
  videoUrl,
  comment,
  time,
  isSent,
  status,
}) => {
  return (
    <div
      className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg shadow ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* الفيديو */}
        <div className="mb-2">
          <video
            src={videoUrl}
            controls
            className="w-full h-auto rounded-lg"
          ></video>
        </div>
        {/* التعليق */}
        <p className="text-sm">{comment}</p>

        {/* حالة الرسالة */}
        {isSent && status && (
          <div className="mt-2">
            <MessageStatus status={status} />
          </div>
        )}

        {/* الوقت */}
        <span className="block text-xs text-gray-500 mt-2">
          <TimeDisplay time={time} />
        </span>
      </div>
    </div>
  );
};

export default VideoMessage;
