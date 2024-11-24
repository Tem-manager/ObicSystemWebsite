// import { Message } from '../../types/common/entities';

// export interface ChatState {
//   messages: Message[];
//   activeChatId: string | null;
//   isLoading: boolean;
// }


export interface Message {
    id: number;
    senderName: string;
    senderAvatar: string;
    text: string;
    time: string;
  }
  
  export interface Chat {
    id: number;
    chatName: string;
    messages: Message[];
  }

  