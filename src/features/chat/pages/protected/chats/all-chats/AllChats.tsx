import ChatTab from "../../../../Components/Partials/ChatTab";
import Conversation from "./conversation/Conversation";
import AllMessages from "./messages/AllMessages";


function AllChats() {


  return (
    <>
      {/* <ChatTab /> */}
      <div className="flex-grow w-full flex">
        <Conversation pageTitle="All Chat" />
        <div className="flex flex-col w-[65%] relative">
      <AllMessages/>
        </div>
      </div>
    </>
  );
}

export default AllChats;
