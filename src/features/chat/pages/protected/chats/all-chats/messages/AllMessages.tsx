// import { Call, Videocam } from "@mui/icons-material";
// import Header from "../../../../../Components/Partials/Header";
// import CircleImage from "../../../../../Components/Ui/CircleImage";


// export default function AllMessages() {


//     const messages = [
//         { senderName: "You", text: "Hello!", time: "10:30 AM", type: "sent" },
//         { senderName: "John", text: "Hi there!", time: "10:31 AM", type: "received" },
//         { senderName: "You", text: "How are you?", time: "10:32 AM", type: "sent" },
//         { senderName: "John", text: "I'm good, thanks!", time: "10:33 AM", type: "received" },
//       ];


//   return (
//     <div>
      
//            {/* الهيدر */}
//            <div className="relative w-full h-[4rem]">
//             <Header
//               leftContent={
//                 <div className="flex items-center space-x-3">
//                   <CircleImage
//                     imageUrl="https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//                     className="w-12 h-12"
//                   />
//                   <span className="text-lg font-semibold text-gray-800">Username</span>
//                 </div>
//               }
//               rightContent={
//                 <div className="flex items-center space-x-4 text-gray-800">
//                   <button type="button" className="p-2">
//                     <Videocam />
//                   </button>
//                   <button type="button" className="p-2">
//                     <Call />
//                   </button>
//                 </div>
//               }
//               className="absolute inset-0 bg-white shadow-md dark:bg-gray-800 flex items-center px-4"
//             />
//           </div>

//           {/* الرسائل */}
//           <div className="mt-[4rem] flex-grow overflow-y-auto">
//             {messages.map((message, index) => (
//               <div key={index} className="p-2">
//                 <div
//                   className={`p-3 rounded-lg max-w-[75%] ${
//                     message.type === "sent"
//                       ? "bg-blue-500 text-white ml-auto"
//                       : "bg-white text-gray-800"
//                   }`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//     </div>
//   )
// }



import React from "react";
import { Call, Videocam } from "@mui/icons-material";
import Header from "../../../../../Components/Partials/Header";
import CircleImage from "../../../../../Components/Ui/CircleImage";
import MessageList from "../../messages/MessageList";
import VoiceMessage from "./ImageMessage";
import ImageMessage from "./ImageMessage";


const AllMessages: React.FC = () => {
  const messages = [
    { text: "Hello!", time: "10:30 AM", type: "sent" },
    { text: "Hi there!", time: "10:31 AM", type: "received" },
    { text: "How are you?", time: "10:32 AM", type: "sent" },
    { text: "I'm good, thanks!", time: "10:33 AM", type: "received" },
    { type: "image", imageUrl: "https://images.pexels.com/photos/29315816/pexels-photo-29315816/free-photo-of-elegant-swans-by-the-water-on-a-tranquil-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", caption: "Check this out!", typeMessage: "sent" },


  ];

  return (
    <div className="h-screen flex flex-col">
      {/* الهيدر */}
      <div className="relative w-full h-[4rem]">
        <Header
          leftContent={
            <div className="flex items-center space-x-3">
              <CircleImage
                imageUrl="https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            size={12}
              />
              <span className="text-lg font-semibold text-gray-800">Username</span>
            </div>
          }
          rightContent={
            <div className="flex items-center space-x-4 text-gray-800">
              <button type="button" className="p-2">
                <Videocam />
              </button>
              <button type="button" className="p-2">
                <Call />
              </button>
            </div>
          }
          className="absolute inset-0 bg-white shadow-md dark:bg-gray-800 flex items-center px-4"
        />
      </div>

      {/* قائمة الرسائل */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <MessageList messages={messages} />

        <ImageMessage
              // key={index}
              imageUrl={messages.imageUrl}
              caption={messages.caption}
              type={messages.typeMessage}
            />
      </div>

    </div>
  );
};

export default AllMessages;

