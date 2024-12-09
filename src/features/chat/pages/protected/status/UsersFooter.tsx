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
    <div className="flex mt-4 w-full max-w-md p-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none">
      <EmojiPickerComponent position="absolute bottom-40 left-15" onEmojiSelect={(emoji) => setMessage((prev) => prev + emoji)} />
      <SendInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type reply..." />
      <button onClick={handleSendMessage}>
        <StatusBadge content={<RiSendPlane2Fill />} color="bg-green-500" textColor="text-white" textSize="text-2xl" size={12} />
      </button>
    </div>
  );
};
export default UsersFooter;


