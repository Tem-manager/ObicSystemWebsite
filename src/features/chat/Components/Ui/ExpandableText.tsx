interface ExpandableTextProps {
  text: string;
  expandedText: string;
  isExpanded: boolean;
  onToggle: () => void;
}
export const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  expandedText,
  isExpanded,
  onToggle,
}) => {
  return (
    <p className="text-sm text-gray-300 mt-1 drop-shadow-md">
      {isExpanded ? expandedText : text}
      <span onClick={onToggle} className="text-blue-400 cursor-pointer ml-2">
        {isExpanded ? "Show less" : "Show more"}
      </span>
    </p>
  );
};