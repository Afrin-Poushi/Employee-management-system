import React from "react";

const IconButton = (props) => {
  const color = props.IconColor;
  return (
    <div>
      <button
        type="button"
        // className={`mr-3 my-3 text-sm hover:bg-${props.IconColor}-700
        // text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline bg-${props.IconColor}-500`}
        className={`mr-3 my-3 py-1 px-2 text-white rounded focus:shadow-outline bg-${color}-500 hover:bg-${color}-700`}
        id={props.id}
        onClick={(event) => props.on_click(this)}
      >
        {props.IconName}
      </button>
    </div>
  );
};

export default IconButton;
