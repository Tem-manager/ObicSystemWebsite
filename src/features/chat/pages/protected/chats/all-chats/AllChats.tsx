import ChatTab from "../../../../Components/Partials/ChatTab";
// import BaseMessage from "../../../../Components/Ui/BaseMessage";
import Conversation from "./conversation/Conversation";
import AllMessages from "./messages/AllMessages";


function AllChats() {
  return (
    <>
      <ChatTab />
      <div className="flex-grow w-full h-screen flex overflow-hidden">
        <div className="flex-grow w-full flex">
          <Conversation pageTitle="All Chat" />
          <div className="flex flex-col w-[65%] h-full">
            {/* <BaseMessage/> */}
            <AllMessages/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllChats;

