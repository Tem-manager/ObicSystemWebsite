import React from "react";
import CircleImage from "../../../../../Components/Ui/CircleImage";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus";
import DropdownMenu from "../../../../../Components/Ui/DropdownMenu";
import Button from "../../../../../../../Components/ui/Buttoun";

interface ContactMessageProps {
  profileImageUrls: string[];
  names: string[];
  phoneNumbers: string[];
  time: string;
  status: "sending" | "sent" | "read" | "failed";
  isSent: boolean;
  message: string;
}

const ContactMessage: React.FC<ContactMessageProps> = ({
  profileImageUrls,
  names,
  phoneNumbers,
  time,
  status,
  isSent,
  message,
}) => {
  const numberOfContacts = profileImageUrls.length;

  const dropdownOptions = profileImageUrls.slice(1).map((url, index) => ({
    label: (
      <div className="flex items-center space-x-3">
        <CircleImage imageUrl={url} size={8} />
        <div className="flex flex-col">
          <span className="font-semibold">{names[index + 1]}</span>
          <span className="text-xs text-gray-500">{phoneNumbers[index + 1]}</span>
        </div>
      </div>
    ),
    onClick: () => alert(`تم اختيار ${names[index + 1]}`),
  }));

  const viewAllOptions = profileImageUrls.map((url, index) => ({
    label: (
      <div className="flex items-center space-x-3">
        <CircleImage imageUrl={url} size={8} />
        <div className="flex flex-col">
          <span className="font-semibold">{names[index]}</span>
          <span className="text-xs text-gray-500">{phoneNumbers[index]}</span>
        </div>
      </div>
    ),
    onClick: () => alert(`تم اختيار ${names[index]}`),
  }));

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`w-full max-w-lg px-3 py-2 rounded-lg shadow-lg ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* Header Section: Contact Information */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-3">
            <CircleImage
              imageUrl={profileImageUrls[0] || "https://www.example.com/default-avatar.png"}
              size={10}
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{names[0]}</span>
              <span className="text-xs text-gray-500">{phoneNumbers[0]}</span>
            </div>
          </div>
          {numberOfContacts > 1 && (
            <DropdownMenu
              buttonContent={<span className="text-xs text-gray-500 cursor-pointer">+{numberOfContacts - 1}</span>}
              options={dropdownOptions}
            />
          )}
        </div>

        {/* Message Content */}
        <div className="mb-2">
          <p className="text-xs leading-relaxed">{message}</p>
        </div>

        {/* Footer Section: Time and Status */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <TimeDisplay time={time} />
          {isSent && <MessageStatus status={status} />}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center">
          {numberOfContacts > 1 ? (
            <DropdownMenu
              buttonContent={
                <Button className="h-12 w-11/12 bg-primary text-white whitespace-nowrap">
                  عرض الكل
                </Button>
              }
              options={viewAllOptions}
            />
          ) : (
            <Button className="h-12 w-11/12" variant="secondary">
              مراسلة
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
