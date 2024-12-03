interface ReplyProps {
    messageId: string;
    messageContent: string;
    onReply: (messageId: string) => void;
  }
  
  const Reply: React.FC<ReplyProps> = ({ messageId, messageContent, onReply }) => {
    return (
      <div className="reply-container">
        <div className="reply-header">
          <span className="reply-text">Replying to message:</span>
          <p>{messageContent}</p>
        </div>
        <textarea
          placeholder="Type your reply here..."
          className="reply-input"
          onFocus={() => onReply(messageId)} // Trigger reply action when focused
        />
      </div>
    );
  };
export default Reply ;  