import React from "react";
import MessageItem from "./MessageItem";

interface MessageData {
  text: string;
  time: string;
  type: "sent" | "received";
}

interface MessageListProps {
  messages: MessageData[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="p-4 space-y-2">
      {messages.map((message, index) => (
        <MessageItem
          key={index}
          text={message.text}
          time={message.time}
          type={message.type}
        />
      ))}
    </div>
  );
};

export default MessageList;
