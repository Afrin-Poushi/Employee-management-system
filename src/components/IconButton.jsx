import React from "react";

const IconButton = (props) => {
  const color = props.IconColor;
  const iconClassName = `mr-3 my-3 py-1 px-2 text-white rounded focus:shadow-outline ${
    color == "primary" ? "edit-icon" : "delete-icon"
  } `;
  console.log(iconClassName);
  return (
    <div>
      <button
        type="button"
        // className={`mr-3 my-3 text-sm hover:bg-${props.IconColor}-700
        // text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline bg-${props.IconColor}-500`}
        className={iconClassName}
        id={props.id}
        onClick={(event) => props.on_click(this)}
      >
        {props.IconName}
      </button>
    </div>
  );
};

export default IconButton;
