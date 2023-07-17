import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userList } from "../redux/userAction";
import { useSelector } from "react-redux";

// import axios from "axios";
import UserInfo from "../components/UserInfo";
import DownIcon from "../components/DownIcon";
import FilterIcon from "../components/FilterIcon";
import BlueButton from "../components/BlueButton";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [userInfoLoaded, setUserInfoLoaded] = useState(false);

  const dispatch = useDispatch();

  // const dispatch = useDispatch();
  let allUserData = useSelector((state) => state.userData);

  useEffect(() => {
    // Dispatch action to fetch user data
    dispatch(userList());
  }, [dispatch]);

  useEffect(() => {
    // Update users and userInfoLoaded when allUserData changes
    if (allUserData.length) {
      setUsers(...allUserData);
      setUserInfoLoaded(true);
    }

    /**after 2 sec the color will be change dynamically */
    // setTimeout(() => {
    //   customColor("--primary-color", "#0000FF");
    // }, 2000);
  }, [allUserData]);

  const customColor = (colorName, colorCode) => {
    document.documentElement.style.setProperty(colorName, colorCode);
  };

  return (
    <div className=" min-h-screen min-w-screen m-0 p-0">
      <br />
      <div className="flex-col content-center mx-8 my-8">
        <div className="container min-h-full min-w-full flex-col mx-auto pb-0 p-6 border-2 border-b-0 border-transparent bg-transparent shadow-2xl">
          <div className="font-semibold text-3xl">
            {" "}
            Employees
            {/* <i className="kt-brand"></i>
            <i className="p-dashboard text-sm text-stone-400"/> */}
            <div className="float-right text-sm mr-4">
              <BlueButton btnText="View Subscription" />
            </div>
            <div className="relative w-11 h-11 mr-3 float-right flex bg-gray-dark rounded-md items-center justify-center">
              <FilterIcon />
            </div>
          </div>
          <section className=" mx-auto p-6 pb-0 mb-0">
            <div className="w-full mb-1 min-h-max shadow-lg bg-transparent">
              <div className="w-full min-h-full overflow-x-auto ">
                <table className="w-full border-separate border-spacing-y-2">
                  <thead>
                    <tr className=" tracking-wide align-bottom text-left text-black-400 bg-transparent border-b ">
                      <td className="px-4 py-3 whitespace-nowrap">
                        Name <DownIcon />
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        Emp id <DownIcon />
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        Age <DownIcon />
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        Email <DownIcon />
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        Phone <DownIcon />
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        Position <DownIcon />
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        Team <DownIcon />
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center">
                        Action
                      </td>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-dark">
                    {/* add user info component when rendering is finish */}
                    {userInfoLoaded ? (
                      <UserInfo userData={users} />
                    ) : (
                      <tr>
                        <td colSpan="7" className="px-4 py-3 text-center">
                          <span
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md 
                            border border-transparent font-semibold bg-primary-dark text-white text-sm"
                          >
                            <span
                              className="animate-spin inline-block w-4 h-4 border-[3px] border-current 
                              border-t-transparent text-white rounded-full"
                              role="status"
                              aria-label="loading"
                            ></span>
                            Loading
                          </span>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Dashboard;
