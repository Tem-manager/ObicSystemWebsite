import React from "react";
interface StatusBadgeProps {

  content: number | string | React.ReactNode; 
  size?: number;
  textSize?: string;
  color?:string;
  textColor?:string;
  className?:string;
  margin?:string

}

const StatusBadge: React.FC<StatusBadgeProps> = 
({
   color="bg-gray-200",
   size =10,
   content,
   textColor="text-gray-700" ,
   textSize="text-xs",
   margin="m-3",
   className
  }) => {
  return (
    <span
    className={`flex items-center justify-center rounded-full font-bold ${margin} w-${size} h-${size} ${color} ${textSize}  ${textColor}  ${className} `}
   
    >
      {content}
     
    </span>
  );
};

export default StatusBadge;