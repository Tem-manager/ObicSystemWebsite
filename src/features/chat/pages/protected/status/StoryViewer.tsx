import React, { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EmojiPickerComponent from "../../../Components/Ui/EmojiPickerComponent";
import StatusBadge from "../../../../../Components/ui/StatusBadge";
import { RiSendPlane2Fill } from "react-icons/ri";
import SendInput from "../../../Components/Ui/SendInput";

interface Story {
  type: string;
  content: string;
}

interface StoryViewerProps {
  stories: Story[];
}

const StoryViewer: React.FC<StoryViewerProps> = ({ stories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");

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

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setMessage((prevMessage) => prevMessage + emoji);
  };

  return (
    <div className="h-full w-full flex items-center justify-center relative">
      {/* Story Content */}
      {renderStoryContent()}

      {/* Navigation Buttons */}
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

      {/* Progress Indicators */}
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

      {/* Bottom Input and Emoji Picker */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 flex items-center space-x-2">
        <EmojiPickerComponent onEmojiSelect={handleEmojiSelect} />
        <SendInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type reply..."
        />
        <button onClick={handleSendMessage}>
          <StatusBadge
            content={<RiSendPlane2Fill />}
            color="bg-green-500"
            textColor="text-white"
            textSize="text-2xl"
            size={12}
          />
        </button>
      </div>
    </div>
  );
};

export default StoryViewer;
