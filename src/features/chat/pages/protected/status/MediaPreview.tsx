// import React, { useState } from "react";
// import SendInput from "../../../Components/Ui/SendInput";
// import EmojiPickerComponent from "../../../Components/Ui/EmojiPickerComponent";
// import StatusBadge from "../../../../../Components/ui/StatusBadge";
// import { RiSendPlane2Fill } from "react-icons/ri";

// const MediaPreview: React.FC<{ files: File[]; onRemove: (index: number) => void }> = ({ files, onRemove }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const previewUrls = files.map((file) => URL.createObjectURL(file));
//   const [message, setMessage] = React.useState("");
  
//   const handleSendMessage = () => {
//     console.log("Message sent:", message);
//     setMessage("");
//   };
//   const handleThumbnailClick = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="h-screen w-full flex flex-col items-center justify-center relative">
//       {/* Close Button */}
//       <button
//         onClick={() => onRemove(currentIndex)}
//         className="absolute top-20 right-[555px] bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
//       >
//         &times;
//       </button>

//       {/* Main Preview Area */}
//       <div className="w-full max-w-md h-2/3 flex items-center justify-center bg-black rounded-lg overflow-hidden">
//         {files[currentIndex].type.startsWith("image/") ? (
//           <img
//             src={previewUrls[currentIndex]}
//             alt="Preview"
//             className="w-full h-full object-contain"
//           />
//         ) : (
//           <video
//             src={previewUrls[currentIndex]}
//             controls
//             className="w-full h-full object-contain"
//           />
//         )}
//       </div>

//       {/* Caption Input */}
//       {/* <input
//         type="text"
//         placeholder="Add a caption"
//         className="mt-4 w-full max-w-md p-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none"
//       /> */}
        

//       {/* Thumbnail Navigation */}
//       <div className="w-full mt-2 flex space-x-2 overflow-x-auto items-center justify-center relative">
//         {previewUrls.map((url, index) => (
//           <div
//             key={index}
//             onClick={() => handleThumbnailClick(index)}
//             className={`w-16 h-16 flex-shrink-0 border ${
//               currentIndex === index ? "border-blue-500" : "border-gray-500"
//             } rounded-lg overflow-hidden cursor-pointer`}
//           >
//             {files[index].type.startsWith("image/") ? (
//               <img src={url} alt="Thumbnail" className="w-full h-full object-cover" />
//             ) : (
//               <video src={url} className="w-full h-full object-cover" />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className=" flex mt-4 w-full max-w-md p-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none">
//           <EmojiPickerComponent onEmojiSelect={(emoji) => setMessage((prev) => prev + emoji)} />
//           <SendInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add a caption..." />
//           <button onClick={handleSendMessage}>
//             <StatusBadge content={<RiSendPlane2Fill />} color="bg-green-500" textColor="text-white" textSize="text-2xl" size={12} />
//           </button>
//         </div>
//     </div>
//   );
// };

// export default MediaPreview;

import React, { useState, useEffect } from "react";
import EmojiPickerComponent from "../../../Components/Ui/EmojiPickerComponent";
import SendInput from "../../../Components/Ui/SendInput";
import StatusBadge from "../../../../../Components/ui/StatusBadge";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

// const MediaPreview: React.FC<{
//   files: File[];
//   onRemove: (index: number) => void;
//   onAdd: (newFiles: File[]) => void;
// }> = ({ files, onRemove, onAdd }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [previewUrls, setPreviewUrls] = useState<string[]>([]);
//   const [message, setMessage] = React.useState("");

//   const handleSendMessage = () => {
//     console.log("Message sent:", message);
//     setMessage("");
//   };

//   // Update preview URLs when files change
//   useEffect(() => {
//     const urls = files.map((file) => URL.createObjectURL(file));
//     setPreviewUrls(urls);

//     // Cleanup: Revoke object URLs
//     return () => urls.forEach((url) => URL.revokeObjectURL(url));
//   }, [files]);

//   const handleThumbnailClick = (index: number) => {
//     setCurrentIndex(index);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files);
//       onAdd(newFiles); // Add new files via parent handler
//     }
//   };

//   return (
//     <div className="h-screen w-full flex flex-col items-center justify-center relative">
//       {/* Close Button */}
//       {files.length > 0 && (
//         <button
//           onClick={() => onRemove(currentIndex)}
//           className="absolute top-20 right-[555px] bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
//         >
//           &times;
//         </button>
//       )}

//       {/* Main Preview Area */}
//       <div className="w-full max-w-md h-2/3 flex items-center justify-center bg-black rounded-lg overflow-hidden">
//         {files[currentIndex]?.type.startsWith("image/") ? (
//           <img
//             src={previewUrls[currentIndex]}
//             alt="Preview"
//             className="w-full h-full object-contain"
//           />
//         ) : files[currentIndex] ? (
//           <video
//             src={previewUrls[currentIndex]}
//             controls
//             className="w-full h-full object-contain"
//           />
//         ) : (
//           <p className="text-white">No media to preview</p>
//         )}
//       </div>

//       {/* Thumbnail Navigation */}
//       <div className="w-full mt-2 flex space-x-2 overflow-x-auto items-center justify-center relative">
//         {previewUrls.map((url, index) => (
//           <div
//             key={index}
//             onClick={() => handleThumbnailClick(index)}
//             className={`w-16 h-16 flex-shrink-0 border ${
//               currentIndex === index ? "border-blue-500" : "border-gray-500"
//             } rounded-lg overflow-hidden cursor-pointer`}
//           >
//             {files[index]?.type.startsWith("image/") ? (
//               <img src={url} alt="Thumbnail" className="w-full h-full object-cover" />
//             ) : (
//               <video src={url} className="w-full h-full object-cover" />
//             )}
//           </div>
//         ))}

//         {/* Add Media Button */}
//         <div className="w-16 h-16 flex-shrink-0 border border-dashed border-gray-500 rounded-lg flex items-center justify-center cursor-pointer">
//           <label htmlFor="add-media" className="cursor-pointer text-gray-500">
//             +
//           </label>
//           <input
//             id="add-media"
//             type="file"
//             multiple
//             accept="image/*,video/*"
//             className="hidden"
//             onChange={handleFileChange}
//           />
//         </div>
//       </div>

//       {/* Caption and Send Section */}
//       <div className="flex mt-4 w-full max-w-md p-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none">
//         <EmojiPickerComponent onEmojiSelect={(emoji) => setMessage((prev) => prev + emoji)} />
//         <SendInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add a caption..." />
//         <button onClick={handleSendMessage}>
//           <StatusBadge
//             content={<RiSendPlane2Fill />}
//             color="bg-green-500"
//             textColor="text-white"
//             textSize="text-2xl"
//             size={12}
//           />
//         </button>
//       </div>
//     </div>
//   );
// };
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
      {/* Close Button */}
      {files.length > 0 && (
        <button
          onClick={() => onRemove(currentIndex)}
          className="absolute bottom-15 right-[500px]  "
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
      <div className="w-full max-w-md h-2/3 flex items-center justify-center bg-black rounded-lg overflow-hidden">
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


