

import React from "react";
import StatusInput from "./StatusInput";

const statusText: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-purple-700">
      <StatusInput />
    </div>
  );
};

export default statusText;
