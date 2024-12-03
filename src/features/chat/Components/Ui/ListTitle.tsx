import React from "react";
import PluzIconOverlay from "./PluzIconOverlay";

interface ListTitleProps {
  Title: string;
  imageComponent: React.ReactNode;
  subTitle: string;
  showIcon?: boolean; 
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void; 
  hoverBg?:string;
}

const ListTitle: React.FC<ListTitleProps> = ({
  Title,
  imageComponent,
  subTitle,
  onClick,
  showIcon = false,
  hoverBg,
  
}) => {
  return (
    <div className={`flex items-center w-screen ${hoverBg} cursor-pointer`} onClick={onClick}> 
      <div className="relative">
        {imageComponent}
        {showIcon && <PluzIconOverlay />}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{Title}</h3>
        <p className="text-sm text-gray-500">{subTitle}</p>
      </div>
    </div>
  );
};

export default ListTitle;
