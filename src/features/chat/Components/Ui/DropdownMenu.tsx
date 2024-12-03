import React, { useState } from "react";

interface DropdownMenuProps {
  buttonContent: React.ReactNode; 
  options: { label: string; icon?: React.ReactNode; onClick: () => void }[]; 
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonContent, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
    
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        {buttonContent}
      </button>

    
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-[9999]"
          onMouseLeave={closeDropdown}
        >
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  option.onClick();
                  closeDropdown();
                }}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {option.icon && <span className="mr-3">{option.icon}</span>}
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
