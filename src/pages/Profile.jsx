import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showProfile, editProfile } from "../redux/profileAction";
import { useSelector } from "react-redux";

import axios from "axios";

import InputLabel from "../components/InputLabel";
import BellIcon from "../components/BellIcon";
import HomeIcon from "../components/HomeIcon";
import UserIcon from "../components/UserIcon";
import RightArrowIcon from "../components/RightArrowIcon";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    dob: new Date(),
    company: "",
    team: "",
    position: "",
  });

  const location = useLocation();
  const userId = location.pathname.split("/")[2].split(":")[1];

  const dispatch = useDispatch();
  let profileData = useSelector((state) => state.profileData);

  // useEffect(() => {
  //   const fetchSingleUser = async () => {
  //     try {
  //       console.time("Time Taken");
  //       const res = await axios.get(`https://dummyjson.com/users/${userId}`);
  //       let user = res.data;
  //       setUser(user);

  //       console.timeEnd("Time Taken");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   // fetchSingleUser();
  // }, []);

  useEffect(() => {
    // Dispatch action to fetch user data
    dispatch(showProfile(userId));
  }, [dispatch]);

  useEffect(() => {
    // Update users and userInfoLoaded when allUserData changes
    if (profileData.length) {
      console.log(...profileData);
      setUser(...profileData);
    }
  }, [profileData]);

  useEffect(() => {
    setValues({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      address: user?.address?.address,
      city: user?.address?.city,
      state: user?.address?.state,
      dob: user.birthDate || new Date(),
      company: user?.company?.name,
      team: user?.company?.department,
      position: user?.company?.title,
    });
  }, [user]);

  /** TRIGGERS WHENEVER SUBMITTED AND SET THE VALUE IN USESTATE */
  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    console.log({ id, value });
    setValues({ ...values, [id]: value });
    console.log(values);
  };
  /** TRIGGERS WHENEVER SUBMITTED  */
  const handleSubmit = (e) => {
    e.preventDefault();
    // const updateSingleUser = async () => {
    //   try {
    //     console.time("Time Taken to update");
    //     const res = await axios.put(`https://dummyjson.com/users/${userId}`, {
    //       ...values,
    //     });
    //     let user = res.data;
    //     console.log(user);

    //     console.timeEnd("Time Taken to update");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // updateSingleUser();
    dispatch(editProfile(values, userId));
    setUser(...profileData);
  };

  // converting required date format
  const convertDate = (date) => {
    date = new Date(date);
    return `${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
  };

  return (
    <div className="min-h-screen min-w-screen m-0 p-0">
      <nav className="p-5 mx-3 font-semibold shadow-lg text-xl tracking-tight">
        <ol className=" items-center  md:space-x-1">
          <li className="inline-flex items-center">
            <a
              href="http://localhost:3000"
              className="inline-flex items-center text-lg font-medium  hover:text-gray-500 text-gray-800 "
            >
              <HomeIcon /> Home
            </a>
            <RightArrowIcon />
          </li>
          <li className="inline-flex items-center text-lg font-medium cursor-pointer hover:text-gray-500 text-gray-800 ">
            <UserIcon /> My Profile
          </li>
          <div className="relative float-right w-10 h-10  m-2 p-0 rounded-full cursor-pointer">
            <BellIcon />
          </div>
        </ol>
      </nav>

      {/* Edit section */}
      <section className="p-4 h-full mx-auto">
        <h2 className="font-semibold text-gray-800 text-4xl">Edit Profile</h2>
        {/* Profile Image */}
        <div className="relative">
          <div className="w-36 h-36 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-8 flex items-center justify-center">
            {
              <img
                className="w-25 h-25 -top-2 rounded-full"
                src={user?.image}
                alt="Profile Pic"
              ></img>
            }
          </div>
        </div>
        {/* form starts */}

        <form onSubmit={handleSubmit} className="relative mt-32">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <InputLabel
              label={"First Name"}
              id="firstName"
              type="text"
              value={values.firstName}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            <InputLabel
              label="Last Name"
              id="lastName"
              type="text"
              value={values.lastName}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            <InputLabel
              label="Email Address"
              id="email"
              type="email"
              value={values.email}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            <InputLabel
              label="Phone"
              id="phone"
              type="tel"
              value={values.phone}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            <InputLabel
              label="Address"
              id="address"
              type="text"
              value={values.address}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            <InputLabel
              label="City"
              id="city"
              type="text"
              value={values.city}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            <InputLabel
              label="State"
              id="state"
              type="text"
              value={values.state}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            <InputLabel
              label="Birth Date"
              id="bod"
              type="date"
              value={convertDate(values.dob ? values.dob : new Date())}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            <InputLabel
              label="Company"
              id="company"
              type="text"
              value={values.company}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            <InputLabel
              label="Team"
              id="team"
              type="text"
              value={values.team}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            <InputLabel
              label="Position"
              id="position"
              type="text"
              value={values.position}
              on_change={(e = this) => handleChange(e)}
            ></InputLabel>

            {/* file upload start */}
            <div className="border-2 border-gray-500 border-dashed px-6 pt-5 pb-6">
              {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="text-center">
                  <div className="flex text-sm text-gray-600">
                    
                  </div>
                </div>
              </div> */}
              <label
                className="block text-sm font-medium text-gray-800"
                htmlFor="file_input"
              >
                Upload Image
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p className="text-xs text-gray-900 mt-1" id="file_input_help">
                SVG, PNG, JPG or GIF
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Profile;
