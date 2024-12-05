interface ReplyMessageProps {
    replyText: string; // النص المراد الرد عليه
    onCancelReply: () => void; // دالة لإلغاء الرد
  }
  
  const ReplyMessage: React.FC<ReplyMessageProps> = ({ replyText, onCancelReply }) => {
    return (
      <div className="flex items-center justify-between p-2 bg-blue-50 border-b border-blue-200">
        <div className="flex-1 text-sm text-blue-600 truncate max-w-[90%]" title={replyText}>
          {replyText.length > 50 ? `${replyText.slice(0, 50)}...` : replyText}
        </div>
        <button onClick={onCancelReply} className="p-1 text-blue-600 hover:text-blue-800" title="Cancel Reply">
          <Close />
        </button>
      </div>
    );
  };
  
  export default ReplyMessage;
  