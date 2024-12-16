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
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`w-full max-w-sm px-2 py-2 rounded-lg shadow-md ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* عرض معلومات المستند */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-lg text-gray-600">
            <span className="text-xs font-semibold">{fileExtension}</span>
          </div>
          <div className="flex-1">
            <span className="block text-sm font-semibold truncate">{fileName}</span>
            <div className="flex items-center text-xs text-gray-500 space-x-2">
              <span>{fileSize}</span>
              <span>{fileType}</span>
              <a
                href={fileUrl}
                download={fileName}
                className={`flex items-center space-x-1 ${isSent ? "text-white" : "text-[#192745]"}`}
              >
                <Download fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/* الوقت وحالة الرسالة */}
        <div
          className={`flex items-center justify-between mt-1 text-xs ${
            isSent ? "text-gray-300" : "text-gray-500"
          }`}
        >
          <TimeDisplay time={time} />
          {isSent && <MessageStatus status={status} />}
        </div>
      </div>
    </div>
  );
};

export default DocumentMessage;
