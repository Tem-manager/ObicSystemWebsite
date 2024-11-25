import React from "react";
interface StatusBadgeProps {

  content: number | string | React.ReactNode; 
  size?: number;
  className?: string; // خصائص إضافية يمكن تمريرها لتخصيص التصميم
}
const StatusBadge: React.FC<StatusBadgeProps> = ({ size , content , className = ""  }) => {
  return (
    <span
      className={`inline-flex items-center justify-center min-w-${size} min-h-${size}  px-2 rounded-full text-center max-w-12  max-h-6  ${className}`}>

    {content}
    </span>
  );
};

export default StatusBadge;