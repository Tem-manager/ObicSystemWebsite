import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import StatusBadge from "../../../../../Components/ui/StatusBadge";


 const MystatusFooter :React.FC = () =>{
 
  return (
    <div className="absolute bottom-0 left-30   flex items-center space-x-2">
       
        <StatusBadge
         content={<IoEyeOutline />}
         textColor="text-white"
         color="inherit"
         textSize="text-2xl"
         margin="m-0"
         
         />
         <h1 className="text-xl text-white">6</h1>
      
    </div>
  );
};
export default MystatusFooter;


