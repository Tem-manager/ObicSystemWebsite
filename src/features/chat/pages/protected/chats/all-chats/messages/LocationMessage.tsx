import React from "react";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus"; // استيراد MessageStatus
import LocationOnIcon from "@mui/icons-material/LocationOn"; // أيقونة الموقع
import StatusBadge from "../../../../../../../Components/ui/StatusBadge";

interface LocationMessageProps {
  imageUrl: string; // رابط الصورة (موقع الشخص)
  time: string; // وقت الرسالة
  isSent: boolean; // true إذا كانت الرسالة مرسلة، false إذا مستقبلة
  status: "sending" | "sent" | "read" | "failed"; // حالة الرسالة
  latitude: number; // خط العرض
  longitude: number; // خط الطول
  comment?: string; // تعليق نصي (اختياري)
}

const LocationMessage: React.FC<LocationMessageProps> = ({
  imageUrl,
  time,
  isSent,
  status,
  latitude,
  longitude,
  comment,
}) => {
  // رابط خرائط جوجل لعرض الموقع
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-full sm:max-w-xs md:max-w-sm px-4 py-2 rounded-lg shadow-lg ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* عرض الصورة (موقع الشخص) مع حدث الضغط */}
        <div className="relative mb-2">
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              alt="موقع الشخص"
              className="w-full h-auto rounded-lg cursor-pointer"
            />
          </a>
        </div>

        {/* التعليق النصي */}
        {comment && (
          <p className={`mt-2 text-sm ${isSent ? "text-white" : "text-gray-800"}`}>
            {comment}
          </p>
        )}

        {/* منطقة الأيقونات: الوقت، حالة الرسالة، وأيقونة الموقع */}
        <div className="flex items-center justify-between mt-2">
          {/* أيقونة الموقع على اليسار */}
          <div className="flex items-center space-x-2 order-1">
         
     
    <StatusBadge
      content={<LocationOnIcon  fontSize="small" />}
      size={6}
      color={isSent ? "bg-[#192745]" : "bg-gray-200"}
      textColor={isSent ? "text-white" : "text-gray-700"}
    />

          </div>

          {/* الوقت وحالة الرسالة على اليمين */}
          <div className="flex items-center space-x-2 order-2">
            <span className="text-xs">
              <TimeDisplay time={time} />
            </span>
            {isSent && <MessageStatus status={status} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMessage;
