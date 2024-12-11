// import React from "react";
// import BaseMessage from "../../../../../Components/Ui/BaseMessage";
// import ReplyBox from "./ReplyBox";

// interface ReplyTo {
//   sender: string;
//   content: string;
// }

// interface MessageProps {
//   text: string;
//   time: string;
//   isSent: boolean;
//   status: "sending" | "sent" | "read" | "failed";
//   isDeleted?: boolean;
//   onReply: (message: string) => void;
//   replyText?: string | null;
//   replyTo?: ReplyTo;
//   onCancelReply?: () => void;
//   onDelete?: () => void;
//   onInfo?: () => void;
//   onFavorite?: () => void;
// }

// const Message: React.FC<MessageProps> = ({
//   text,
//   time,
//   isSent,
//   status,
//   isDeleted,
//   onReply,
//   replyText,
//   onCancelReply,
//   onInfo,
//   onDelete,
//   onFavorite,
//   replyTo,
// }) => {
//   return (
//     <BaseMessage
//       time={time}
//       isSent={isSent}
//       status={status}
//       isDeleted={isDeleted}
//       onReply={onReply}
//       replyText={replyText}
//       onCancelReply={onCancelReply}
//       onDelete={onDelete}
//       onInfo={onInfo}
//       text={text}
//       onFavorite={onFavorite}
//       additionalOptions={[]}
//     >
//       {/* تأكد من وجود بيانات للرد قبل عرضها */}
//       {replyTo && (
//         <ReplyBox 
//           sender={replyTo.sender} 
//           content={replyTo.content} 
//           onCancelReply={onCancelReply!}
//         />
//       )}

//       {/* عرض الرسالة الأساسية */}
//       {isDeleted ? (
//         <p className="text-sm text-gray-400">
//           {isSent ? "You deleted this message" : "This message was deleted"}
//         </p>
//       ) : (
//         <p className="text-base sm:text-lg break-words whitespace-pre-wrap">
//           {text}
//         </p>
//       )}
//     </BaseMessage>
//   );
// };

// export default Message;


// =============================================================
// import React from "react";
// import BaseMessage from "../../../../../Components/Ui/BaseMessage";

// interface ReplyTo {
//   sender: string;
//   content: string;
// }

// interface MessageProps {
//   text: string;
//   time: string;
//   isSent: boolean;
//   status: "sending" | "sent" | "read" | "failed";
//   isDeleted?: boolean;
//   onReply: (message: string) => void;
//   replyText?: string | null;
//   replyTo?: ReplyTo;
//   onCancelReply?: () => void;
//   onDelete?: () => void;
//   onInfo?: () => void;
//   onFavorite?: () => void;
// }

// const Message: React.FC<MessageProps> = ({
//   text,
//   time,
//   isSent,
//   status,
//   isDeleted,
//   onReply,
//   replyText,
//   replyTo,
//   onCancelReply,
//   onInfo,
//   onDelete,
//   onFavorite,
// }) => {
//   return (
//     <div className="w-full mb-2">
//       {/* إذا كان هناك رسالة رد عليها، أظهرها بتصميم مميز */}
//       {replyTo && (
//         <div className="bg-gray-100 border-l-4 border-blue-500 p-2 rounded-md mb-1 shadow-sm">
//           <p className="text-sm font-semibold text-blue-600">{replyTo.sender}</p>
//           <p className="text-sm text-gray-700">{replyTo.content}</p>
//         </div>
//       )}

//       {/* الرسالة الأساسية */}
//       <div
//         className={`flex flex-col space-y-1 ${
//           isSent ? "items-end" : "items-start"
//         }`}
//       >
//         <BaseMessage
//           time={time}
//           isSent={isSent}
//           status={status}
//           isDeleted={isDeleted}
//           onReply={onReply}
//           replyText={replyText}
//           onCancelReply={onCancelReply}
//           onDelete={onDelete}
//           onInfo={onInfo}
//           text={text}
//           onFavorite={onFavorite}
//           additionalOptions={[]}
//         />
//       </div>
//     </div>
//   );
// };

// export default Message;

// ===================================
// import React from "react";
// import BaseMessage from "../../../../../Components/Ui/BaseMessage";
// import ReplyBox from "./ReplyBox";

// interface ReplyTo {
//   sender: string;
//   content: string;
// }

// interface MessageProps {
//   text: string;
//   time: string;
//   isSent: boolean;
//   status: "sending" | "sent" | "read" | "failed";
//   isDeleted?: boolean;
//   onReply: (message: string) => void;
//   replyTo?: ReplyTo;
//   onCancelReply?: () => void;
//   onDelete?: () => void;
//   onInfo?: () => void;
//   onFavorite?: () => void;
// }

// const Message: React.FC<MessageProps> = ({
//   text,
//   time,
//   isSent,
//   status,
//   isDeleted,
//   onReply,
//   replyTo,
//   onCancelReply,
//   onInfo,
//   onDelete,
//   onFavorite,
// }) => {
//   return (
//     <div className="w-full mb-2">
//       {/* استدعاء ReplyBox عند وجود رد */}
//       {replyTo && (
//         <ReplyBox
//           sender={replyTo.sender}
//           content={replyTo.content}
//           onCancelReply={onCancelReply!}
//         />
//       )}

//       {/* الرسالة الأساسية */}
//       <div
//         className={`flex flex-col space-y-1 ${isSent ? "items-end" : "items-start"}`}
//       >
//         <BaseMessage
//           time={time}
//           isSent={isSent}
//           status={status}
//           isDeleted={isDeleted}
//           onReply={onReply}
//           replyText={text}
//           onCancelReply={onCancelReply}
//           onDelete={onDelete}
//           onInfo={onInfo}
//           text={text}
//           onFavorite={onFavorite}
//           additionalOptions={[]}
//         />
//       </div>
//     </div>
//   );
// };

// export default Message;
// ================================================================================
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
      <div className={`flex flex-col space-y-1 ${isSent ? "items-end" : "items-start"}`}>
        <BaseMessage
          time={time}
          isSent={isSent}
          status={status}
          isDeleted={isDeleted}
          onReply={onReply}
          text={text}
          onCancelReply={onCancelReply}
          onDelete={onDelete}
          onInfo={onInfo}
          onFavorite={onFavorite}
          additionalOptions={[]}
          replyTo={replyTo} // تمرير خاصية الرد
        />
      </div>
    </div>
  );
};

export default Message;
