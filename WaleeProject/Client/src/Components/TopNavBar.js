import React from "react";

const TopNavBar = ({ props }) => {
  return (
    <div className="flex justify-center items-center mb-3">
      <h1 className="text-2xl font-bold text-blue-600">Welcome {props.name}</h1>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ">
        {" "}
        Logout
      </button>
    </div>
  );
};

export default TopNavBar;
