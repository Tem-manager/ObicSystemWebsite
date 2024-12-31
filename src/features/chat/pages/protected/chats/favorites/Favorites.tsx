  import ChatTab from "../../../../Components/Partials/ChatTab";
import Conversation from "../all-chats/conversation/Conversation";
import AllMessages from "../all-chats/messages/AllMessages";
interface FavoritesProps {
  pageTitle: string;
}

const Favorites: React.FC<FavoritesProps> = () => {
  
    return (
      <>          
 <div className="flex-grow-0 fixed basis-1/2 z-10">
        <ChatTab />
      </div>
      <div className="flex-grow ml-[50px] p-4 ">
      <div className="flex-grow w-full flex">
        <Conversation pageTitle={'Favorites'}/>
        <div className="flex flex-col w-[65%] bg-gray-200 p-4 m-2 relative">
      <AllMessages/>
        </div>
      </div>
      </div>
   
        </>

      );
  }
  
  
  export default Favorites;
  