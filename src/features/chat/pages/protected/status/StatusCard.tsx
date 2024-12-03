import { useNavigate } from "react-router-dom";
import StatusBadge from "../../../../../Components/ui/StatusBadge";
import CircleImage from "../../../Components/Ui/CircleImage";
import DropdownMenu from "../../../Components/Ui/DropdownMenu";
import ListTitle from "../../../Components/Ui/ListTitle";
import { AiOutlineFileImage, AiOutlineEdit } from "react-icons/ai";


const StatusCard: React.FC = () => {
  const navigate = useNavigate();
  const handleAddPhoto = () => {
    console.log("Add Photos & Videos clicked!");
  };
  
  const handleAddText = () => {
      navigate("/chat/statusText");
  };
    return (
        <div className=" mb-5 w-full max-w-sm mx-auto bg-gray-100 shadow-lg  p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Status</h2>
            <div className="flex items-center space-x-4">
              <DropdownMenu
                    buttonContent=
                      {
                        <StatusBadge 
                            content={
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4" />
                                </svg>
                              } 
                              size={6}
                              color="bg-gray-200"
                          />
                       
                      }
                    options={[
                      {
                        label: "Photos & Videos",
                        icon: <AiOutlineFileImage />,
                        onClick: handleAddPhoto,
                      },
                      {
                        label: "Text",
                        icon: <AiOutlineEdit />,
                        onClick: handleAddText,
                      },
                    ]}
               />
                
                <StatusBadge 
                    content=
                      { 
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      } 
                  
               />
              
            </div>
          </div>
        <ListTitle
            Title="My status" 
            imageComponent={<CircleImage 
                                    size={12}
                                    imageUrl={"https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                                />}
            subTitle="Click to add status update"
            showIcon={true}
        />
          
        </div>
      );
}

export default StatusCard;
