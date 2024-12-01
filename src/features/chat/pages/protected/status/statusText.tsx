

import React from "react";
import StatusInput from "./StatusInput";

const statusText: React.FC = () => {
  return (
    <div className="h-[calc(92vh-10vh)] w-full flex items-center justify-center bg-purple-700">
      <StatusInput />
    </div>
  );
};

export default statusText;
