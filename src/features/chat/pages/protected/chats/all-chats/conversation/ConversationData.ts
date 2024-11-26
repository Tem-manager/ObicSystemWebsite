import { ChatItemProps } from "./ConversationModel";

export const mockChats: ChatItemProps[] = [
  { name: "John Doe", message: "Hey! How are you? Let's catch up soon.", time: "10:30", unreadCount:9},
  { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
  { name: "Work Group 1", message: "Please check the new project details, it's important.", time: "11:15" },
  { name: "Work Group 2", message: "Please check the new project details, it's important.", time: "11:15" },
  { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
  { name: "Work Group 3", message: "Please check the new project details, it's important.", time: "11:15" , unreadCount: 110 },
  { name: "Jane Smith", message: "Are you coming to the party?", time: "Yesterday" },
];
