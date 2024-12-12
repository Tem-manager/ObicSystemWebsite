// import React, { useState, useRef, useEffect } from "react";
// import { AttachFile, InsertEmoticon, Close } from "@mui/icons-material";
// import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

// interface MessageInputProps {
//   placeholder?: string; // Placeholder for the input
//   onSend?: (message: string) => void; // Callback when message is sent
//   onAttachFile?: () => void; // Callback for attach file
//   replyToMessage?: string | null; // الرسالة المراد الرد عليها
//   onCancelReply?: () => void; // إلغاء الرد
//   showEmojiPicker?: boolean; // للتحكم في ظهور أيقونة الإيموجي
//   showAttachIcon?: boolean; // للتحكم في ظهور أيقونة المرفقات
// }

// const MessageInput: React.FC<MessageInputProps> = ({
//   placeholder = "Type a message...",
//   onSend,
//   onAttachFile,
//   replyToMessage,
//   onCancelReply,
//   showEmojiPicker = true,
//   showAttachIcon = true,
// }) => {
//   const [message, setMessage] = useState(""); // Message text state
//   const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false); // Emoji picker visibility
//   const emojiPickerRef = useRef<HTMLDivElement | null>(null);
//   const textareaRef = useRef<HTMLTextAreaElement | null>(null);

//   // Handle emoji click
//   const handleEmojiClick = (emojiData: EmojiClickData) => {
//     setMessage((prev) => prev + emojiData.emoji); // Append emoji to the message
//   };

//   // Handle key press in the text area
//   const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault(); // Prevent default Enter behavior
//       if (message.trim() !== "") {
//         onSend?.(message.trim()); // Call the onSend function
//         setMessage(""); // Clear the message input after sending
//         if (textareaRef.current) {
//           textareaRef.current.style.height = "auto"; // Reset height
//         }
//       }
//     }
//   };

//   // Adjust the height of the textarea dynamically
//   const adjustTextareaHeight = () => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto"; // Reset height
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust height
//     }
//   };

//   // Close emoji picker when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         emojiPickerRef.current &&
//         !emojiPickerRef.current.contains(event.target as Node)
//       ) {
//         setEmojiPickerVisible(false); // Close emoji picker
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative flex flex-col bg-gray-100 rounded-lg shadow-md">
//       {/* إذا كان هناك رسالة للرد عليها */}
//       {replyToMessage && (
//         <div className="flex items-center justify-between p-2 bg-blue-50 border-b border-blue-200">
//           <div
//             className="flex-1 text-sm text-blue-600 truncate max-w-[90%]"
//             title={replyToMessage}
//           >
//             {/* النص المقتطع إذا كان طويلاً */}
//             {replyToMessage.length > 50
//               ? `${replyToMessage.slice(0, 50)}...`
//               : replyToMessage}
//           </div>
//           <button
//             onClick={onCancelReply}
//             className="p-1 text-blue-600 hover:text-blue-800"
//             title="Cancel Reply"
//           >
//             <Close />
//           </button>
//         </div>
//       )}

//       <div className="flex items-center px-4 py-2">
//         {/* Emoji Icon (Left) */}
//         {showEmojiPicker && (
//           <div className="relative" ref={emojiPickerRef}>
//             <button
//               onClick={() => setEmojiPickerVisible((prev) => !prev)}
//               className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700"
//               title="Emoji Picker"
//             >
//               <InsertEmoticon />
//             </button>

//             {/* Emoji Picker */}
//             {isEmojiPickerVisible && (
//               <div className="absolute bottom-12 left-0 z-50">
//                 <EmojiPicker onEmojiClick={handleEmojiClick} />
//               </div>
//             )}
//           </div>
//         )}

//         {/* Message Input */}
//         <textarea
//           ref={textareaRef}
//           className="flex-1 px-4 py-2 text-sm bg-transparent outline-none placeholder-gray-400 resize-none"
//           placeholder={placeholder}
//           value={message}
//           onChange={(e) => {
//             setMessage(e.target.value);
//             adjustTextareaHeight(); // Adjust height on input change
//           }}
//           onKeyDown={handleKeyPress}
//           rows={1} // Minimum rows for initial state
//           style={{ minHeight: "40px", maxHeight: "150px", overflowY: "auto" }} // Minimum height with dynamic adjustment
//         />

//         {/* Attach File Icon (Right) */}
//         {showAttachIcon && (
//           <button
//             onClick={onAttachFile}
//             className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700"
//             title="Attach File"
//           >
//             <AttachFile />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MessageInput;



// import React, { useState, useRef, useEffect } from "react";
// import { AttachFile, InsertEmoticon } from "@mui/icons-material";
// import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
// import ReplyToMessageInput from "./ReplyToMessageInput";

// interface MessageInputProps {
//   placeholder?: string; // Placeholder for the input
//   onSend?: (message: string) => void; // Callback when message is sent
//   onAttachFile?: () => void; // Callback for attach file
//   replyToMessage?: string | null; // الرسالة المراد الرد عليها
//   onCancelReply?: () => void; // إلغاء الرد
//   showEmojiPicker?: boolean; // للتحكم في ظهور أيقونة الإيموجي
//   showAttachIcon?: boolean; // للتحكم في ظهور أيقونة المرفقات
// }

// const MessageInput: React.FC<MessageInputProps> = ({
//   placeholder = "Type a message...",
//   onSend,
//   onAttachFile,
//   replyToMessage,
//   onCancelReply,
//   showEmojiPicker = true,
//   showAttachIcon = true,
// }) => {
//   const [message, setMessage] = useState(""); // Message text state
//   const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false); // Emoji picker visibility
//   const emojiPickerRef = useRef<HTMLDivElement | null>(null);
//   const textareaRef = useRef<HTMLTextAreaElement | null>(null);

//   const handleEmojiClick = (emojiData: EmojiClickData) => {
//     setMessage((prev) => prev + emojiData.emoji); // Append emoji to the message
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       if (message.trim() !== "") {
//         onSend?.(message.trim());
//         setMessage("");
//         if (textareaRef.current) {
//           textareaRef.current.style.height = "auto";
//         }
//       }
//     }
//   };

//   const adjustTextareaHeight = () => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto";
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         emojiPickerRef.current &&
//         !emojiPickerRef.current.contains(event.target as Node)
//       ) {
//         setEmojiPickerVisible(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative flex flex-col bg-gray-100 rounded-lg shadow-md">
//       {/* إذا كان هناك رسالة للرد عليها */}
//       {replyToMessage && onCancelReply && (
//         <ReplyToMessageInput message={replyToMessage} onCancel={onCancelReply} />
//       )}

//       <div className="flex items-center px-4 py-2">
//         {showEmojiPicker && (
//           <div className="relative" ref={emojiPickerRef}>
//             <button
//               onClick={() => setEmojiPickerVisible((prev) => !prev)}
//               className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700"
//               title="Emoji Picker"
//             >
//               <InsertEmoticon />
//             </button>
//             {isEmojiPickerVisible && (
//               <div className="absolute bottom-12 left-0 z-50">
//                 <EmojiPicker onEmojiClick={handleEmojiClick} />
//               </div>
//             )}
//           </div>
//         )}

//         <textarea
//           ref={textareaRef}
//           className="flex-1 px-4 py-2 text-sm bg-transparent outline-none placeholder-gray-400 resize-none"
//           placeholder={placeholder}
//           value={message}
//           onChange={(e) => {
//             setMessage(e.target.value);
//             adjustTextareaHeight();
//           }}
//           onKeyDown={handleKeyPress}
//           rows={1}
//           style={{ minHeight: "40px", maxHeight: "150px", overflowY: "auto" }}
//         />

//         {showAttachIcon && (
//           <button
//             onClick={onAttachFile}
//             className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700"
//             title="Attach File"
//           >
//             <AttachFile />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MessageInput;
import React, { useState, useRef, useEffect } from "react";
import { AttachFile, InsertEmoticon } from "@mui/icons-material";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import ReplyBox from "./ReplyBox";

interface MessageInputProps {
  placeholder?: string; // Placeholder for the input
  onSend?: (message: string) => void; // Callback when message is sent
  onAttachFile?: () => void; // Callback for attach file
  replyToMessage?: ReplyTo | null; // الرسالة المراد الرد عليها
  onCancelReply?: () => void; // إلغاء الرد
  showEmojiPicker?: boolean; // للتحكم في ظهور أيقونة الإيموجي
  showAttachIcon?: boolean; // للتحكم في ظهور أيقونة المرفقات
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder = "Type a message...",
  onSend,
  onAttachFile,
  replyToMessage,
  onCancelReply,
  showEmojiPicker = true,
  showAttachIcon = true,
}) => {
  const [message, setMessage] = useState(""); // Message text state
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false); // Emoji picker visibility
  const emojiPickerRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji); // Append emoji to the message
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() !== "") {
        onSend?.(message.trim());
        setMessage("");
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
        }
      }
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setEmojiPickerVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col bg-gray-100 rounded-lg shadow-md">
      {/* مكون الرد على الرسالة */}
      {replyToMessage && (
        // <ReplyBox
        //   replyTo={replyToMessage}
        //   context="input"
        //   onCancelReply={onCancelReply}
        // />
        <ReplyBox
  replyTo={{
    sender: replyToMessage.sender,
    content: replyToMessage.content,
    type: replyToMessage.type || "text",
  }}
  context="input"
  onCancelReply={onCancelReply}
/>
      )}

      <div className="flex items-center px-4 py-2">
        {showEmojiPicker && (
          <div className="relative" ref={emojiPickerRef}>
            <button
              onClick={() => setEmojiPickerVisible((prev) => !prev)}
              className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700"
              title="Emoji Picker"
            >
              <InsertEmoticon />
            </button>
            {isEmojiPickerVisible && (
              <div className="absolute bottom-12 left-0 z-50">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
        )}

        <textarea
          ref={textareaRef}
          className="flex-1 px-4 py-2 text-sm bg-transparent outline-none placeholder-gray-400 resize-none"
          placeholder={placeholder}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            adjustTextareaHeight();
          }}
          onKeyDown={handleKeyPress}
          rows={1}
          style={{ minHeight: "40px", maxHeight: "150px", overflowY: "auto" }}
        />

        {showAttachIcon && (
          <button
            onClick={onAttachFile}
            className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700"
            title="Attach File"
          >
            <AttachFile />
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageInput;
