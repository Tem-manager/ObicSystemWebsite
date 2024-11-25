export interface ChatItemProps {
    name: string;
    message: string;
    time: string;
    unreadCount?: number;
  }
  
  export interface ConversationModel {
    chats: ChatItemProps[];
  }
  