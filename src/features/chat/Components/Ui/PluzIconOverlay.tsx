import React from "react";

const PluzIconOverlay: React.FC = () => {
  return (
    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="#22C55E"/>
        <path d="M10 6V14M6 10H14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  );
};

export default PluzIconOverlay;
