import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFromList } from "../redux/userAction";
import { useSelector } from "react-redux";

const DeleteModal = (props, modalRef) => {
  const dispatch = useDispatch();
  let allUserData = useSelector((state) => state.userData);

  const closeModal = () => {
    props.setModalVisibility(false);
    // let delModal = modalRef.current;
    // delModal.classList.add("hidden");
  };
  let userId = props.userId;

  const removeUser = () => {
    // const deleteSingleUser = async () => {
    //   try {
    //     console.time("Time Taken to delete");
    //     const res = await axios.delete(`https://dummyjson.com/users/${userId}`);
    //     let user = res.data;
    //     console.log(user);
    //     users = users.filter((user) => user.id !== userId);
    //     console.log(users);
    //     props.deleteUsers(users);

    //     console.timeEnd("Time Taken to delete");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // deleteSingleUser();
    // const delModal = modalRef.current;
    // delModal.classList.add("hidden");

    dispatch(removeUserFromList(userId));
    closeModal();
  };

  return (
    <div
      id="popup-modal"
      // className={`fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]
      // max-h-full bg-opacity-15 bg-white ${props.isVisible ? "" : " hidden "}`}
      className={`fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto bg-white bg-opacity-5
      max-h-full inset-0 h-auto ${props.isVisible ? "" : " hidden "}`}
    >
      <div className="relative flex w-full max-w-full h-full items-center justify-center ">
        <div className="relative rounded-lg shadow dark:bg-gray-700">
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this user?
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={removeUser}
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none
               focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5
                hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500
                 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={closeModal}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
