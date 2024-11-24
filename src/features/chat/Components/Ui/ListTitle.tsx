

import React from "react";

interface ListTitleProps {
  Title: string; 
  imageComponent: React.ReactNode;
  subTitle: string; 
}

const ListTitle: React.FC<ListTitleProps> = ({ Title, imageComponent, subTitle }) => {
 

  return (

<div className="flex items-center">
<div className="relative">
       {imageComponent}
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            >
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.707-10.293a1 1 0 00-1.414 0L9 12.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
                clipRule="evenodd"
            />
            </svg>
        </div>
</div>
<div className="ml-4">
    <h3 className="text-lg font-medium text-gray-900">{Title}</h3>
    <p className="text-sm text-gray-500">{subTitle}</p>
</div>
</div>
  );
};

export default ListTitle;



