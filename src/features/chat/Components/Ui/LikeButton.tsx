import { IoIosHeart } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";

interface LikeButtonProps {
  isLiked: boolean;
  onToggle: () => void;
  count: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onToggle, count }) => {
  return (
    <div className="space-y-1 cursor-pointer" onClick={onToggle}>
      <div className="text-3xl drop-shadow-md">
        {isLiked ? <IoIosHeart className="text-red-700" /> : <IoHeartOutline />}
      </div>
      <div className="text-sm drop-shadow-md">{count}</div>
    </div>
  );
};