

import React from "react";
import StoryViewer from "./StoryViewer";
import { StoresData } from "./StoresData";
import MystatusFooter from "./MystatusFooter";

const Stores: React.FC = () => {
 
  return (
    <div className="h-[calc(92vh-10vh)] w-full flex items-center justify-center bg-slate-400">
        
        <StoryViewer stories={StoresData} footer={<MystatusFooter/>}  />     
       
     
    </div>
  );
};

export default Stores;
