import ChatTab from "../../../../Components/Partials/ChatTab";
import Conversation from "./conversation/conversation";
import AllMessages from "./messages/AllMessages";


function AllChats() {


  return (
    <>
      <ChatTab />
      <div className="flex-grow w-full flex">
        <Conversation />
        <div className="flex flex-col w-[65%] bg-gray-200 p-4 m-2 relative">
     <AllMessages/>
        </div>
      </div>
    </>
  );
}

export default AllChats;
