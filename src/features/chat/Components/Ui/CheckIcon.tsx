import React from "react";
import { Done, DoneAll } from "@mui/icons-material";

interface CheckIconProps {
  status: "sent" | "delivered" | "seen"; // حالة الرسالة
  className?: string; // فئة CSS إضافية اختيارية
}

const CheckIcon: React.FC<CheckIconProps> = ({ status, className }) => {
  return (
    <>
      {status === "sent" && <Done className={`text-gray-500 ${className}`} />}
      {status === "delivered" && <DoneAll className={`text-gray-500 ${className}`} />}
      {status === "seen" && <DoneAll className={`text-blue-500 ${className}`} />}
    </>
  );
};

export default CheckIcon;
