import React from "react";
import { COLORS } from "../../../../../../constants/thems/Color";
import CircleImage from "../../../../Components/Ui/CircleImage";
import logo from "../../../../../../../public/images/logo1.png";
import StatusBadge from "../../../../../../Components/ui/StatusBadge";
import TimeDisplay from "../../../../../../Components/ui/TimeDisplay";

interface UnreadBadgeProps {
  count: number; // عدد الرسائل غير المقروءة
}

const UnreadBadge: React.FC<UnreadBadgeProps> = ({ count }) => {
  return (
    <span className="bg-blue-400 text-white text-xs rounded-full px-2 py-1 mt-1 self-end">
      {count}
    </span>
  );
};

interface ChatItemProps {
  name: string; // اسم المستخدم أو المجموعة
  message: string; // نص الرسالة
  time: string; // وقت الرسالة
  unreadCount?: number; // عدد الرسائل غير المقروءة (اختياري)
}

const ChatItem: React.FC<ChatItemProps> = ({ name, message, time, unreadCount }) => {
  return (
    <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer border-b border-gray-300 last:border-b-0">
      <CircleImage size={12} border="10" imageUrl={logo} className="mr-4" />
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

const ChatList: React.FC = () => {
  const chats: ChatItemProps[] = [
    { name: "John Doe", message: "Hey! How are you? Let's catch up soon.", time: "10:30", unreadCount: 3 },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Work Group", message: "Please check the new project details, it's important.", time: "11:15" },
    { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
    { name: "Work Group", message: "Please check the new project details, it's important.", time: "11:15" },
  ];

  return (
    <div
      className="w-full sm:w-[35%] p-4 m-2 border border-gray-300 shadow-md h-screen"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      <h2 className="text-xl font-semibold mb-4 sticky top-0 py-2">All Chats</h2>
      <div className="space-y-0 overflow-y-auto">
        {chats.map((chat, index) => (
          <ChatItem key={index} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
