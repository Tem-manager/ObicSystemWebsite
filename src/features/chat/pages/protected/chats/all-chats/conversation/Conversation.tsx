import React from "react";
import { COLORS } from "../../../../../../../constants/thems/Color";
import CircleImage from "../../../../../Components/Ui/CircleImage";
import logo from "../../../../../../../../public/images/logo1.png";
import StatusBadge from "../../../../../../../Components/ui/StatusBadge";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import Header from "../../../../../Components/Partials/Header";


interface ChatItemProps {
  name: string; // اسم المستخدم أو المجموعة
  message: string; // نص الرسالة
  time: string; // وقت الرسالة
  unreadCount?: number; // عدد الرسائل غير المقروءة (اختياري)
}

const ChatItem: React.FC<ChatItemProps> = ({ name, message, time, unreadCount }) => {
  return (
    <div className="flex items-center hover:bg-gray-100 p-4 cursor-pointer border-b border-gray-300 last:border-b-0">
      <CircleImage  border="10" imageUrl={logo} className ="mr-4" size={12} />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">{message}</p>
      </div>
      <div className="flex flex-col items-end text-right">
        <TimeDisplay time={time} className="text-xs"/> 
        {unreadCount &&           
        <StatusBadge type="number" content={unreadCount} className="w-6 h-6 bg-blue-400 text-white "/>
      }
      </div>
    </div>
  );
};

const Conversation: React.FC = () => {
  const chats: ChatItemProps[] = [
    { name: "John Doe", message: "Hey! How are you? Let's catch up soon.", time: "10:30", unreadCount: 4 },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Work Group", message: "Please check the new project details, it's important.", time: "11:15" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
   
      ];

  return (
    <div
      className=" sm:w-[35%] mx-2 border border-gray-100 shadow-md  flex flex-col bg-red-200  h-[calc(100vh-100px)]  "
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      <Header  
      className="p-4  sticky top-0 z-index bg-[#fcf5fd] "

      leftContent={
        <div>
          All Chat
        </div>
      }
      
      />
      <div className="flex-1 overflow-y-auto space-y-0">
      {/* <div className="space-y-0 overflow-y-auto"> */}
        {chats.map((chat, index) => (
          <ChatItem key={index} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default Conversation;
