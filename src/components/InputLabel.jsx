import React from "react";

const InputLabel = (props) => {
  return (
    <div>
      <label className="text-white dark:text-gray-800" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md bg-gray-600 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        value={props.value || " "}
        onChange={(event) => props.on_change(event)}
      />
    </div>
  );
};

export default InputLabel;
