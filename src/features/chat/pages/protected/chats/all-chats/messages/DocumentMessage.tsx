import React from "react";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus"; // استيراد MessageStatus
import { Download } from "@mui/icons-material";

interface DocumentMessageProps {
  fileName: string; // اسم المستند
  fileSize: string; // حجم المستند (مثلاً: "2 MB")
  fileType: string; // نوع الملف (PDF, Word, إلخ.)
  fileUrl: string; // رابط التنزيل للمستند
  isSent: boolean; // هل المستند مرسل أم مستلم
  time: string; // وقت الرسالة
  status: "sending" | "sent" | "read" | "failed"; // حالة الرسالة
}

const DocumentMessage: React.FC<DocumentMessageProps> = ({
  fileName,
  fileSize,
  fileType,
  fileUrl,
  isSent,
  time,
  status,
}) => {
  // استخراج الامتداد من اسم الملف
  const fileExtension = fileName.split(".").pop()?.toUpperCase() || "Unknown";

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs md:max-w-sm px-4 py-3 rounded-lg shadow-lg ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* عرض معلومات المستند */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg text-gray-600">
            <span className="text-sm font-semibold">{fileExtension}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{fileName}</span>
            <span className="text-xs text-gray-500">{fileSize}</span>
            <span className="text-xs text-gray-500">{fileType}</span>
          </div>
        </div>

        {/* زر تنزيل المستند */}
        <div className="mt-3 flex justify-between items-center">
          <a
            href={fileUrl}
            download={fileName}
            className="text-blue-500 underline text-sm"
          >
     <Download fontSize="small" />          </a>
        </div>

        {/* الوقت وحالة الرسالة */}
        <div
          className={`flex items-center justify-between mt-2 ${
            isSent ? "text-gray-300" : "text-gray-500"
          }`}
        >
          <span className="text-xs">
            <TimeDisplay time={time} />
          </span>
          {isSent && <MessageStatus status={status} />}
        </div>
      </div>
    </div>
  );
};

export default DocumentMessage;
