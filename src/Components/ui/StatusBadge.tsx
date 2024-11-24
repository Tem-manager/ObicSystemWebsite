import React from "react";

interface StatusBadgeProps {
  type: "number" | "text" | "icon"; // لتحديد نوع المحتوى
  content: number | string | React.ReactNode; // يمكن أن يكون رقمًا، نصًا، أو أيقونة
  size?: string;
  className?: string; // خصائص إضافية يمكن تمريرها لتخصيص التصميم

}

const StatusBadge: React.FC<StatusBadgeProps> = ({ type, content,  className = "" }) => {
  return (
    <span
    className={`  text-xs rounded-full flex items-center justify-center ${className}`}
    title={type} // مجرد مثال، يمكن إزالته حسب الحاجة
    >
      {type === "number" && <span className="font-bold">{content}</span>}
      {type === "text" && <span>{content}</span>}
      {type === "icon" && <>{content}</>}
    </span>
  );
};

export default StatusBadge;
