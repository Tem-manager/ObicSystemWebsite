// import React, { useMemo } from "react";
// import TimeDisplay from "../../../../Components/ui/TimeDisplay";
// import MessageStatus from "./MessageStatus";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import DropdownMenu from "./DropdownMenu";
// import ReplyIcon from "@mui/icons-material/Reply";
// import InfoIcon from "@mui/icons-material/Info";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy"; // استيراد أيقونة النسخ
// import StarIcon from '@mui/icons-material/Star';

// interface BaseMessageProps {
//   time: string;
//   isSent: boolean;
//   status?: "sending" | "sent" | "read" | "failed" | null;
//   isDeleted?: boolean;
//   onReply?: (message: string) => void;
//   replyText?: string | null;
//   onCancelReply?: () => void;
//   onDelete?: () => void;

//   onFavorite?: () => void;
//   onInfo?: () => void;
//   additionalOptions?: { label: string; icon?: React.ReactNode; onClick: () => void }[];
//   replyTo?: {
//     id: number; // ID الرسالة التي يتم الرد عليها
//     content: string; // محتوى الرسالة التي يتم الرد عليها
//     sender: string; // اسم المرسل الأصلي
//   }; // 
//   text: string; // خاصية النص
// }

// const BaseMessage: React.FC<BaseMessageProps> = React.memo(
//   ({
//     time,
//     isSent,
//     status = null,
//     isDeleted,
//     onReply,
  
//     onDelete,
//     onInfo,
//     onFavorite,
//     additionalOptions = [],
//     text,
//     replyTo, // The original message info
//   }) => {
//     const handleCopy = () => {
//       navigator.clipboard.writeText(text).then(() => {
//         alert("Message copied to clipboard!");
//       }).catch((err) => {
//         alert("Failed to copy message: " + err);
//       });
//     };

//     const menuOptions = useMemo(
//       () => [
//         onReply && { label: "Reply", icon: <ReplyIcon />, onClick: () => onReply(text) },
//         onInfo && { label: "Info", icon: <InfoIcon />, onClick: onInfo },
//         onDelete && { label: "Delete", icon: <DeleteIcon />, onClick: onDelete },
//         { label: "Copy", icon: <ContentCopyIcon />, onClick: handleCopy },
//         onFavorite && { label: "Favorite", icon: <StarIcon />, onClick: onFavorite },
//         ...additionalOptions,
//       ].filter(Boolean),
//       [onReply, onInfo, onDelete, additionalOptions, text]
//     );

//     return (
//       <div
//         className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}
//         onDoubleClick={() => onReply?.(text)} // reply on double click
//       >
//         <div
//           className={`relative w-full max-w-lg sm:max-w-md px-4 py-3 rounded-lg shadow-lg overflow-hidden ${
//             isSent ? "bg-[#192745] text-white rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none"
//           }`}
//         >
      

//           {/* Message Content */}
//           {isDeleted ? (
//             <p className="text-sm text-gray-400">
//               {isSent ? "You deleted this message" : "This message was deleted"}
//             </p>
//           ) : (
//             <p className="text-base sm:text-lg break-words whitespace-pre-wrap">{text}</p>
//           )}

//           {/* Time and Status */}
//           <div className="flex items-center justify-between mt-2 text-gray-500">
//           <span className="text-xs">
//     {/* عرض الوقت بتنسيق الوقت العادي */}
//     <TimeDisplay time={time} formatType="normal" />
//   </span>
//   <span className="text-xs">
//     {/* عرض التاريخ بتنسيق مخصص */}
//     <TimeDisplay time={time} formatType="custom" />
//   </span>
//             {status && isSent && <MessageStatus status={status} />}
//           </div>

//           {/* Dropdown Menu */}
//           {menuOptions.length > 0 && (
//             <div className="absolute top-2 right-2 z-999">
//               <DropdownMenu
//                 buttonContent={<MoreVertIcon />}
//                 options={menuOptions as { label: string; icon?: React.ReactNode; onClick: () => void }[]}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   },
//   (prevProps, nextProps) => {
//     return (
//       prevProps.time === nextProps.time &&
//       prevProps.isSent === nextProps.isSent &&
//       prevProps.status === nextProps.status &&
//       prevProps.isDeleted === nextProps.isDeleted &&
//       prevProps.replyText === nextProps.replyText &&
//       prevProps.text === nextProps.text &&
//       prevProps.onReply === nextProps.onReply &&
//       prevProps.onDelete === nextProps.onDelete &&
//       prevProps.onFavorite === nextProps.onFavorite &&
//       prevProps.onInfo === nextProps.onInfo &&
//       JSON.stringify(prevProps.additionalOptions) === JSON.stringify(nextProps.additionalOptions)
//     );
//   }
// );

// export default BaseMessage;

import React, { useMemo } from "react";
import TimeDisplay from "../../../../Components/ui/TimeDisplay";
import MessageStatus from "./MessageStatus";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DropdownMenu from "./DropdownMenu";
import ReplyIcon from "@mui/icons-material/Reply";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import StarIcon from "@mui/icons-material/Star";
import ReplyBox from "../../pages/protected/chats/all-chats/messages/ReplyBox";

interface BaseMessageProps {
  time: string;
  isSent: boolean;
  status?: "sending" | "sent" | "read" | "failed" | null;
  isDeleted?: boolean;
  onReply?: (message: string) => void;
  replyText?: string | null;
  onCancelReply?: () => void;
  onDelete?: () => void;
  onFavorite?: () => void;
  onInfo?: () => void;
  additionalOptions?: { label: string; icon?: React.ReactNode; onClick: () => void }[];
  replyTo?: {
    id: number; // ID الرسالة التي يتم الرد عليها
    content: string; // محتوى الرسالة التي يتم الرد عليها
    sender: string; // اسم المرسل الأصلي
  };
  text: string; // خاصية النص
}

const BaseMessage: React.FC<BaseMessageProps> = React.memo(
  ({
    time,
    isSent,
    status = null,
    isDeleted,
    onReply,
    onDelete,
    onInfo,
    onFavorite,
    additionalOptions = [],
    text,
    replyTo, // The original message info
  }) => {
    const handleCopy = () => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Message copied to clipboard!");
        })
        .catch((err) => {
          alert("Failed to copy message: " + err);
        });
    };

    const menuOptions = useMemo(
      () => [
        onReply && { label: "Reply", icon: <ReplyIcon />, onClick: () => onReply(text) },
        onInfo && { label: "Info", icon: <InfoIcon />, onClick: onInfo },
        onDelete && { label: "Delete", icon: <DeleteIcon />, onClick: onDelete },
        { label: "Copy", icon: <ContentCopyIcon />, onClick: handleCopy },
        onFavorite && { label: "Favorite", icon: <StarIcon />, onClick: onFavorite },
        ...additionalOptions,
      ].filter(Boolean),
      [onReply, onInfo, onDelete, additionalOptions, text]
    );

    return (
      <div
        className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}
        onDoubleClick={() => onReply?.(text)} // reply on double click
      >
        <div
          className={`relative w-full max-w-lg sm:max-w-md px-4 py-3 rounded-lg shadow-lg overflow-hidden ${
            isSent ? "bg-[#192745] text-white rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none"
          }`}
        >
          {/* عرض صندوق الرد إذا كان موجودًا */}
          {replyTo && (
            <ReplyBox
              replyTo={{
                sender: replyTo.sender,
                content: replyTo.content,
              }}
            />
          )}

          {/* محتوى الرسالة */}
          {isDeleted ? (
            <p className="text-sm text-gray-400">
              {isSent ? "You deleted this message" : "This message was deleted"}
            </p>
          ) : (
            <p className="text-base sm:text-lg break-words whitespace-pre-wrap">{text}</p>
          )}

          {/* الوقت وحالة الرسالة */}
          <div className="flex items-center justify-between mt-2 text-gray-500">
            <span className="text-xs">
              <TimeDisplay time={time} formatType="normal" />
            </span>
            <span className="text-xs">
              <TimeDisplay time={time} formatType="custom" />
            </span>
            {status && isSent && <MessageStatus status={status} />}
          </div>

          {/* قائمة الخيارات */}
          {menuOptions.length > 0 && (
            <div className="absolute top-2 right-2 z-999">
              <DropdownMenu
                buttonContent={<MoreVertIcon />}
                options={menuOptions as { label: string; icon?: React.ReactNode; onClick: () => void }[]}
              />
            </div>
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.time === nextProps.time &&
      prevProps.isSent === nextProps.isSent &&
      prevProps.status === nextProps.status &&
      prevProps.isDeleted === nextProps.isDeleted &&
      prevProps.replyText === nextProps.replyText &&
      prevProps.text === nextProps.text &&
      prevProps.onReply === nextProps.onReply &&
      prevProps.onDelete === nextProps.onDelete &&
      prevProps.onFavorite === nextProps.onFavorite &&
      prevProps.onInfo === nextProps.onInfo &&
      JSON.stringify(prevProps.additionalOptions) === JSON.stringify(nextProps.additionalOptions)
    );
  }
);

export default BaseMessage;

