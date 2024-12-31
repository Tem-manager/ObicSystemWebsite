import React from "react";
import PluzIconOverlay from "./PluzIconOverlay";

interface ListTitleProps {
  Title: string;
  TitleColor?:string;
  imageComponent: React.ReactNode;
  subTitle: string;
  subTitleColor?: string;
  showIcon?: boolean; 
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void; 
  hoverBg?:string;
  width?:string
}

const ListTitle: React.FC<ListTitleProps> = ({
  Title,
  imageComponent,
  subTitle,
  onClick,
  showIcon = false,
  hoverBg,
  width="0",
  subTitleColor="text-gray-500",
  TitleColor="text-gray-900"

  
}) => {
  return (
    <div className={`flex items-center ${width} ${hoverBg} cursor-pointer`} onClick={onClick}> 
      <div className="relative">
        {imageComponent}
        {showIcon && <PluzIconOverlay />}
      </div>
      <div className="ml-4">
        <h3 className={`text-lg font-medium ${TitleColor}`}>{Title}</h3>
        <p className={`text-sm ${subTitleColor} `}>{subTitle}</p>
      </div>
    </div>
  );
};

export default ListTitle;
