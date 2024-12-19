
// import React from "react";

import { Close } from "@mui/icons-material";

// interface ReplyTo {
//   sender: string;
//   content: string;
// }

// interface ReplyBoxProps {
//   replyTo: ReplyTo;
//   onCancelReply?: () => void;
// }

// const ReplyBox: React.FC<ReplyBoxProps> = ({
//   replyTo,
// }) => {
//   return (
//     <div className="p-2 bg-gray-100 rounded-md border-l-4  border-blue-500 w-full max-w-xs">

//       <div className="text-sm font-medium text-gray-700">{replyTo.sender}</div>
//       <div className="text-sm text-gray-600">{replyTo.content}</div>
   
//     </div>
//   );
// };

// export default ReplyBox;


// import React from "react";

// interface ReplyTo {
//   sender: string;
//   content: string;
//   type: "text" | "image" | "video" | "audio" | "document"; // أنواع الرسائل
// }

// interface ReplyBoxProps {
//   replyTo: ReplyTo;
//   onCancelReply?: () => void;
// }

// const ReplyBox: React.FC<ReplyBoxProps> = ({ replyTo }) => {
//   const renderContent = () => {
//     switch (replyTo.type) {
//       case "text":
//         return <div className="text-sm text-gray-600">{replyTo.content}</div>;
//       case "image":
//         return (
//           <div className="flex items-center gap-2">
//             <img
//               src={replyTo.content}
//               alt="Reply content"
//               className="w-8 h-8 object-cover rounded-md"
//             />
//             <span className="text-sm text-gray-600">Image</span>
//           </div>
//         );
//       case "video":
//         return (
//           <div className="flex items-center gap-2">
//             <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md">
//               🎥
//             </span>
//             <span className="text-sm text-gray-600">Video</span>
//           </div>
//         );
//       case "audio":
//         return (
//           <div className="flex items-center gap-2">
//             <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md">
//               🎵
//             </span>
//             <span className="text-sm text-gray-600">Audio</span>
//           </div>
//         );
//       case "document":
//         return (
//           <div className="flex items-center gap-2">
//             <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md">
//               📄
//             </span>
//             <span className="text-sm text-gray-600">Document</span>
//           </div>
//         );
//       default:
//         return <div className="text-sm text-gray-600">Unsupported content</div>;
//     }
//   };

//   return (
//     <div className="p-2 bg-gray-100 rounded-md border-l-4 border-blue-500 w-full max-w-xs">
//       <div className="text-sm font-medium text-gray-700">{replyTo.sender}</div>
//       <div className="mt-1">{renderContent()}</div>
//     </div>
//   );
// };

// export default ReplyBox;
interface ReplyTo {
  sender: string;
  type: "text" | "image" | "video" | "audio" | "document";
  content: string;
}

interface ReplyBoxProps {
  replyTo: ReplyTo; // الرسالة التي يتم الرد عليها
  newMessageContent?: string; // المحتوى الجديد
  context?: "message" | "input"; // سياق الاستخدام
  onCancelReply?: () => void; // إلغاء الرد (اختياري)
}

const ReplyBox: React.FC<ReplyBoxProps> = ({
  replyTo,
  newMessageContent,
  context = "message",
  onCancelReply,
}) => {
  const renderPreview = (reply: ReplyTo) => {
    if (!reply.content) {
      return (
        <div className="text-sm text-gray-600">
          Content unavailable
        </div>
      );
    }
  
    switch (reply.type) {
      case "image":
        return (
          <div className="flex items-center space-x-2">
            <img
              src={reply.content}
              alt="Image Preview"
              className="w-10 h-10 object-cover rounded"
            />
            <span className="text-sm font-medium text-gray-600">Image</span>
          </div>
        );
      case "video":
        return (
          <div className="flex items-center space-x-2">
            <video
              src={reply.content}
              className="w-10 h-10 object-cover rounded"
              muted
            />
            <span className="text-sm font-medium text-gray-600">Video</span>
          </div>
        );
      case "audio":
        return (
          <div className="flex items-center space-x-2">
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded text-gray-600">
              🎵
            </span>
            <span className="text-sm font-medium text-gray-600">Audio</span>
          </div>
        );
      case "document":
        return (
          <div className="flex items-center space-x-2 w-full">
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded text-gray-600">
              📄
            </span>
            <span className="text-sm font-medium text-gray-600">Document</span>
          </div>
        );
      case "text":
      default:
        return (
          <div className="text-sm text-gray-600">
            {reply.content.length > 50
              ? `${reply.content.slice(0, 50)}...`
              : reply.content}
          </div>
        );
    }
  };
  

  return (
    <div
      className={`relative p-2 rounded-md border-l-4 w-full ${
        context === "input" ? "bg-blue-50 border-blue-400" : "bg-gray-100 border-blue-500"
      }`}
    >
      {/* زر إلغاء الرد (في سياق الإدخال) */}
      {context === "input" && onCancelReply && (
        <button
          onClick={onCancelReply}
          className="absolute top-1 right-1 text-sm text-red-500 hover:underline"
          title="Cancel Reply"
        >
          <Close />
        </button>
      )}
  
      {/* الرسالة التي يتم الرد عليها */}
      <div className="mb-2 w-full">
        <div className="text-sm font-medium text-gray-700">{replyTo.sender}</div>
        {renderPreview(replyTo)}
      </div>
  
      {/* الرسالة الجديدة (إذا وجدت) */}
      {newMessageContent && (
        <div className="mt-2 p-2 bg-white rounded shadow-sm border">
          <div className="text-sm text-gray-800">{newMessageContent}</div>
        </div>
      )}
    </div>
  );
  
};

export default ReplyBox;
