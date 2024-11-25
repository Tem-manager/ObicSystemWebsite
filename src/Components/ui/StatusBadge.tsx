import React from "react";

interface StatusBadgeProps {

  content: number | string | React.ReactNode; 
  size: number;


}

const StatusBadge: React.FC<StatusBadgeProps> = ({ size, content }) => {
  return (
    <span
    className={` w-${size} h-${size} flex items-center justify-center bg-gray-200 text-gray-700 rounded-full  `}
   
    >
       <span className="font-bold">{content}</span>
     
    </span>
  );
};

export default StatusBadge;
