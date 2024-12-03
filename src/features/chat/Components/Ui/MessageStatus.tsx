// import React from "react";
// import { Done, DoneAll } from "@mui/icons-material";

// interface CheckIconProps {
//   status: "sent" | "delivered" | "seen"; // حالة الرسالة
//   className?: string; // فئة CSS إضافية اختيارية
// }

// const CheckIcon: React.FC<CheckIconProps> = ({ status, className }) => {
//   return (
//     <>
//       {status === "sent" && <Done className={`text-gray-500 ${className}`} />}
//       {status === "delivered" && <DoneAll className={`text-gray-500 ${className}`} />}
//       {status === "seen" && <DoneAll className={`text-blue-500 ${className}`} />}
//     </>
//   );
// };

// export default CheckIcon;


import React from "react";
// import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Done, DoneAll } from "@mui/icons-material";

import SyncIcon from '@mui/icons-material/Sync';
import ErrorIcon from '@mui/icons-material/Error';
import StatusBadge from "../../../../Components/ui/StatusBadge"; // استيراد مكون StatusBadge

interface MessageStatusProps {
  status: "sending" | "sent" | "read" | "failed";
}

const MessageStatus: React.FC<MessageStatusProps> = ({ status }) => {
  let badgeContent;
  let badgeColor = "";
  let badgeTextColor = "text-white";

  // تحديد محتوى الأيقونة حسب حالة الرسالة
  switch (status) {
    case "sending":
      badgeContent = <SyncIcon fontSize="small" className="animate-spin" />;
      badgeColor = "bg-[#192745]";
      break;
    case "sent":
      badgeContent = (
        <div className="flex flex-col items-center space-y-0">
          <Done fontSize="small" />
          
        </div>
      );
      badgeColor = "bg-[#192745]";
      break;
    case "read":
      badgeTextColor = "text-blue-200";
      badgeContent = (
        <div className="flex flex-col items-center space-y-0">
          <DoneAll fontSize="small" />
          
        </div>
      );
      badgeColor = "bg-[#192745]";
      break;
    case "failed":
      badgeContent = <ErrorIcon fontSize="small" />;
      badgeColor = "bg-red-500";
      badgeTextColor = "text-white";
      break;
    default:
      badgeContent = "?";
      badgeColor = "bg-gray-500";
  }

  return (
    <div className="mt-2 flex items-center">
      <StatusBadge
        content={badgeContent}
        color={badgeColor}
        textColor={badgeTextColor}
        size={6} // يمكنك تعديل الحجم هنا حسب الحاجة
      />
    </div>
  );
};

export default MessageStatus;
