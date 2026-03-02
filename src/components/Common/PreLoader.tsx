import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#3683ab] border-t-transparent"></div>
    </div>
  );
};

export default PreLoader;