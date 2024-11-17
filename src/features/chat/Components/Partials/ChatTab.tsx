import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaDollarSign, FaClipboardList, FaBook, FaBlog } from "react-icons/fa"; // استيراد الأيقونات

export const ChatTab = () => {
  return (
    <div className="bg-neutral-100 pt-0 flex">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex flex-col items-start left-0 fixed h-full p-4 space-y-4"
    >
      <Tab setPosition={setPosition} icon={<FaHome />} />
      <Tab setPosition={setPosition} icon={<FaDollarSign />} />
      <Tab setPosition={setPosition} icon={<FaClipboardList />} />
      <Tab setPosition={setPosition} icon={<FaBook />} />
      <Tab setPosition={setPosition} icon={<FaBlog />} />

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ icon, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference"
    >
      <div className="relative flex flex-col items-center">
        <div className="text-2xl md:text-3xl">{icon}</div>
        <div className="absolute bottom-0 w-full h-0.5 bg-white opacity-0 transition-all duration-300"></div>
      </div>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
