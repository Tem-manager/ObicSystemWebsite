import { useState } from "react";
import { motion } from "framer-motion";
import { Call, Chat, Favorite, Group } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom"; // استيراد useLocation

export const ChatTab = () => {
  return (
    <div className="sticky top-0 flex flex-col h-full pl-2 pt-4">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const location = useLocation(); // الحصول على المسار الحالي

  return (
    <ul className="flex flex-col items-center">
      {/* قائمة الأيقونات مرتبة بشكل عمودي */}
      <Tab icon={<Chat />} isActive={location.pathname === "/chat/chats"} to="/chat/chats" />
      <Tab icon={<Favorite />} isActive={location.pathname === "/chat/favorites"} to="/chat/favorites" />
      <Tab icon={<Group />} isActive={location.pathname === "/chat/groups"} to="/chat/groups" />
      <Tab icon={<Call />} isActive={location.pathname === "/chat/calls"} to="/chat/calls" />
    </ul>
  );
};

const Tab = ({ icon, isActive, to }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
