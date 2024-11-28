// import React from "react";
// import CircleImage from "../../../../../Components/Ui/CircleImage";
// import logo from "../../../../../../../../public/images/logo1.png";
// import StatusBadge from "../../../../../../../Components/ui/StatusBadge";
// import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
// import { ChatItemProps } from "./ConversationModel";

// const ConversationCard: React.FC<ChatItemProps> = ({ name, message, time, unreadCount }) => {
//   return (
//     <div className="flex items-center hover:bg-gray-100 p-4 cursor-pointer border-b border-gray-300 last:border-b-0">
//       <CircleImage border="10" imageUrl={logo} className="mr-4" size={12} />
//       <div className="flex-1">
//         <h3 className="font-semibold text-lg">{name}</h3>
//         <p className="text-sm text-gray-500 line-clamp-1">{message}</p>
//       </div>
//       <div className="flex flex-col items-end text-right">
//         <TimeDisplay time={time} className="text-xs" />
//         {unreadCount && (
//           <StatusBadge type="number" content={unreadCount} className="w-6 h-6 bg-blue-400 text-white" />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ConversationCard;


import CircleImage from "../../../../../Components/Ui/CircleImage";
import logo from "../../../../../../../../public/images/logo1.png";
import StatusBadge from "../../../../../../../Components/ui/StatusBadge";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import GenericCard from "../../../../../../../Components/ui/GenericCard";
import { ChatItemProps } from "./ConversationModel";

const ConversationCard = ({ name, message, time, unreadCount  }: ChatItemProps) => {
  return (
    <GenericCard
    className="p-2"

      leftComponent={<CircleImage border="10" imageUrl={logo}  size={12} />} 
      centerComponent={
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500 line-clamp-1">{message}</p>
        </div>
      }
      rightComponent={
        <>
          <TimeDisplay time={time} className="text-xs" />
          {unreadCount && (
            <StatusBadge content={unreadCount} size={6} color={"bg-blue-400"} textColor={"text-white"}  />
          )}
        </>
      }
    />
  );
};

export default ConversationCard;
