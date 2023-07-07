import React from "react";

const BlueButton = (props) => {
  return (
    <div>
      <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500  transition-all text-sm">
        {props.btnText}
      </button>
    </div>
  );
};

export default BlueButton;
