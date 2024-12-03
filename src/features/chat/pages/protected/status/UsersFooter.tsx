import React from "react";
import EmojiPickerComponent from "../../../Components/Ui/EmojiPickerComponent";
import StatusBadge from "../../../../../Components/ui/StatusBadge";
import { RiSendPlane2Fill } from "react-icons/ri";
import SendInput from "../../../Components/Ui/SendInput";


 const UsersFooter :React.FC = () =>{
  const [message, setMessage] = React.useState("");
  const handleSendMessage = () => {
    console.log("Message sent:", message);
    setMessage("");
  };
  return (
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 flex items-center space-x-2">
      <EmojiPickerComponent onEmojiSelect={(emoji) => setMessage((prev) => prev + emoji)} />
      <SendInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type reply..." />
      <button onClick={handleSendMessage}>
        <StatusBadge content={<RiSendPlane2Fill />} color="bg-green-500" textColor="text-white" textSize="text-2xl" size={12} />
      </button>
    </div>
  );
};
export default UsersFooter;


