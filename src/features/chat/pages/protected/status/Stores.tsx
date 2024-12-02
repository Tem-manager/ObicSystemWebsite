

import React from "react";
import StoryViewer from "./StoryViewer";
import CloseIcon from "../../../Components/Ui/CloseIcon";

const Stores: React.FC = () => {
    const stories = [
        { type: "image", content: "https://via.placeholder.com/800x600" },
        { type: "text", content: "هذه حالة نصية!" },
        { type: "video", content: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ];
  return (
    <div className="h-[calc(92vh-10vh)] w-full flex items-center justify-center bg-slate-400">
        
      <StoryViewer stories={stories} />
      <div className="absolute top-32 left-14 p-2">
        <CloseIcon />
      </div>
     
    </div>
  );
};

export default Stores;
