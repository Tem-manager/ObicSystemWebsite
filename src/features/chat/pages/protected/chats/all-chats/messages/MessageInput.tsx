import React, { useState } from "react";
import { AttachFile, InsertEmoticon } from "@mui/icons-material";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface MessageInputProps {
  placeholder?: string; // Placeholder for the input
  onSend?: (message: string) => void; // Callback when message is sent
  onAttachFile?: () => void; // Callback for attach file
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder = "Type of messages...",
  onSend,
  onAttachFile,
}) => {
  const [message, setMessage] = useState(""); // Message text state
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false); // Emoji picker visibility

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && message.trim() !== "") {
      onSend?.(message.trim());
      setMessage(""); // Clear the input field after sending
    }
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji); // Append emoji to the message
    setEmojiPickerVisible(false); // Close the emoji picker
  };

  return (
    <div className="relative flex items-center px-4 py-2 bg-gray-100 rounded-lg shadow-md">
      {/* Emoji Icon (Left) */}
      <div className="relative">
        <button
          onClick={() => setEmojiPickerVisible((prev) => !prev)}
          className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700"
          title="Emoji Picker"
        >
          <InsertEmoticon />
        </button>

        {/* Emoji Picker */}
        {isEmojiPickerVisible && (
          <div className="absolute bottom-12 left-0 z-50">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>

      {/* Message Input */}
      <textarea
  className="flex-1 px-4 py-2 text-sm bg-transparent outline-none placeholder-gray-400 resize-none"
  placeholder={placeholder}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={handleKeyPress}
/>


      {/* Attach File Icon (Right) */}
      <button
        onClick={onAttachFile}
        className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700"
        title="Attach File"
      >
        <AttachFile />
      </button>
    </div>
  );
};

export default MessageInput;
