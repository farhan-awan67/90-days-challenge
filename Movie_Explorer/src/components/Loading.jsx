import React from "react";

const Loading = ({ className }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="w-8 h-8 rounded-full border-2.5 border-gray-400 border-t-3 border-t-grey-[300] animate-spin"></div>
    </div>
  );
};

export default Loading;
