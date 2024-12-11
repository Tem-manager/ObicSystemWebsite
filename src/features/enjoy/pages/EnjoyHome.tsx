import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";
import { useState } from "react";
import { ExpandableText } from "../../chat/Components/Ui/ExpandableText";
import { LikeButton } from "../../chat/Components/Ui/LikeButton";
const EnjoyHome = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center  bg-gray-900">
      <div className="w-full max-w-md h-2/3 relative bg-black rounded-lg overflow-hidden">
       
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

    
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 space-y-4">
          <div className="space-y-1">
          <LikeButton isLiked={isLiked} onToggle={toggleLike} count="15.2k" />
           
          </div>
          <div className="space-y-1">
            <div className="text-3xl drop-shadow-md"><FaRegCommentAlt /></div>
            <div className="text-sm drop-shadow-md">12k</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl drop-shadow-md"><IoShareSocialOutline /></div>
            <div className="text-sm drop-shadow-md">1.2k</div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4">
          <div className="flex  "> 
          <div className="font-bold text-lg drop-shadow-md m-2">masjfd</div>
          <button
            onClick={toggleFollow}
            className={`mt-2 px-4 py-2 text-sm font-semibold rounded m-2
              "border-solid border-2 border-black text-gray-900" 
            `}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
          </div>
          
          <ExpandableText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            expandedText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada sit amet metus eget aliquam. Donec vitae urna euismod magna volutpat feugiat."
            isExpanded={isExpanded}
            onToggle={toggleExpand}
          />

        
          
        </div>
      </div>
    </div>
  );
};

export default EnjoyHome;
