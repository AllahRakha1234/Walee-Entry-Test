import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TopNavBar from "./TopNavBar";
import UserSearch from "./UserSearch";
import CreateUpdate from "./CreateUpdate";

const Admin = () => {
  const [userData, setUserData] = useState([]);

  const handleDeleteBtn = async (_id) => {
    const response = await axios.delete(`http://localhost:8000/users/${_id}`);
    window.location = "http://localhost:3000/users";
    console.log("Server response:", response);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/getorder/admin"
        );
        console.log("Server response:", response);
        console.log("Server response data:", response.data);
        setUserData(response.data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
        // Optionally handle error state or show a message to the user
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  return (
    <div>
      <TopNavBar props={{ name: "admin" }} />
      <div className=" userContainer container mx-auto">
        <div className="relative overflow-x-auto">
          <table
            className="w-full text-sm text-left rtl:text-right text-gray-500
 dark:text-gray-400"
          >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  OrderTitle
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
          </table>
        </div>
        {userData.length <= 0 ? (
          <h1>No Orders Yet...</h1>
        ) : (
          userData.map((userItem, index) => {
            return (
              <div className="relative overflow-x-auto" key={index}>
                <table
                  className="w-full text-sm text-left rtl:text-right text-gray-500
                 dark:text-gray-400"
                >
                  {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        OrderTitle
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        User
                      </th>
                    </tr>
                  </thead> */}
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {userItem.ordertitle}
                      </th>
                      <td className="px-6 py-4">{userItem.status}</td>
                      <td className="px-6 py-4">{userItem.user}</td>
                      <td className="px-6 py-4">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                          onClick={() => {
                            handleDeleteBtn(userItem._id);
                          }}
                        >
                          {" "}
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                          onClick={() => {
                            handleDeleteBtn(userItem._id);
                          }}
                        >
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })
        )}
      </div>
      <button className="bg-red-500 ml-10 mt-10 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
        <Link to="/"> Home </Link>
      </button>
      <div className="container mx-auto mt-5">
        <h1 className=" bg-sky-400 text-white text-3xl font-bold p-3 d-flex justify-center items-center mx-auto">
          Search
        </h1>
        <UserSearch />
      </div>

      <div className="container mx-auto mt-5">
        <h1 className=" bg-sky-400 text-white text-3xl font-bold p-3 d-flex justify-center items-center mx-auto">
          Create/Update
        </h1>
        <CreateUpdate />
      </div>
    </div>
  );
};

export default Admin;
