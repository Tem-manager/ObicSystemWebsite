

import React from "react";

interface CircleImageProps {
  size: number; 
  imageUrl: string; 
  border?: string; 
  
}

const CircleImage: React.FC<CircleImageProps> = ({ size, imageUrl, border }) => {
 

  return (
    <img
     src={imageUrl}
     alt='image'
     className={`w-${size} h-${size} rounded-full object-cover ${border || ""} `}
  />
    
  );
};

export default CircleImage;



