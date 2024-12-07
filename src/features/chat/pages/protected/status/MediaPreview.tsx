import React, { useState, useEffect } from "react";
import EmojiPickerComponent from "../../../Components/Ui/EmojiPickerComponent";
import SendInput from "../../../Components/Ui/SendInput";
import StatusBadge from "../../../../../Components/ui/StatusBadge";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const MediaPreview: React.FC<{
  files: File[];
  onRemove: (index: number) => void;
  onAdd: (newFiles: File[]) => void;
  onSend: () => void; // New prop to handle sending media
}> = ({ files, onRemove, onAdd, onSend }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);

    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [files]);

  const handleSendMessage = () => {
    console.log("Message sent:", message);
    setMessage(""); // Clear message input
    onSend(); // Clear media files and close dialog
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative">
    
      

     
      <div className="w-full max-w-md h-2/3  items-center justify-center bg-black rounded-lg overflow-hidden">
        {files.length > 0 && (
          <button
            onClick={() => onRemove(currentIndex)}
            className="mt-5  "
          >
            <StatusBadge
              content={<IoIosClose />
              }
              color=" bg-red-500"
              textColor="text-white"
              textSize="text-xl"
              size={10}
            />
          </button>
        )}
         {/* Main Preview */}
        {files[currentIndex]?.type.startsWith("image/") ? (
          <img
            src={previewUrls[currentIndex]}
            alt="Preview"
            className="w-full h-full object-contain"
          />
        ) : (
          <video
            src={previewUrls[currentIndex]}
            controls
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className="w-full mt-2 flex space-x-2 overflow-x-auto items-center justify-center relative">
        {previewUrls.map((url, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-16 h-16 border ${
              currentIndex === index ? "border-blue-500" : "border-gray-500"
            } rounded-lg overflow-hidden cursor-pointer`}
          >
            {files[index]?.type.startsWith("image/") ? (
              <img src={url} alt="Thumbnail" className="w-full h-full object-cover" />
            ) : (
              <video src={url} className="w-full h-full object-cover" />
            )}
          </div>
        ))}

        {/* Add More Media */}
        <label htmlFor="add-media" className="w-16 h-16 flex items-center justify-center border border-dashed rounded-lg cursor-pointer">
          +
          <input
            id="add-media"
            type="file"
            multiple
            accept="image/*,video/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                onAdd(Array.from(e.target.files));
              }
            }}
          />
        </label>
      </div>

      {/* Caption Input and Send Button */}
      <div className="flex mt-4 w-full max-w-md p-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none">
        <EmojiPickerComponent
          onEmojiSelect={(emoji) => setMessage((prev) => prev + emoji)}
        />
        <SendInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Add a caption..."
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


export default MediaPreview;


