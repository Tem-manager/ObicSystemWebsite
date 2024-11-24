import React from 'react';

const MessageItem = ({ message }) => {
  return (
    <div className="flex items-start p-3 border-b border-gray-200">
      <div className="mr-3">
        <img
          src={message.senderAvatar}
          alt={message.senderName}
          className="w-8 h-8 rounded-full"
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-900">{message.senderName}</span>
          <span className="text-xs text-gray-500">{message.time}</span>
        </div>
        <p className="text-sm text-gray-700">{message.text}</p>
      </div>
    </div>
  );
};

export default MessageItem;
