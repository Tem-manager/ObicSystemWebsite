import { useState } from "react";
import { motion } from "framer-motion";
import { Call, Chat, Favorite, Group } from "@mui/icons-material";
import { Link } from "react-router-dom"; // استيراد Link من react-router-dom

export const ChatTab = () => {
  return (
    <div className="h-screen flex items-start justify-center mt-[0px]">
      {/* تحريك الأيقونات للأعلى باستخدام mt-8 */}
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <ul className="flex flex-col items-center">
      {/* قائمة الأيقونات مرتبة بشكل عمودي */}
      <Tab icon={<Chat />} isActive={activeIndex === 0} onClick={() => setActiveIndex(0)} to="/chat" />
      <Tab icon={<Favorite />} isActive={activeIndex === 1} onClick={() => setActiveIndex(1)} to="/chat/favorites" />
      <Tab icon={<Group />} isActive={activeIndex === 2} onClick={() => setActiveIndex(2)} to="/chat/groups" />
      <Tab icon={<Call />} isActive={activeIndex === 3} onClick={() => setActiveIndex(3)} to="/chat/calls" />
    </ul>
  );
};

const Tab = ({ icon, isActive, onClick, to }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative mt-1 flex cursor-pointer items-center justify-center w-12 h-12 text-xs text-gray-500 transition duration-300"
    >
      <Link to={to}>
        <motion.div
          animate={{
            backgroundColor: hovered || isActive
              ? "#192745" // اللون الجديد عند التمرير أو التفعيل
              : "rgba(0, 0, 0, 0)", // شفاف في الحالة العادية
            color: hovered || isActive ? "white" : "inherit",
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full"
        >
          <div className="text-2xl">{icon}</div>
        </motion.div>
      </Link>
    </li>
  );
};

export default ChatTab;
