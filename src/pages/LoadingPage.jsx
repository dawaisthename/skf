// LoadingPage.jsx
import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50 opacity-90">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingPage;
