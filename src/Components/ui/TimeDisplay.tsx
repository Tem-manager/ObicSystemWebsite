import React from "react";

interface TimeDisplayProps {
  time: string; // الوقت
  className?: string; // خصائص إضافية يمكن تمريرها لتخصيص التصميم

}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ time , className = "" }) => {
  return (
    <span 
    className={`text-gray-400 ${className}`}
    >{time}</span>
  );
};

export default TimeDisplay;
