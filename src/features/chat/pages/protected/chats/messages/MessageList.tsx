import React from "react";
import MessageItem from "./MessageItem";
import ImageMessage from "../all-chats/messages/ImageMessage";

interface MessageData {
  text?: string;
  imageUrl?: string;
  caption?: string;
  time: string;
  typeMessage: "text" | "image";
  isSender: boolean; // تحديد إذا كانت الرسالة مرسلة أو مستقبلة
}

interface MessageListProps {
  messages: MessageData[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="p-4 space-y-2 flex flex-col">
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          {message.typeMessage === "text" && message.text ? (
            <MessageItem
              text={message.text}
              time={message.time}
              isSender={message.isSender} // تحديد الاتجاه
            />
          ) : message.typeMessage === "image" && message.imageUrl ? (
            <ImageMessage
              imageUrl={message.imageUrl}
              caption={message.caption || ""}
              time={message.time}
            />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MessageList;
