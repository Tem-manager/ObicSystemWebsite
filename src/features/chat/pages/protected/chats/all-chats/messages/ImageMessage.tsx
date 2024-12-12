import React from "react";
import BaseMessage from "../../../../../Components/Ui/BaseMessage";

interface ReplyTo {
  sender: string;
  content: string;
}

interface ImageMessageProps {
  imageUrl: string;
  time: string;
  isSent: boolean;
  status: "sending" | "sent" | "read" | "failed";
  comment?: string;
  onReply: (replyContent: string) => void;
  onCancelReply?: () => void;
  onDelete?: () => void;
  onInfo?: () => void;
  onFavorite?: () => void;
  replyTo?: ReplyTo;
}

const ImageMessage: React.FC<ImageMessageProps> = ({
  imageUrl,
  time,
  isSent,
  status,
  comment,
  
  onReply,
  onCancelReply,
  onDelete,
  onInfo,
  onFavorite,
  replyTo,
}) => {
  const handleDoubleClick = () => {
    const replyContent = comment ? `Image: ${comment}` : "Image";
    onReply(replyContent);
  };

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <BaseMessage
  time={time}
  isSent={isSent}
  status={status}
  text={comment || ""}
  imageUrl={imageUrl}
  imageStyles="max-w-[200px] max-h-[200px] sm:max-w-[300px] sm:max-h-[300px] object-cover rounded-lg"
  onCancelReply={onCancelReply}
  onDelete={onDelete}
  onInfo={onInfo}
  onReply={() => onReply({ sender: replyTo?.sender || "Unknown", content: imageUrl })}
  onFavorite={onFavorite}
  additionalOptions={[]}
  replyTo={replyTo}
/>

    </div>
  );
};

export default ImageMessage;
