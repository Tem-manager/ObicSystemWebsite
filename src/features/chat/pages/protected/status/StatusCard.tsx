
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineFileImage, AiOutlineEdit } from "react-icons/ai";
import Dialog from "../../../Components/Ui/Dialog";
import StatusBadge from "../../../../../Components/ui/StatusBadge";
import CircleImage from "../../../Components/Ui/CircleImage";
import DropdownMenu from "../../../Components/Ui/DropdownMenu";
import ListTitle from "../../../Components/Ui/ListTitle";
import MediaPreview from "./MediaPreview";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import StoryViewer from "./StoryViewer";
import MystatusFooter from "./MystatusFooter";
import { StoresData } from "./StoresData";


const StatusCard: React.FC = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]); // Store uploaded files
  const [isMediaPreviewOpen, setMediaPreviewOpen] = useState(false); // Media Preview Dialog
  const [isStoryViewerOpen, setStoryViewerOpen] = useState(false);

  // Add new files to the existing list
  const addFiles = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };


  const clearFiles = () => {
    setFiles([]); // Reset the media array
    setMediaPreviewOpen(false);
  };

  // Handle file input changes
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      addFiles(Array.from(event.target.files)); // Convert FileList to an array and append
      setMediaPreviewOpen(true);
    }
  };

  return (
    <div className="mb-5 w-full max-w-sm mx-auto bg-gray-100 shadow-lg p-4">
      <div className=" flex justify-between items-center mb-4">
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
              <MdOutlinePrivacyTip />
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
        onClick={() => setStoryViewerOpen(true)}
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

  <Dialog isOpen={isMediaPreviewOpen} onClose={clearFiles}>
        <MediaPreview
          files={files}
          onAdd={addFiles}
          onRemove={(index) =>
            setFiles((prev) => prev.filter((_, i) => i !== index))
          }
          onSend={clearFiles}
        />
      </Dialog>

      {/* Story Viewer Dialog */}
      <Dialog isOpen={isStoryViewerOpen} onClose={() => setStoryViewerOpen(false)}>
        <StoryViewer stories={StoresData} footer={<MystatusFooter/>} />
      </Dialog>
    </div>
  );
};


export default StatusCard;



