import React from "react";

const BlueButton = (props) => {
  return (
    <div>
      <button
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent 
      font-semibold bg-primary text-white hover:bg-primary-light focus:ring-primary-dark 
      transition-all text-sm custom-color"
      >
        {props.btnText}
      </button>
    </div>
  );
};

export default BlueButton;
