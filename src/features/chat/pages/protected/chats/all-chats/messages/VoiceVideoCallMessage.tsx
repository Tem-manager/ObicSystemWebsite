// import React, { useState } from "react";
// import { Menu, MenuItem } from "@mui/material";
// import { Phone, Videocam, CallReceived, CallMade, CallMissed } from "@mui/icons-material";
// import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
// import StatusBadge from "../../../../../../../Components/ui/StatusBadge";

// interface VoiceVideoCallMessageProps {
//   callType: "incoming" | "outgoing" | "missed"; // Call type (incoming, outgoing, missed)
//   callMode: "voice" | "video"; // Call mode (audio or video)
//   time: string; // Message time
//   isSent: boolean; // Is the message sent?
//   status: "sending" | "sent" | "read" | "failed"; // Message status
//   duration?: string; // Call duration (optional, for incoming/outgoing calls)
// }

// const VoiceVideoCallMessage: React.FC<VoiceVideoCallMessageProps> = ({
//   callType,
//   callMode,
//   time,
//   isSent,
//   duration,
// }) => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const callTypeText =
//     callType === "incoming"
//       ? `${callMode === "voice" ? "Incoming Voice Call" : "Incoming Video Call"}`
//       : callType === "outgoing"
//       ? `${callMode === "voice" ? "Outgoing Voice Call" : "Outgoing Video Call"}`
//       : "Missed Call";

//   const callTypeColor =
//     callType === "incoming"
//       ? "bg-green-500"
//       : callType === "outgoing"
//       ? "bg-blue-500"
//       : "bg-red-500";

//   const callTypeIcon =
//     callType === "incoming" ? (
//       <CallReceived fontSize="small" className="text-green-500" />
//     ) : callType === "outgoing" ? (
//       <CallMade fontSize="small" className="text-blue-500" />
//     ) : (
//       <CallMissed fontSize="small" className="text-red-500" />
//     );


//     <StatusBadge
//     content={<Phone fontSize="medium" />} // إضافة أيقونة الاتصال الصوتي أو الفيديو هنا
//     size={6}
//     color="transparent"
//     textColor={isSent ? "text-white" : "text-gray-700"}
//   />
//     const callModeIcon =
//     callMode === "voice" ? (
      
//     <StatusBadge
//     content={<Phone fontSize="medium" />} // إضافة أيقونة الاتصال الصوتي أو الفيديو هنا
//     size={6}
//     color="transparent"
//     textColor={isSent ? "text-white" : "text-gray-700"}
//   />
//     ) : (
      
//     <StatusBadge
//     content={      <Videocam fontSize="medium" /> // أيقونة الفيديو
//     } // إضافة أيقونة الاتصال الصوتي أو الفيديو هنا
//     size={6}
//     color="transparent"
//     textColor={isSent ? "text-white" : "text-gray-700"}
//   />
//     );

//   const handleMenuOpen = (event: React.MouseEvent<HTMLDivElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const callInfo =
//     callType === "missed"
//       ? "Call Back"
//       : callType === "incoming" || callType === "outgoing"
//       ? duration || "00:00"
//       : "";

//   return (
//     <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
//       <div
//         className={`max-w-xs md:max-w-sm px-4 py-3 rounded-lg shadow-lg ${
//           isSent
//             ? "bg-[#192745] text-white rounded-tr-none"
//             : "bg-white text-gray-800 rounded-tl-none"
//         }`}
//       >
//         {/* Call Content */}
//         <div className="flex items-center space-x-3 mb-2">
//           {/* Call Icon */}
//           <div
//             className={`flex items-center justify-center w-12 h-12 rounded-full text-white cursor-pointer ${callTypeColor}`}
//             onClick={handleMenuOpen}
//           >
//             {callModeIcon}
//           </div>

//           {/* Call Type Text */}
//           <div className="flex flex-col">
//             <span className="text-sm font-semibold">{callTypeText}</span>
//             {/* Duration or Call Back */}
//             <TimeDisplay time={callInfo} />
//           </div>
//         </div>

//         {/* Menu for Call Actions */}
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleMenuClose}
//         >
//           <MenuItem onClick={() => alert("Retrying the call...")}>
//             Retry Call
//           </MenuItem>
//           <MenuItem onClick={() => alert("Viewing call details...")}>
//             View Details
//           </MenuItem>
//         </Menu>

//         {/* Time and Message Status */}
//         <div
//           className={`flex items-center justify-end mt-2 text-xs ${
//             isSent ? "text-gray-300" : "text-gray-500"
//           }`}
//         >
//           {/* Call Type Icon with StatusBadge */}
//           <div className="flex items-end space-x-2">
//             <TimeDisplay time={time} />
//             <StatusBadge
//               content={callTypeIcon}
//               size={6}
//               color="transparent"
//               textColor={isSent ? "text-white" : "text-gray-700"}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VoiceVideoCallMessage;

import React from "react";
import { Phone, Videocam, CallReceived, CallMade, CallMissed } from "@mui/icons-material";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import StatusBadge from "../../../../../../../Components/ui/StatusBadge";
import DropdownMenu from "../../../../../Components/Ui/DropdownMenu"; // Import the DropdownMenu

interface VoiceVideoCallMessageProps {
  callType: "incoming" | "outgoing" | "missed"; // Call type (incoming, outgoing, missed)
  callMode: "voice" | "video"; // Call mode (audio or video)
  time: string; // Message time
  isSent: boolean; // Is the message sent?
  status: "sending" | "sent" | "read" | "failed"; // Message status
  duration?: string; // Call duration (optional, for incoming/outgoing calls)
}

const VoiceVideoCallMessage: React.FC<VoiceVideoCallMessageProps> = ({
  callType,
  callMode,
  time,
  isSent,
  duration,
}) => {
  const callTypeText =
    callType === "incoming"
      ? `${callMode === "voice" ? "Incoming Voice Call" : "Incoming Video Call"}`
      : callType === "outgoing"
      ? `${callMode === "voice" ? "Outgoing Voice Call" : "Outgoing Video Call"}`
      : "Missed Call";

  const callTypeIcon =
    callType === "incoming" ? (
      <CallReceived fontSize="small" className="text-green-500" />
    ) : callType === "outgoing" ? (
      <CallMade fontSize="small" className="text-blue-500" />
    ) : (
      <CallMissed fontSize="small" className="text-red-500" />
    );

  const callModeIcon =
    callMode === "voice" ? (
      <StatusBadge
        content={<Phone fontSize="medium" />} // Icon for voice call
        size={6}
        textColor={isSent ? "text-[#192745]" : "text-gray-700"}
      />
    ) : (
      <StatusBadge
        content={<Videocam fontSize="medium" />} // Icon for video call
        size={6}
        textColor={isSent ? "text-[#192745]" : "text-gray-700"}
      />
    );

  const callInfo =
    callType === "missed"
      ? "Call Back"
      : callType === "incoming" || callType === "outgoing"
      ? duration || "00:00"
      : "";

  const options = [
    {
      label: "Retry Call",
      onClick: () => alert("Retrying the call..."),
    },
    {
      label: "View Details",
      onClick: () => alert("Viewing call details..."),
    },
  ];

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`w-full max-w-md px-4 py-3 rounded-lg shadow-lg ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* Call Content */}
        <div className="flex items-center space-x-3 mb-2">
          {/* Dropdown for Call Actions */}
          <DropdownMenu
            buttonContent={callModeIcon} // Pass the call mode icon as button content
            options={options} // Pass options for the dropdown
          />

          {/* Call Type Text */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{callTypeText}</span>
            {/* Duration or Call Back */}
            <TimeDisplay time={callInfo} />
          </div>
        </div>

        {/* Time and Message Status */}
        <div
          className={`flex items-center justify-end mt-2 text-xs ${
            isSent ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {/* Call Type Icon with StatusBadge */}
          <div className="flex items-end space-x-2">
            <TimeDisplay time={time} />
            <StatusBadge
              content={callTypeIcon}
              size={6}
              color="transparent"
              textColor={isSent ? "text-white" : "text-gray-700"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceVideoCallMessage;

