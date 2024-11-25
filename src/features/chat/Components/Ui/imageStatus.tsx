import React from "react";

interface ImageStatusProps {
  images: string[]; 
}

const ImageStatus: React.FC<ImageStatusProps> = ({ images }) => {
  const segments = images.length; // عدد الصور
  const radius = 50; // نصف القطر للحدود
  const strokeWidth = 3; // عرض الخط
  const gapLength = 5; // المسافة بين الأجزاء
  const circumference = 2 * Math.PI * radius; // محيط الدائرة
  const dashLength = (circumference - gapLength * segments) / segments; // طول كل جزء من الحدود

  return (
    <div className="relative flex justify-center items-center w-20 h-20">

      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 120 120" // تكبير viewBox لإضافة مسافة حول الصورة
      >
        <circle
          cx="60" // مركز الدائرة في منتصف الـ viewBox
          cy="60"
          r={radius} // نصف القطر للحدود
          fill="none"
          stroke="green" // لون الحدود
          strokeWidth={strokeWidth} // عرض الخط
          strokeDasharray={`${dashLength} ${gapLength}`} // تحديد طول الخط والمسافات
          strokeLinecap="round" // نهاية مستديرة لكل خط
          transform="rotate(-90 60 60)" // تدوير الدائرة بحيث تبدأ من الأعلى
        />
      </svg>

   
      <img
        src={images[0]} 
        alt="status"
        className="rounded-full w-16 h-16 object-cover" 
      />
    </div>
  );
};

export default ImageStatus;
