import React from "react";

interface ReplyMessageProps {
  replyText: string; // Original message content
  replyAuthor: string; // Original message sender's name
  onCancelReply?: () => void; // Optional cancel reply action
}

const ReplyMessageView: React.FC<ReplyMessageProps> = ({
  replyText,
  replyAuthor,
  onCancelReply,
}) => {
  return (
    <div className="p-3 rounded-md border-l-4 border-blue-500 bg-red-100 dark:bg-red-800 mb-2">
      <div className="flex items-center justify-between">
        <span className="text-blue-600 font-semibold">{replyAuthor}</span>
        {onCancelReply && (
          <button
            onClick={onCancelReply}
            className="text-sm text-gray-500 hover:text-red-500"
          >
            Cancel
          </button>
        )}
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm truncate">{replyText}</p>
    </div>
  );
};

export default ReplyMessageView;
