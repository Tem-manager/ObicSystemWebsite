import React from "react";
import { Phone, Videocam, CallReceived, CallMade, CallMissed } from "@mui/icons-material";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
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
      <CallReceived fontSize="small" className={isSent ? "text-white" : "text-blue-500"} />
    ) : callType === "outgoing" ? (
      <CallMade fontSize="small" className={isSent ? "text-white" : "text-blue-500"} />
    ) : (
      <CallMissed fontSize="small" className="text-red-500" />
    );

  const callModeIcon =
    callMode === "voice" ? (
      <Phone fontSize="medium" className={isSent ? "text-white" : "text-[#192745]"} />
    ) : (
      <Videocam fontSize="medium" className={isSent ? "text-white" : "text-[#192745]"} />
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
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`w-full max-w-xs px-3 py-2 rounded-lg shadow-md ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* Call Content */}
        <div className="flex items-center space-x-2 mb-1">
          {/* Dropdown for Call Actions */}
          <DropdownMenu
            buttonContent={callModeIcon} // Pass the call mode icon as button content
            options={options} // Pass options for the dropdown
          />

          {/* Call Type Text */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold truncate">{callTypeText}</span>
            {/* Duration or Call Back */}
            <TimeDisplay time={callInfo} />
          </div>
        </div>

        {/* Time and Message Status */}
        <div
          className={`flex items-center justify-end mt-1 text-xs ${
            isSent ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {/* Call Type Icon */}
          <div className="flex items-end space-x-2">
            <TimeDisplay time={time} />
            {callTypeIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceVideoCallMessage;
