  import ChatTab from "../../../../Components/Partials/ChatTab";
import Conversation from "../all-chats/conversation/Conversation";
import AllMessages from "../all-chats/messages/AllMessages";
interface FavoritesProps {
  pageTitle: string;
}

function Favorites({ pageTitle }: FavoritesProps) {
  
    return (
      <>          
      <ChatTab />
      <div className="flex-grow w-full flex">
        <Conversation pageTitle={'Favorites'}/>
        <div className="flex flex-col w-[65%] bg-gray-200 p-4 m-2 relative">
      <AllMessages/>
        </div>
      </div>
   
        </>

      );
  }
  
  
  export default Favorites;
  