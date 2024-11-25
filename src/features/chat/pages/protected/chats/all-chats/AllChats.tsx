import ChatTab from "../../../../Components/Partials/ChatTab";
import Header from "../../../../Components/Partials/Header";
import CircleImage from "../../../../Components/Ui/CircleImage";
import MessageItem from "../messages/MessageItem";
import ChatList from "./ChatList";
import { Call, VideoCall, Videocam } from '@mui/icons-material';

function AllChats() {  


 const messages = [
  { senderName: "You", text: "Hello!", time: "10:30 AM", type: "sent" },
  { senderName: "John", text: "Hi there!", time: "10:31 AM", type: "received" },
  { senderName: "You", text: "How are you?", time: "10:32 AM", type: "sent" },
  { senderName: "John", text: "I'm good, thanks!", time: "10:33 AM", type: "received" },
];




  return (
    <>
        <ChatTab />
      <div className="flex-grow ml-[10px]  w-full  flex  ">
      <ChatList/>
      <div className="w-[65%] bg-gray-200 p-4 m-2 ">
      <Header
      // الجهة اليسرى: صورة دائرية مع نص بجانبها
      leftContent={
        <>
              <div className="flex items-center space-x-3">
  <CircleImage 
    imageUrl="https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
   className ="w-12 h-12"
    size={3} // Adjust size as needed
  />
  <span className="text-lg font-semibold text-gray-800">Username</span>
</div>

        </>

      }
      // الجهة اليمنى: أيقونات الفيديو والاتصال
      rightContent={
        <div className="flex items-center space-x-4 text-gray-800">
     <button type="button" className="p-2">
      <Videocam  />
    </button>
          <button type="button">
            <Call />
          </button>
        </div>
      }
      className="bg-white shadow-md dark:bg-gray-800 fixed  w-full z-50"

    />
     {/* <div className="flex flex-col p-4 max-w-md mx-auto bg-red-100 rounded-lg"> */}
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    {/* </div> */}
      </div>
      </div>
      </>
  );
}
export default AllChats;
