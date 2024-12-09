
import React from "react";

interface ReplyTo {
  sender: string;
  content: string;
}

interface ReplyBoxProps {
  replyTo: ReplyTo;
  onCancelReply?: () => void;
}

const ReplyBox: React.FC<ReplyBoxProps> = ({
  replyTo,
}) => {
  return (
    <div className="p-2 bg-gray-100 rounded-md border-l-4  border-blue-500 w-full max-w-xs">

      <div className="text-sm font-medium text-gray-700">{replyTo.sender}</div>
      <div className="text-sm text-gray-600">{replyTo.content}</div>
   
    </div>
  );
};

export default ReplyBox;
