// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineFileImage, AiOutlineEdit } from "react-icons/ai";
// import Dialog from "../../../Components/Ui/Dialog";
// import StatusBadge from "../../../../../Components/ui/StatusBadge";
// import CircleImage from "../../../Components/Ui/CircleImage";
// import DropdownMenu from "../../../Components/Ui/DropdownMenu";
// import ListTitle from "../../../Components/Ui/ListTitle";
// import MediaPreview from "./MediaPreview";

// const StatusCard: React.FC = () => {
//   const navigate = useNavigate();
//   const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
//   const [dialogOpen, setDialogOpen] = useState(false);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (!event.target.files) return;
//     const files = Array.from(event.target.files);
//     setSelectedFiles(files);
//     setDialogOpen(true); // Open dialog to preview files
//   };

//   const handleRemoveFile = (index: number) => {
//     const updatedFiles = selectedFiles.filter((_, i) => i !== index);
//     setSelectedFiles(updatedFiles);
//   };

//   const handleAddText = () => {
//     navigate("/chat/statusText");
//   };

//   const closeDialog = () => {
//     setDialogOpen(false);
//     setSelectedFiles([]); // Clear files when dialog is closed
//   };

//   return (
//     <div className="mb-5 w-full max-w-sm mx-auto bg-gray-100 shadow-lg p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">Status</h2>
//         <div className="flex items-center space-x-4">
//           <DropdownMenu
//             buttonContent={
//               <StatusBadge
//                 content={
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-4 h-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 4v16m8-8H4"
//                     />
//                   </svg>
//                 }
//                 size={6}
//                 color="bg-gray-200"
//               />
//             }
//             options={[
//               {
//                 label: "Photos & Videos",
//                 icon: <AiOutlineFileImage />,
//                 onClick: () => document.getElementById("file-upload")?.click(),
//               },
//               {
//                 label: "Text",
//                 icon: <AiOutlineEdit />,
//                 onClick: handleAddText,
//               },
//             ]}
//           />
//           <StatusBadge
//             content={
//           <HiDotsVertical />
//             }
//           />
//         </div>
//       </div>
//       <ListTitle
//         Title="My status"
//         imageComponent={
//           <CircleImage
//             size={12}
//             imageUrl={
//               "https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//             }
//           />
//         }
//         subTitle="Click to add status update"
//         showIcon={true}
//         onClick={() => setDialogOpen(true)}
//       />

//       {/* Hidden File Input */}
//       <input
//         id="file-upload"
//         type="file"
//         accept="image/*,video/*"
//         multiple
//         className="hidden"
//         onChange={handleFileChange}
//       />

//       {/* Dialog for Media Preview */}
//       {dialogOpen && (
//         <Dialog onClose={closeDialog}>
//           <MediaPreview files={selectedFiles} onRemove={handleRemoveFile} />
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default StatusCard;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineFileImage, AiOutlineEdit } from "react-icons/ai";
import Dialog from "../../../Components/Ui/Dialog";
import StatusBadge from "../../../../../Components/ui/StatusBadge";
import CircleImage from "../../../Components/Ui/CircleImage";
import DropdownMenu from "../../../Components/Ui/DropdownMenu";
import ListTitle from "../../../Components/Ui/ListTitle";
import MediaPreview from "./MediaPreview";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";


const StatusCard: React.FC = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]); // Store uploaded files
  const [dialogOpen, setDialogOpen] = useState(false); // Control dialog visibility

  // Add new files to the existing list
  const addFiles = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // Remove a file by its index
  const handleRemove = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Clear all files
  const clearFiles = () => {
    setFiles([]); // Reset the media array
    setDialogOpen(false); // Close the dialog
  };

  // Handle file input changes
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      addFiles(Array.from(event.target.files)); // Convert FileList to an array and append
      setDialogOpen(true); // Open dialog for preview
    }
  };

  return (
    <div className="mb-5 w-full max-w-sm mx-auto bg-gray-100 shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Status</h2>
        <div className="flex items-center space-x-4">
          <DropdownMenu
            buttonContent={
              <StatusBadge
                content={
                  <FaPlus />
                }
                size={6}
                
              />
            }
            options={[
              {
                label: "Photos & Videos",
                icon: <AiOutlineFileImage />,
                onClick: () => document.getElementById("file-upload")?.click(),
              },
              {
                label: "Text",
                icon: <AiOutlineEdit />,
                onClick: () => navigate("/chat/statusText"),
              },
            ]}
          />

         <StatusBadge
            content={
              <HiDotsVertical />
                }
            textSize="text-l"
          />
        </div>
      </div>

      <ListTitle
        Title="My status"
        imageComponent={
          <CircleImage
            size={12}
            imageUrl={
              "https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
          />
        }
        subTitle="Click to add status update"
        showIcon={true}
        onClick={() => setDialogOpen(true)}
      />

      {/* Hidden File Input */}
      <input
        id="file-upload"
        type="file"
        accept="image/*,video/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Dialog for Media Preview */}
      {dialogOpen && (
        <Dialog onClose={clearFiles}>
          <MediaPreview
            files={files}
            onRemove={handleRemove}
            onAdd={addFiles}
            onSend={clearFiles} 
          />
        </Dialog>
      )}
    </div>
  );
};


export default StatusCard;



