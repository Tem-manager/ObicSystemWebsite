import React from "react";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus"; // استيراد مكون MessageStatus
import StatusBadge from "../../../../../../../Components/ui/StatusBadge"; // استيراد مكون الأيقونة

// استيراد أيقونات MUI
import MicIcon from "@mui/icons-material/Mic";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

interface AudioMessageProps {
  audioUrl: string; // رابط الملف الصوتي
  time: string; // وقت الرسالة
  isSent: boolean; // true إذا كانت الرسالة مرسلة، false إذا مستقبلة
  status: "sending" | "sent" | "read" | "failed"; // حالة الرسالة
  type: "recording" | "song"; // نوع الصوت (مسجل أو أغنية)
  comment?: string; // التعليق النصي (اختياري)
}

const AudioMessage: React.FC<AudioMessageProps> = ({
  audioUrl,
  time,
  isSent,
  status,
  type,
  comment,
}) => {
  // اختيار الأيقونة حسب نوع الصوت
  const icon =
    type === "recording" ? (
      <MicIcon fontSize="small" />
    ) : (
      <MusicNoteIcon fontSize="small" />
    );

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      {/* الحاوية الرئيسية للرسالة */}
      <div
        className={`p-2 rounded-lg shadow max-w-xs md:max-w-sm ${
          isSent ? "bg-[#192745] text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* مشغل الصوت */}
        <div className="w-full mb-2">
          <audio controls className="w-full rounded-lg">
            <source src={audioUrl} type="audio/mp3" />
            متصفحك لا يدعم مشغل الصوت.
          </audio>
        </div>

        {/* التعليق النصي */}
        {comment && (
          <p className={`mt-2 text-sm ${isSent ? "text-white" : "text-gray-800"}`}>
            {comment}
          </p>
        )}

<div className="flex items-center justify-between mt-2">
  {/* حالة الرسالة والوقت على جهة اليمين */}
  <div className="flex items-center space-x-2 order-2">
    {/* حالة الرسالة */}

    {/* الوقت */}
    <span className="text-xs">
      <TimeDisplay time={time} />
    </span>
    {isSent && <MessageStatus status={status} />}
  </div>

  {/* أيقونة الصوت على جهة اليسار */}
  <div className="order-1">
    <StatusBadge
      content={icon}
      size={6}
      color={isSent ? "bg-[#192745]" : "bg-gray-200"}
      textColor={isSent ? "text-white" : "text-gray-700"}
    />
  </div>
</div>


      </div>
    </div>
  );
};

export default AudioMessage;
