// ===========================================2

// import React, { useState } from "react";
// import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
// import MessageStatus from "../../../../../Components/Ui/MessageStatus"; // استيراد MessageStatus
// import MoreVertIcon from '@mui/icons-material/MoreVert'; // استيراد الأيقونة MoreVert
// import { Menu, MenuItem } from '@mui/material'; // استيراد مكونات القائمة المنسدلة
// import MessageInput from "./MessageInput"; // استيراد مكون MessageInput (الذي يحتوي على حقل الإدخال)

// interface MessageProps {
//   text: string;
//   time: string;
//   isSent: boolean; // true إذا كانت الرسالة مرسلة، false إذا مستقبلة
//   status: "sending" | "sent" | "read" | "failed"; // الحالة الجديدة للرسالة
//   isDeleted?: boolean; // إضافة خاصية لتحديد ما إذا كانت الرسالة محذوفة
// }

// const Message: React.FC<MessageProps> = ({ text, time, isSent, status, isDeleted }) => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // لحالة القائمة المنسدلة
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // حالة القائمة المنسدلة
//   const [isReplying, setIsReplying] = useState(false); // حالة الرد على الرسالة
//   const [replyText, setReplyText] = useState(""); // النص الذي يتم إدخاله للرد على الرسالة

//   // تعبير منتظم لاكتشاف الروابط
//   const urlRegex = /(https?:\/\/[^\s]+)/g;
//   const phoneRegex = /\b\d{10,15}\b/g;

//   // دالة لتحويل النص إلى رابط قابل للنقر
//   const renderText = (text: string) => {
//     let modifiedText = text;
//     // تحويل الروابط إلى رابط clickable
//     modifiedText = modifiedText.replace(urlRegex, (url) => {
//       return `<a href="${url}" target="_blank" class="text-blue-500 underline">${url}</a>`;
//     });

//     // تحويل الأرقام إلى نص يمكن التعرف عليه (مثال: يمكن تحويله إلى رابط للمكالمة)
//     modifiedText = modifiedText.replace(phoneRegex, (phone) => {
//       return `<a href="tel:${phone}" class="text-blue-500 underline">${phone}</a>`;
//     });

//     return modifiedText;
//   };

//   // فتح القائمة المنسدلة عند الضغط على الأيقونة
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//     setIsDropdownOpen(true);
//   };

//   // إغلاق القائمة المنسدلة
//   const handleClose = () => {
//     setAnchorEl(null);
//     setIsDropdownOpen(false);
//   };

//   // حدث الضغط على رد الرسالة في القائمة المنسدلة
//   const handleReplyClick = () => {
//     setIsReplying(true); // تفعيل حالة الرد
//   };

//   return (
//     <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
//       <div
//         className={`relative w-full max-w-lg sm:max-w-md px-4 py-3 rounded-lg shadow-lg overflow-hidden ${
//           isSent
//             ? "bg-[#192745] text-white rounded-tr-none"
//             : "bg-white text-gray-800 rounded-tl-none"
//         }`}
//       >
//         {/* أيقونة MoreVert في الزاوية العليا اليمنى داخل div */}
//         <button
//           onClick={handleClick}
//           className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 z-10"
//         >
//           <MoreVertIcon />
//         </button>

//         {/* إذا كانت الرسالة محذوفة */}
//         {isDeleted ? (
//           <p className={`text-sm ${isSent ? "text-gray-400" : "text-gray-600"}`}>
//             {isSent ? "You deleted this message" : "This message was deleted"}
//           </p>
//         ) : (
//           <p
//             className="text-base sm:text-lg break-words whitespace-pre-wrap"
//             dangerouslySetInnerHTML={{ __html: renderText(text) }} // عرض النص المعدل
//           />
//         )}

//         {/* الوقت */}
//         <div
//           className={`flex items-center justify-between mt-2 ${isSent ? "text-gray-300" : "text-gray-500"}`}
//         >
//           <span className="text-xs">
//             <TimeDisplay time={time} />
//           </span>

//           {/* حالة الرسالة (أيقونة) */}
//           {!isDeleted && isSent && <MessageStatus status={status} />}
//         </div>

//         {/* قائمة منسدلة تظهر عند الضغط على MoreVert */}
//         <Menu
//           anchorEl={anchorEl}
//           open={isDropdownOpen}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//         >
//           <MenuItem onClick={handleReplyClick}>Reply</MenuItem>
//           <MenuItem onClick={handleClose}>Copy</MenuItem>
//           <MenuItem onClick={handleClose}>Info</MenuItem>
//           <MenuItem onClick={handleClose}>Favorite</MenuItem>
//         </Menu>

//         {/* حقل الرد الذي يظهر عند الضغط على "Reply" */}
//         {isReplying && (
//           <div className="mt-4">
//             <MessageInput
//               placeholder="Type your reply..."
//               onSend={(message) => {
//                 console.log("Reply sent:", message);
//                 setReplyText(""); // مسح النص بعد إرسال الرد
//                 setIsReplying(false); // إخفاء حقل الرد
//               }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Message;

// ==================================3
import React from "react";
import BaseMessage from "../../../../../Components/Ui/BaseMessage"; // استيراد BaseMessage
import ReplyMessage from "./ReplyMessage";

interface MessageProps {
  text: string;
  time: string;
  isSent: boolean; // true إذا كانت الرسالة مرسلة، false إذا مستقبلة
  status: "sending" | "sent" | "read" | "failed"; // الحالة الجديدة للرسالة
  isDeleted?: boolean; // إضافة خاصية لتحديد ما إذا كانت الرسالة محذوفة
  onReply: (message: string) => void; // دالة للرد على الرسالة
  replyText?: string | null; // النص الذي يتم الرد عليه، إذا كان موجودًا
  onCancelReply?: () => void; // دالة لإلغاء الرد
  onDelete?: () => void; // دالة لحذف الرسالة
  onInfo?: () => void; // دالة لعرض معلومات الرسالة
  onFavorite?:()=>void;
}

const Message: React.FC<MessageProps> = ({
  text,
  time,
  isSent,
  status,
  isDeleted,
  onReply,
  replyText,
  onCancelReply,
  onInfo,
  onDelete,
  onFavorite,
}) => {
  return (
    <BaseMessage
      time={time}
      isSent={isSent}
      status={status}
      isDeleted={isDeleted}
      onReply={onReply}
      replyText={replyText}
      onCancelReply={onCancelReply}
      onDelete={onDelete}
      onInfo={onInfo}
      text={text} // تمرير النص هنا
      onFavorite={onFavorite}
      additionalOptions={[]} // يمكنك إضافة خيارات إضافية إذا لزم الأمر
    >
      {/* عرض مكون الرد إذا كان هناك رد نشط */}
      {replyText && (
        <ReplyMessage replyText={replyText} onCancelReply={onCancelReply!} />
      )}

      {/* النص أو حالة الرسالة المحذوفة */}
      {isDeleted ? (
        <p className="text-sm text-gray-400">
          {isSent ? "You deleted this message" : "This message was deleted"}
        </p>
      ) : (
        <p className="text-base sm:text-lg break-words whitespace-pre-wrap">
          {text}
        </p>
      )}
    </BaseMessage>
  );
};

export default Message;


