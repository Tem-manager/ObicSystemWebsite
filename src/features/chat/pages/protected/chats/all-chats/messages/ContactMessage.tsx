import React, { useState } from "react";
import { Button, Popover, List, ListItem, ListItemText } from "@mui/material"; // إضافة مكونات للقائمة
import CircleImage from "../../../../../Components/Ui/CircleImage";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus";

interface ContactMessageProps {
  profileImageUrls: string[]; // قائمة روابط صور جهات الاتصال (إذا كانت أكثر من جهة اتصال)
  names: string[]; // قائمة أسماء جهات الاتصال
  phoneNumbers: string[]; // قائمة أرقام هواتف جهات الاتصال
  time: string; // وقت الرسالة
  status: "sending" | "sent" | "read" | "failed"; // حالة الرسالة
  isSent: boolean; // هل الرسالة مرسلة؟
  message: string; // محتوى الرسالة
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
  // عدد جهات الاتصال المرسلة
  const numberOfContacts = profileImageUrls.length;

  // حالة لعرض قائمة جهات الاتصال
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // دالة لفتح وإغلاق قائمة "عرض الكل"
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg shadow-lg ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* عرض جهة الاتصال الأولى */}
        <div className="flex items-center space-x-3 mb-2">
          <CircleImage
            imageUrl={profileImageUrls[0] || "https://www.example.com/default-avatar.png"} // صورة جهة الاتصال الأولى أو صورة افتراضية
            size={12}
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{names[0]}</span>
            <span className="text-xs text-gray-500">{phoneNumbers[0]}</span> {/* عرض رقم الهاتف */}
          </div>

          {/* عرض عدد جهات الاتصال المرسلة */}
          {numberOfContacts > 1 && (
            <span
              className="text-xs text-gray-500 cursor-pointer"
              onClick={handlePopoverOpen}
            >
              +{numberOfContacts - 1}
            </span>
          )}
        </div>

        {/* محتوى الرسالة */}
        <p className="text-sm">{message}</p>

        {/* الوقت وحالة الرسالة */}
        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <TimeDisplay time={time} />
          {isSent && <MessageStatus status={status} />}
        </div>

        {/* الأزرار أسفل الرسالة */}
        <div className="flex justify-between mt-3">
          {numberOfContacts > 1 ? (
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handlePopoverOpen}
            >
              عرض الكل
            </Button>
          ) : (
            <Button variant="contained" color="primary" size="small">
              مراسلة
            </Button>
          )}
          <Button variant="outlined" color="secondary" size="small">
            إضافة جهة الاتصال
          </Button>
        </div>
      </div>

      {/* قائمة جهات الاتصال عند التمرير على "عرض الكل" */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          {profileImageUrls.slice(1).map((url, index) => (
            <ListItem key={index} className="flex items-center space-x-3">
              <CircleImage imageUrl={url} size={8} />
              <div className="flex flex-col">
                <ListItemText primary={names[index + 1]} />
                <span className="text-xs text-gray-500">{phoneNumbers[index + 1]}</span> {/* إضافة رقم الهاتف */}
              </div>
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default ContactMessage;
