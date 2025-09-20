// components/ButtonLoader.jsx
import React from "react";

const ButtonLoader = ({ loading, children, spinnerText = "Loading..." }) => {
  return loading ? (
    <div className="flex items-center justify-center gap-2">
      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      {spinnerText}
    </div>
  ) : (
    children
  );
};

export default ButtonLoader;
