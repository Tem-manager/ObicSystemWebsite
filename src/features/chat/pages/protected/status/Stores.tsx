

import React from "react";
import StoryViewer from "./StoryViewer";
import CloseIcon from "../../../Components/Ui/CloseIcon";
import { StoresData } from "./StoresData";
// import UsersFooter  from "./UsersFooter";

const Stores: React.FC = () => {
 
  return (
    <div className="h-[calc(92vh-10vh)] w-full flex items-center justify-center bg-slate-400">
        
        <StoryViewer stories={StoresData}  />     
       <div className="absolute top-32 left-14 p-2">
        <CloseIcon />
      </div>
     
    </div>
  );
};

export default Stores;
