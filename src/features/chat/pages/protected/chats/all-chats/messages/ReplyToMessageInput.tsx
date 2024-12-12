import React from "react";
import { Close } from "@mui/icons-material";

interface ReplyToMessageInputProps {
  message: string; // الرسالة المراد الرد عليها
  onCancel: () => void; // وظيفة إلغاء الرد
}

const ReplyToMessageInput: React.FC<ReplyToMessageInputProps> = ({ message, onCancel }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-blue-50 border-b border-blue-200">
      <div
        className="flex-1 text-sm text-blue-600 truncate max-w-[90%]"
        title={message}
      >
        {message.length > 50 ? `${message.slice(0, 50)}...` : message}
      </div>
      <button
        onClick={onCancel}
        className="p-1 text-blue-600 hover:text-blue-800"
        title="Cancel Reply"
      >
        <Close />
      </button>
    </div>
  );
};

export default ReplyToMessageInput;
