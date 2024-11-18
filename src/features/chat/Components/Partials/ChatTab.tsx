import { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaDollarSign, FaClipboardList, FaBook, FaBlog } from "react-icons/fa";

export const ChatTab = () => {  
  return (
    <>
    
      {/* Sidebar with tabs */}
      {/* <div class?Name="bg-r"> */}
        <SlideTabs />
      {/* </div> */}

    </>
  );
};

const SlideTabs = () => {
  return (
    <ul
      onMouseLeave={() => {}}
      className="flex flex-col items-center bg-blue-200 sticky top-0"  // added z-index
    >
      <Tab icon={<FaHome />} />
      <Tab icon={<FaDollarSign />} />
      <Tab icon={<FaClipboardList />} />
      <Tab icon={<FaBook />} />
    </ul>
  );
};

const Tab = ({ icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex cursor-pointer items-center justify-center w-12 h-12 text-xs text-gray-500 transition duration-300 md:px-5 md:py-3"
    >
      <motion.div
        animate={{
          backgroundColor: hovered ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
          color: hovered ? "white" : "inherit",
        }}
        className="flex h-12 w-12 items-center justify-center rounded-full"
      >
        <div className="text-lg md:text-xl">{icon}</div>
      </motion.div>
    </li>
  );
};
 export default ChatTab;
