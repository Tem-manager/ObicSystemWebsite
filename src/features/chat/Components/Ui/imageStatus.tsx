import React from "react";

interface ImageStatusProps {
  images: string[]; // قائمة الصور
}

const ImageStatus: React.FC<ImageStatusProps> = ({ images }) => {
  const segments = images.length;

  const borderGradient = Array.from({ length: segments })
    .map((_, index) => {
      const start = (index / segments) * 360;
      const end = ((index + 1) / segments) * 360; 
      return `green ${start}deg, transparent ${end}deg`;
    })
    .join(", ");

  return (
    
      
      <div
       
      className={` relative rounded-full flex justify-center items-center w-12 h-12 p-1`}
      style={{
    
        background: `conic-gradient(${borderGradient})`, 
      
      }}
      >
        
        <img
            src={images[0]}
            alt='image'
            className="rounded-full w-full h-full bg-cover bg-center"
        />
      </div>
 
  );
};

export default ImageStatus;
