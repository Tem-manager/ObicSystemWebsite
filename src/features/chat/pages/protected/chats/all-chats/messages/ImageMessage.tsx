import React from "react";

interface ImageMessageProps {
  imageUrl: string; // رابط الصورة
  caption?: string; // النص الوصفي للصورة (اختياري)
  type: "sent" | "received"; // نوع الرسالة (إرسال أو استقبال)
}

const ImageMessage: React.FC<ImageMessageProps> = ({ imageUrl, caption, type }) => {
  return (
    <div
      className={`flex ${type === "sent" ? "justify-end" : "justify-start"} my-2`}
    >
      <div
        className={`max-w-xs rounded-lg overflow-hidden ${
          type === "sent" ? "bg-blue-500" : "bg-gray-200"
        }`}
      >
        <img src={imageUrl} alt={caption || "Image"} className="w-full h-auto" />
        {caption && (
          <p
            className={`text-sm p-2 ${
              type === "sent" ? "text-white" : "text-gray-800"
            }`}
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageMessage;
