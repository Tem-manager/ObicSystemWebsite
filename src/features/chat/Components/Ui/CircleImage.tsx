

import React from "react";

interface CircleImageProps {
  size: number; 
  imageUrl: string; 
  border?: string; 
  className?: string; 

}

const CircleImage: React.FC<CircleImageProps> = ({ size, imageUrl, border  ,   className = "",
}) => {
 

  return (
    <img
     src={imageUrl}
     alt='image'
     className={`rounded-full object-cover ${className} ${border || ""} w-${size} h-${size}`}
     />
    
  );
};

export default CircleImage;



