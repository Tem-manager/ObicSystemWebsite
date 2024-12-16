

// import React, { useMemo } from "react";
// import TimeDisplay from "../../../../Components/ui/TimeDisplay";
// import MessageStatus from "./MessageStatus";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import DropdownMenu from "./DropdownMenu";
// import ReplyIcon from "@mui/icons-material/Reply";
// import InfoIcon from "@mui/icons-material/Info";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import StarIcon from "@mui/icons-material/Star";
// import ReplyBox from "../../pages/protected/chats/all-chats/messages/ReplyBox";

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
//   };
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
//     imageUrl, // إضافة خاصية الصورة

//     replyTo, // The original message info
//   }) => {
//     const handleCopy = () => {
//       navigator.clipboard
//         .writeText(text)
//         .then(() => {
//           // alert("Message copied to clipboard!");
//         })
//         .catch((err) => {
//           alert("Failed to copy message: " + err);
//         });
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

// <div
//   className={`relative w-full max-w-lg sm:max-w-md px-4 py-3 rounded-lg shadow-lg ${
//     isSent ? "bg-[#192745] text-white rounded-tr-none pr-12" : "bg-white text-gray-800 rounded-tl-none pr-12"
//   }`}
// >
//   {/* عرض صندوق الرد إذا كان موجودًا */}
//   {replyTo && (
//     <ReplyBox
//       replyTo={{
//         sender: replyTo.sender,
//         content: replyTo.content,
//       }}
//     />
//   )}
// {imageUrl && (
//   <div className="mb-2">
//     <img
//       src={imageUrl}
//       alt="Message Content"
//       className="w-full max-w-[250px] sm:max-w-[300px] max-h-[300px] object-cover rounded-lg"
//     />
 
//   </div>
// )}




//   {/* محتوى الرسالة */}
//   {isDeleted ? (
//     <p className="text-sm text-gray-400">
//       {isSent ? "You deleted this message" : "This message was deleted"}
//     </p>
//   ) : (
//     // <p className="text-base sm:text-lg break-words whitespace-pre-wrap">
//            <p className="mt-2 text-base sm:text-lg break-words whitespace-pre-wrap w-full max-w-[250px] sm:max-w-[300px]"> 

//       {text}
//     </p>
//   )}

//   {/* الوقت وحالة الرسالة */}
//   <div className="flex items-center justify-between mt-2">
//     <span className="text-xs">
//       <TimeDisplay time={time} formatType="normal" />
//     </span>
//     {/* <span className="text-xs">
//       <TimeDisplay time={time} formatType="custom" />
//     </span> */}
//     {status && isSent && <MessageStatus status={status} />}
//   </div>

//   {/* قائمة الخيارات */}
//   {menuOptions.length > 0 && (
//     <div
//       className="absolute top-2 right-2 z-50" // تأكيد الموضع المناسب للأيقونة
//     >
//       <DropdownMenu
//         buttonContent={
//           <div className="flex items-center justify-center w-8 h-8  rounded-full ">
//             <MoreVertIcon className="text-gray-600" />
//           </div>
//         }
//         options={menuOptions as { label: string; icon?: React.ReactNode; onClick: () => void }[]}
//       />
//     </div>
//   )}
// </div>

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
    type: "text" | "image" | "video" | "document"; // نوع الرسالة الأصلية
  };
  text: string; // نص الرسالة
  imageUrl?: string; // رابط الصورة إن كانت الرسالة تحتوي على صورة
}

const BaseMessage: React.FC<BaseMessageProps> = React.memo(
  ({
    time,
    isSent,
    status = null,
    isDeleted,
    onReply,
    imageStyles,
    onDelete,
    onInfo,
    onFavorite,
    additionalOptions = [],
    text,
    imageUrl,
    replyTo,
  }) => {
    const handleCopy = () => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          // alert("Message copied to clipboard!");
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
        onDoubleClick={() => onReply?.(text)}
      >
        <div
          className={`relative w-full max-w-lg sm:max-w-md px-4 py-3 rounded-lg shadow-lg ${
            isSent
              ? "bg-[#192745] text-white rounded-tr-none pr-12"
              : "bg-white text-gray-800 rounded-tl-none pr-12"
          }`}
        >
          {/* عرض صندوق الرد إذا كان موجودًا */}
          {/* {replyTo && (
            <ReplyBox
              replyTo={{
                sender: replyTo.sender,
                content: replyTo.content,
                type: replyTo.type, // تمرير نوع الرد إلى ReplyBox
              }}
            />
          )} */}
          {/* {replyTo && (
  <ReplyBox
    replyTo={{
      sender: replyTo.sender,
            sender: replyTo.sender, // تمرير اسم المرسل

      content: replyTo.content,
      type: replyTo.type || "text", // التأكد من النوع
    }}
  />
)} */}
{replyTo && (
  <ReplyBox
    replyTo={{
      sender: replyTo.sender,
      content: replyTo.content, // this could be the URL of the image
      type: replyTo.type || "text", // Ensure it's passed as image or other types
    }}
    context="input"
    // onCancelReply={onCancelReply}
  />
)}


          {/* عرض صورة إن وجدت */}
          {imageUrl && (
  <div className="mb-2">
    <img
      src={imageUrl}
      alt="Message Content"
      className={`${imageStyles} max-w-full max-h-full object-cover`}
    />
  </div>
)}


          {/* محتوى الرسالة */}
          {isDeleted ? (
            <p className="text-sm text-gray-400">
              {isSent ? "You deleted this message" : "This message was deleted"}
            </p>
          ) : (
            <p className="mt-2 text-base sm:text-lg break-words whitespace-pre-wrap w-full max-w-[250px] sm:max-w-[300px]">
              {text}
            </p>
          )}

          {/* الوقت وحالة الرسالة */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs">
              <TimeDisplay time={time} formatType="normal" />
            </span>
            {status && isSent && <MessageStatus status={status} />}
          </div>

          {/* قائمة الخيارات */}
          {menuOptions.length > 0 && (
            <div className="absolute top-2 right-2 z-50">
              <DropdownMenu
                buttonContent={
                  <div className="flex items-center justify-center w-8 h-8 rounded-full">
                    <MoreVertIcon className="text-gray-600" />
                  </div>
                }
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

