import React, { useState, useEffect, useCallback, ReactNode } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


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
        <div className="w-full h-full flex items-center justify-center bg-black text-white text-2xl p-4">
          {story.content}
        </div>
      );
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center relative">
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

      <div className="absolute top-4 left-0 w-full flex items-center justify-center space-x-2">
        {stories.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-20 bg-white transition-all duration-500 ${
              index <= currentIndex ? "opacity-100" : "opacity-50"
            }`}
          ></div>
        ))}
      </div>
    {footer}
    </div>
  );
};


export default StoryViewer;
