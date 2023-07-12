import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import IconButton from "./IconButton";
import PencilIcon from "./PencilIcon";
import DeleteIcon from "./DeleteIcon";
import DeleteModal from "./DeleteModal";

const UserInfo = (props) => {
  // const [users, setUsers] = useState([]);
  const [deleteUserId, setDeleteUserId] = useState("");
  const [modalVisible, setModalVisibility] = useState(false);
  let users = props.userData;

  // const ref = useRef(null);
  // const modalRef = useRef(null);

  // useEffect(() => {
  //   const fetchAllUsers = async () => {
  //     try {
  //       console.time("Time Taken");
  //       const res = await axios.get("https://dummyjson.com/users");
  //       let users = res.data.users;
  //       console.log(users);
  //       setUsers(users);
  //       console.timeEnd("Time Taken");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchAllUsers();
  // }, []);

  const navigate = useNavigate();

  const handleClick = (action, id) => {
    console.log(action);

    if (action === "Edit") navigate(`/profile/:${id}`);

    if (action === "Delete") {
      setModalVisibility(!modalVisible);
      setDeleteUserId(id);
      // const delModal = modalRef.current;
      // delModal.classList.remove("hidden");
    }
  };

  const deletedUsers = (modifiedUsers) => {
    setUsers(modifiedUsers);
  };

  return (
    <>
      {users.map((user) => (
        <tr className="text-black-300 gap-1.5" key={user.id}>
          <td className="px-4 py-3 border">
            <div className="flex items-center text-sm">
              <div className="relative w-12 h-12 mr-3 rounded-full md:block">
                {user.image && (
                  <img
                    src={user.image}
                    className="object-cover w-full h-full rounded-full"
                    alt=""
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div>
                <p className="font-semibold text-black-600">
                  {user.firstName + " " + user.lastName}
                </p>
                <p className="text-xs text-black-300">{user.username}</p>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-sm text-center font-semibold border">
            {user.id}
          </td>
          <td className="px-4 py-3 text-sm font-semibold border">{user.age}</td>
          <td className="px-4 py-3 text-sm font-semibold border">
            {user.email}
          </td>
          <td className="px-4 py-3 text-sm font-semibold border">
            {user.phone}
          </td>
          <td className="px-4 py-3 text-sm font-semibold border">
            {user.company.title}
          </td>
          <td className="px-4 py-3 text-sm font-semibold border">
            {user.company.department}
          </td>

          <td className="px-4 py-3 text-sm font-semibold border flex ">
            <IconButton
              IconName={<PencilIcon></PencilIcon>}
              IconColor={"primary"}
              on_click={(action = "Edit", id = user.id) =>
                handleClick(action, id)
              }
            />
            <IconButton
              id="Delete"
              IconName={<DeleteIcon></DeleteIcon>}
              IconColor={"red"}
              on_click={(action = "Delete", id = user.id) =>
                handleClick(action, id)
              }
            />
            <div>
              {modalVisible && (
                <DeleteModal
                  isVisible={modalVisible}
                  setModalVisibility={setModalVisibility}
                  userId={deleteUserId}
                  deleteUsers={deletedUsers}
                />
              )}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserInfo;
