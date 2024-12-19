import React from "react";
import BaseMessage from "../../../../../Components/Ui/BaseMessage";

interface ReplyTo {
  sender: string;
  content: string;
}

interface MessageProps {
  text: string;
  time: string;
  isSent: boolean;
  status: "sending" | "sent" | "read" | "failed";
  isDeleted?: boolean;
  onReply: (message: string) => void;
  replyTo?: ReplyTo; // خاصية الرد
  onCancelReply?: () => void;
  onDelete?: () => void;
  onInfo?: () => void;
  onFavorite?: () => void;
}

const Message: React.FC<MessageProps> = ({
  text,
  time,
  isSent,
  sender,
  status,
  isDeleted,
  onReply,
  replyTo, // استلام الرد
  onCancelReply,
  onInfo,
  onDelete,
  onFavorite,
}) => {
  return (
    <div className="w-full mb-2">
      {/* الرسالة الأساسية */}
      <div className={`flex flex-col space-y-1 ${isSent ? "items-end" : "items-start"} w-full`}>
        <BaseMessage
          time={time}
          isSent={isSent}
          status={status}
          isDeleted={isDeleted}
          text={text}
          sender={sender}
          
          onCancelReply={onCancelReply}
          onDelete={onDelete}
          onInfo={onInfo}
          onFavorite={onFavorite}
          additionalOptions={[]}

          replyTo={replyTo}
          onReply={() => onReply({ sender: replyTo?.sender || "Unknown", content: text })}
          // تمرير خاصية الرد
        />
      </div>
    </div>
  );
};

export default Message;
