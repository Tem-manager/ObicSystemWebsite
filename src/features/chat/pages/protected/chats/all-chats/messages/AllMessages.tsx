

import React from "react";
import { Call, Videocam } from "@mui/icons-material";
import Header from "../../../../../Components/Partials/Header";
import CircleImage from "../../../../../Components/Ui/CircleImage";
import Message from "./MessageItem";
import ImageMessage from "./ImageMessage";
import VideoMessage from "./VideoMessage";
import { MessageData, MessageType } from "./MessageData";
import AudioMessage from "./AudioMessage";
import LocationMessage from "./LocationMessage";
import ContactMessage from "./ContactMessage";
import DocumentMessage from "./DocumentMessage";
import CallMessage from "./CallMessage";

const AllMessages: React.FC = () => {


  return (
    <div className="h-screen flex flex-col ">
      {/* Header */}
      <div className="relative w-full h-[4rem] sticky top-0 z-50  ">

        <Header
        

          leftContent={
            <div className="flex items-center space-x-3 ">
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

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto  p-4">
      {MessageData.map((message: MessageType) => (
  <div key={message.id}>
    {message.type === "text" ? (
      <Message
        text={message.content}
        time={message.time}
        isSent={message.isSent}
        status={message.status|| "" }
      />
    ) : message.type === "image" ? (
      <ImageMessage
        imageUrl={message.content}
        time={message.time}
        comment={message.comment || ""}
        isSent={message.isSent}
        status={message.status|| "" }
      />

    ) : message.type === "video" ? (
      <VideoMessage
        videoUrl={message.content}
        comment={message.comment || ""}
        time={message.time}
        status={message.status|| "" }
        isSent={message.isSent}
      />
  
    
  ) : message.type === "audio" ? (  
    <AudioMessage
      audioUrl={message.content}
      comment={message.comment || ""}
      time={message.time}
      type={message.type === "audio" ? "recording" : "song"} // تحديد النوع

      status={message.status || ""}
      isSent={message.isSent}
    />

  ) : message.type === "location" ? ( // معالجة الرسائل التي تحتوي على موقع
    <LocationMessage
      imageUrl={message.content} // رابط الصورة
      time={message.time}
      isSent={message.isSent}
      status={message.status || "sent"}
      latitude={message.latitude} // خط العرض
      longitude={message.longitude} // خط الطول
      comment={message.comment || ""}
    />
  ) :
 message.type === "contact" ? ( // إذا كانت الرسالة من نوع "contact"
<ContactMessage
  profileImageUrls={message.profileImageUrls || []} // تمرير صور جهات الاتصال
  names={message.names || []} // تمرير أسماء جهات الاتصال
  phoneNumbers={message.phoneNumbers || []} // تمرير أرقام الهواتف
  time={message.time}
  status={message.status || "sent"}
  isSent={message.isSent}
  message={message.content} // محتوى الرسالة
/>
 ) : message.type === "document" ? ( // حالة الرسائل من نوع مستندات
  <DocumentMessage
    fileName={message.fileName || ""}
    fileSize={message.fileSize || ""}
    fileType={message.fileType || ""}
    fileUrl={message.fileUrl || ""}
    time={message.time}
    status={message.status || ""}
    isSent={message.isSent}
  />
) :message.type === "call" ? (
    <CallMessage
      callType={message.callType || "missed"}
      time={message.time}
      isSent={message.isSent}
      status={message.status || "failed"}
    />
):
  
  null}
    
    
    
  </div>
))}

      </div>
    </div>
  );
};

export default AllMessages;



