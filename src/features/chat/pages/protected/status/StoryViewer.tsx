import React, { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ListTitle from "../../../Components/Ui/ListTitle";
import CircleImage from "../../../Components/Ui/CircleImage";


interface Story {
  type: string;
  content: string;
}

interface StoryViewerProps {
  stories: Story[];
  footer: React.ReactNode
}

const StoryViewer: React.FC<StoryViewerProps> = ({  stories,footer }) => {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextStory();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const nextStory = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, stories]);

  const prevStory = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const renderStoryContent = () => {
    const story = stories[currentIndex];
    if (story.type === "image") {
      return (
        <img
          src={story.content}
          alt="Story"
          className="w-full h-full object-cover"
        />
      );
    }
    if (story.type === "video") {
      return (
        <video
          src={story.content}
          className="w-full h-full object-cover"
          autoPlay
          muted
          controls
        />
      );
    }
    if (story.type === "text") {
      return (
        <div className="w-full h-full flex items-center justify-center  bg-black text-white text-2xl p-4">
          {story.content}
        </div>
      );
    }
  };

  return (
    <>
    
    <div className=" h-full w-full flex items-center justify-center relative">

      {renderStoryContent()}
        


        <button
          onClick={prevStory}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextStory}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
        >
          <FaArrowRight />
        </button>

        <div className="absolute top-4 left-0 w-full  ">
          

          <div className="flex items-center justify-center space-x-2">
            {stories.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-20 bg-white transition-all duration-500 ${index <= currentIndex ? "opacity-100" : "opacity-50"}`}
              ></div>
            ))}
          </div>
          <div className="ml-11 mt-10">
          <ListTitle
              Title="username"
              subTitle="06:24"
              imageComponent={<CircleImage size={10} 
              imageUrl={"https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} />} />
          </div>
          
        </div>
        {footer}
      </div></>
  );
};


export default StoryViewer;
