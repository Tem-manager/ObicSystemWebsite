
import React, { useState } from "react";
import { Call, Videocam } from "@mui/icons-material";
import Header from "../../../../../Components/Partials/Header";
import CircleImage from "../../../../../Components/Ui/CircleImage";
import Message from "./MessageItem";
import ImageMessage from "./ImageMessage";
import VideoMessage from "./VideoMessage";
import AudioMessage from "./AudioMessage";
import LocationMessage from "./LocationMessage";
import ContactMessage from "./ContactMessage";
import DocumentMessage from "./DocumentMessage";
import CallMessage from "./VoiceVideoCallMessage";
import MessageInput from "./MessageInput";
import { MessageData, MessageType } from "./MessageData";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay"; // استيراد مكون عرض الوقت

const AllMessages: React.FC = () => {
  const [replyTo, setReplyTo] = useState<string | null>(null); // تخزين الرسالة المراد الرد عليها
  const [favorites, setFavorites] = useState<Set<string>>(new Set()); // حالة المفضلة

  const handleSend = (message: string) => {
    console.log("Message Sent:", message, "Replying To:", replyTo);
    setReplyTo(null); // إعادة تعيين الرد
  };

  const handleFavorite = (message: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(message)) {
        newFavorites.delete(message);
      } else {
        newFavorites.add(message);
      }
      return newFavorites;
    });
  };

  // خريطة تربط نوع الرسالة بالمكون
  const messageComponents: Record<
    string,
    React.FC<{ message: MessageType; onReply: (msg: string) => void }>
  > = {
    text: ({ message, onReply }) => (
    <Message 
  text={message.content}
  time={message.time}
  isSent={message.isSent}
  status={message.status}
  onReply={onReply}
  replyTo={message.replyTo}
  onCancelReply={() => setReplyTo(null)}
  onDelete={() => console.log("Message deleted")}
  onInfo={() => console.log("Message info")}
  onFavorite={() => handleFavorite(message.id)}
  replyTo={message.replyTo} // تمرير خاصية الرد

/>
    ),
    image: ({ message }) => (
      <ImageMessage
        imageUrl={message.content}
        time={message.time}
        comment={message.comment || ""}
        isSent={message.isSent}
        status={message.status || ""}
      />
    ),
    video: ({ message }) => (
      <VideoMessage
        videoUrl={message.content}
        comment={message.comment || ""}
        time={message.time}
        status={message.status || ""}
        isSent={message.isSent}
      />
    ),
    audio: ({ message }) => (
      <AudioMessage
        audioUrl={message.content}
        comment={message.comment || ""}
        time={message.time}
        status={message.status || ""}
        isSent={message.isSent}
        type={message.type === "audio" ? "recording" : "song"}
      />
    ),
    location: ({ message }) => (
      <LocationMessage
        imageUrl={message.content}
        time={message.time}
        latitude={message.latitude}
        longitude={message.longitude}
        comment={message.comment || ""}
        isSent={message.isSent}
        status={message.status || "sent"}
      />
    ),
    contact: ({ message }) => (
      <ContactMessage
        profileImageUrls={message.profileImageUrls || []}
        names={message.names || []}
        phoneNumbers={message.phoneNumbers || []}
        time={message.time}
        status={message.status || "sent"}
        isSent={message.isSent}
        message={message.content}
      />
    ),
    document: ({ message }) => (
      <DocumentMessage
        fileName={message.fileName || ""}
        fileSize={message.fileSize || ""}
        fileType={message.fileType || ""}
        fileUrl={message.fileUrl || ""}
        time={message.time}
        status={message.status || ""}
        isSent={message.isSent}
      />
    ),
    call: ({ message }) => (
      <CallMessage
        callType={message.callType || "missed"}
        callMode={message.callMode || "voice"}
        time={message.time}
        isSent={message.isSent}
        status={message.status || "failed"}
      />
    ),
  };

  // تجميع الرسائل حسب التاريخ
  const groupedMessages = MessageData.reduce<Record<string, MessageType[]>>(
    (acc, message) => {
      if (!acc[message.date]) {
        acc[message.date] = [];
      }
      acc[message.date].push(message);
      return acc;
    },
    {}
  );

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="relative w-full h-[4rem] sticky top-0 z-50">
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

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4">
        {Object.entries(groupedMessages).map(([date, messages]) => (
          <div key={date} className="mb-6">
            {/* عرض التاريخ */}
            <div className="text-center text-gray-500 text-sm mb-4">
            <TimeDisplay 
  time={date} 
  className="font-semibold bg-white p-2 rounded-full "
/>
            </div>

            {/* عرض الرسائل */}
            {messages.map((message) => {
              const Component = messageComponents[message.type];
              return Component ? (
                <div key={message.id}>
                  <Component message={message} onReply={(msg) => setReplyTo(msg)} />
                </div>
              ) : null;
            })}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="sticky bottom-0 bg-white p-2 shadow-md z-50">
        <MessageInput
          placeholder="Type a message..."
          onSend={handleSend}
          replyToMessage={replyTo}
          onCancelReply={() => setReplyTo(null)}
        />
      </div>
    </div>
  );
};

export default AllMessages;
