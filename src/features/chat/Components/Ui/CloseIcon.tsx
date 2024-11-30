import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../../../../Components/ui/StatusBadge";

const CloseIcon: React.FC = () => {

  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div >
            <StatusBadge content=
              {
                <button
                    onClick={handleClose}
                >
                  <IoClose className="w-6 h-6" />
                </button>
              }
            />
      
    </div>
  );
};

export default CloseIcon;





