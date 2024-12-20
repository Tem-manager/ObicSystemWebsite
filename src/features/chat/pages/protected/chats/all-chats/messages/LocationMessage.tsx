import React from "react";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] px-4 py-3 rounded-lg shadow-lg ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* عرض الصورة */}
        <div className="relative mb-3">
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              alt="موقع الشخص"
              className="w-full h-auto max-h-[100px] sm:max-h-[250px] lg:max-h-[200px] rounded-lg cursor-pointer object-cover"
            />
          </a>
        </div>

        {/* التعليق النصي */}
        {comment && (
          <p className={`text-sm leading-relaxed ${isSent ? "text-white" : "text-gray-800"}`}>
            {comment}
          </p>
        )}

        {/* الوقت، الحالة، وأيقونة الموقع */}
        <div className="flex items-center justify-between mt-3">
          {/* أيقونة الموقع */}
          <div className="flex items-center space-x-2">
            <StatusBadge
              content={<LocationOnIcon fontSize="small" />}
              size={6}
              color={isSent ? "" : ""}
              textColor={isSent ? "text-white" : "text-gray-700"}
            />
          </div>

          {/* الوقت وحالة الرسالة */}
          <div className="flex items-center space-x-2">
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
