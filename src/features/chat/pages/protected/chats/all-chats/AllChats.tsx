import ChatTab from "../../../../Components/Partials/ChatTab";
// import BaseMessage from "../../../../Components/Ui/BaseMessage";
import Conversation from "./conversation/Conversation";
import AllMessages from "./messages/AllMessages";


function AllChats() {
  return (
    <>
      <div className="flex-grow-0 fixed basis-1/2 z-10">
        <ChatTab />
      </div>
      <div className="flex-grow ml-[50px] p-4 ">

      <div className="flex-grow w-full h-screen flex overflow-hidden">
        <div className="flex-grow w-full flex">
          <Conversation pageTitle="All Chat" />
          <div className="flex flex-col w-[65%] h-full">
            {/* <BaseMessage/> */}
            <AllMessages/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AllChats;

