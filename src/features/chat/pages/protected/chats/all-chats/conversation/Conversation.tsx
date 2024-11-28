import React from "react";
import { COLORS } from "../../../../../../../constants/thems/Color";
import Header from "../../../../../Components/Partials/Header";
import { mockChats } from "./ConversationData";
import { ConversationModel } from "./ConversationModel";
import ConversationCard from "./ConversationCard"; //  ConversationCard


interface ConversationProps {
  pageTitle: string; // إضافة Prop لتلقي اسم الصفحة
}


const Conversation: React.FC<ConversationProps> = ({ pageTitle }) => {
  const conversationData: ConversationModel = {
    chats: mockChats, 
    };

  return (
    <div
      className="sm:w-[35%] mx-2 border border-gray-100 shadow-md flex flex-col bg-red-200 h-[calc(100vh-100px)]"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      <Header
        className="p-4 sticky top-0 z-index bg-[#fcf5fd] "
        leftContent={    
        <div className="text-2xl font-bold text-gray-800 leading-tight">
          {pageTitle}</div>
          }
      />
      <div className="flex-1 overflow-y-auto space-y-0 px-6">
        {conversationData.chats.map((chat, index) => (
          <ConversationCard key={index} {...chat} /> 
        ))}
      </div>
    </div>
  );
};

export default Conversation;
