import React from "react";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus";

interface VideoMessageProps {
  videoUrl: string;
  comment: string;
  time: string;
  isSent: boolean;
  status?: "sending" | "sent" | "read" | "failed";
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
        className={`w-full max-w-sm md:max-w-md px-4 py-3 rounded-lg shadow-md ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* الفيديو */}
        <div className="mb-3">
          <video
            src={videoUrl}
            controls
            className="w-full h-auto max-h-[300px] rounded-lg aspect-video"
          ></video>
        </div>

        {/* التعليق */}
        <p className="text-sm leading-relaxed">{comment}</p>

        {/* الوقت وحالة الرسالة */}
        <div className="flex justify-between items-center mt-3">
          {/* الوقت */}
          <span className="block text-xs text-gray-500">
            <TimeDisplay time={time} />
          </span>

          {/* حالة الرسالة */}
          {isSent && status && <MessageStatus status={status} />}
        </div>
      </div>
    </div>
  );
};


export default VideoMessage;
