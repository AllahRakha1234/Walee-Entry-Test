import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [userData, setUserData] = useState([]);

  const handleDeleteBtn = async (_id) => {
    const response = await axios.delete(`http://localhost:8000/users/${_id}`);
    window.location = "http://localhost:3000/users";
    console.log("Server response:", response);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users");
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
      <h1 className=" bg-slate-300 text-black text-3xl font-bold p-3 d-flex justify-center items-center mx-auto">
        Welcome to Coffee Shop
      </h1>
      <div className=" userContainer container mx-auto">
        {userData.length <= 0 ? (
          <h1>No Users Yet...</h1>
        ) : (
          userData.map((userItem, index) => {
            return (

              <div className="relative overflow-x-auto" key={index}>
                <table
                  className="w-full text-sm text-left rtl:text-right text-gray-500
                 dark:text-gray-400"
                >
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        UserName
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {userItem.name}
                      </th>
                      <td className="px-6 py-4">{userItem.email}</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                      <td className="px-6 py-4">
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
    </div>
  );
};

export default AllUsers;
