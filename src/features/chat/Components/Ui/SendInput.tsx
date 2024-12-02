import React from "react";

interface SendInputProps {
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; 
  Bg?: string;
  textColor?: string;
  className?: string;
  placeholder: string;
}

const SendInput: React.FC<SendInputProps> = ({
  value,
  onChange,
  Bg = "bg-gray-800",
  textColor = "text-white",
  className,
  placeholder,
}) => {
  return (
    <textarea
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      className={`flex-1 resize-none ${Bg} ${textColor} rounded-lg px-4 py-2 outline-none ${className}`}
    />
  );
};

export default SendInput;
