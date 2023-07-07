import React from "react";

const Tooltip = (props) => {
  return (
    <div>
      {console.log(props.children)}
      <span
        className="absolute top-10 scale-100 transition-all rounded 
      bg-gray-800 p-2 text-xs text-white group-hover:scale-100"
      >
        {props.message}
      </span>
    </div>
  );
};

export default Tooltip;
