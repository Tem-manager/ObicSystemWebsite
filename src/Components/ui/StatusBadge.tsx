import React from "react";

interface StatusBadgeProps {

  content: number | string | React.ReactNode; 
  size?: number;
  color?:string;
  textColor?:string;
  className?:string;
}

const StatusBadge: React.FC<StatusBadgeProps> = 
({ color="bg-gray-200",
   size =10,
   content,
   textColor="text-gray-700" ,
   className
  }) => {
  return (
    <span
    className={` w-${size} h-${size} ${color} flex items-center justify-center  ${textColor} rounded-full font-bold ${className} `}
   
    >
      {content}
     
    </span>
  );
};

export default StatusBadge;
