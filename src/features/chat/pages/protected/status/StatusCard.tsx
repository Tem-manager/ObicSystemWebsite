

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
import { IoArrowBackOutline } from "react-icons/io5";
import ContactDialog from "../../../Components/Ui/ContactDialog";
import { contacts } from "./contactsData";

const StatusCard: React.FC = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]); // Store uploaded files
  const [isMediaPreviewOpen, setMediaPreviewOpen] = useState(false); // Media Preview Dialog
  const [isStoryViewerOpen, setStoryViewerOpen] = useState(false);
  const [showPrivacyCard, setShowPrivacyCard] = useState(false); // Privacy card toggle
  const [isModalOpen, setModalOpen] = useState(false);

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
    <div className="mb-5 w-full  max-w-sm mx-auto bg-gray-100 shadow-lg p-4">
      {/* Conditionally Render Privacy Card or Status Cards */}
      {showPrivacyCard ? (
        <div className="w-80">
          <div className="flex">
          <button
            className=" text-lg font-semibold mb-4 pr-5 "
            onClick={() => setShowPrivacyCard(false)} // Back to status view
          >
           <IoArrowBackOutline />
          </button>
          <h3 className="text-lg font-semibold mb-4">Status Privacy</h3>
          </div>
          <h4 className="text-l text-green-600 font-semibold mb-4">Who can see my status</h4>
          <div className="mb-2">
            <input type="radio" id="all-contacts" name="privacy" />
            <label htmlFor="all-contacts" className="ml-2">My contacts</label>
          </div>
          <div className="mb-2" onClick={() => setModalOpen(true)}>
            <input type="radio" id="except-contacts" name="privacy" />
            <label htmlFor="except-contacts" className="ml-2">My contacts except...</label>
          </div>
          <div className="mb-2">
            <input type="radio" id="only-share" name="privacy" />
            <label htmlFor="only-share" className="ml-2">Only share with...</label>
          </div>
          
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Status</h2>
            <div className="flex items-center space-x-4">
              <DropdownMenu
                buttonContent={
                  <StatusBadge
                    content={<FaPlus />}
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
              <button onClick={() => setShowPrivacyCard(true)} >
              <StatusBadge
                content={<MdOutlinePrivacyTip />}
                textSize="text-l"
                
              />
              </button>
              
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
            <StoryViewer stories={StoresData} footer={<MystatusFooter />} />
          </Dialog>
         
          
         
     
        </>
      )}
      <ContactDialog 
          isOpen={isModalOpen}
          contacts={contacts}
          onClose={() => setModalOpen(false)} 
          Title={"My contacts except"} />
    </div>
  );
};

export default StatusCard;


