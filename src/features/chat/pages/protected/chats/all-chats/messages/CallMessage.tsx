import React, { useState } from "react";
import { Phone } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import StatusBadge from "@mui/material/Badge";
import TimeDisplay from "../../../../../../../Components/ui/TimeDisplay";
import MessageStatus from "../../../../../Components/Ui/MessageStatus";

interface CallMessageProps {
  callType: "incoming" | "outgoing" | "missed"; // Call type
  time: string; // Message time
  isSent: boolean; // Is the message sent?
  status: "sending" | "sent" | "read" | "failed"; // Message status
}

const CallMessage: React.FC<CallMessageProps> = ({
  callType,
  time,
  isSent,
  status,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const callTypeText =
    callType === "incoming"
      ? "Incoming Call"
      : callType === "outgoing"
      ? "Outgoing Call"
      : "Missed Call";

  const callTypeColor =
    callType === "incoming"
      ? "bg-green-500"
      : callType === "outgoing"
      ? "bg-blue-500"
      : "bg-red-500";

  const handleMenuOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRetryCall = () => {
    alert("Retrying the call...");
    setAnchorEl(null);
  };

  const handleViewDetails = () => {
    alert("Viewing call details...");
    setAnchorEl(null);
  };

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs md:max-w-sm px-4 py-3 rounded-lg shadow-lg ${
          isSent
            ? "bg-[#192745] text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {/* Call Content */}
        <div className="flex items-center space-x-3 mb-2">
          {/* Call Icon */}
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white cursor-pointer ${callTypeColor}`}
            onClick={handleMenuOpen}
          >
            <Phone fontSize="medium" />
          </div>

          {/* Call Type Text */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{callTypeText}</span>
          </div>
        </div>

        {/* Menu for Call Actions */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleRetryCall}>Retry Call</MenuItem>
          <MenuItem onClick={handleViewDetails}>View Details</MenuItem>
        </Menu>

        {/* Time and Message Status */}
        <div
          className={`flex items-center justify-between mt-2 text-xs ${
            isSent ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {/* Time Display */}
          <TimeDisplay time={time} />

          {/* Message Status */}
          {isSent && <MessageStatus status={status} />}
        </div>

        {/* Call Status Button */}
        <div className="mt-3">
          <StatusBadge
            badgeContent={
              callType === "incoming"
                ? "Incoming"
                : callType === "outgoing"
                ? "Outgoing"
                : "Missed"
            }
            color={
              callType === "incoming"
                ? "success"
                : callType === "outgoing"
                ? "primary"
                : "error"
            }
          >
            <button
              className={`py-1 px-3 rounded-full text-white ${
                callType === "incoming"
                  ? "bg-green-500"
                  : callType === "outgoing"
                  ? "bg-blue-500"
                  : "bg-red-500"
              }`}
            >
              {callTypeText}
            </button>
          </StatusBadge>
        </div>
      </div>
    </div>
  );
};

export default CallMessage;
