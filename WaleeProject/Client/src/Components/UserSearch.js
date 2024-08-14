import React, { useState } from "react";
import axios from "axios";

const UserSearch = () => {
  const [orderTitle, setOrderTitle] = useState("");

  const handleSearchBtn = async (orderTitle) => {
    const response = await axios.get(
      `http://localhost:8000/search/${orderTitle}`
    );
    window.location = "http://localhost:3000/users";
    console.log("Server response:", response);
  };

  return (
    <div className="container mx-auto bg-green-500 mt-10">
      <input
        type="text"
        id="ordertitle"
        value={orderTitle}
        placeholder="Enter your order title"
        onChange={(e) => setOrderTitle(e.target.value)}
        className="border border-black-400 p-3 m-3 rounded-lg bg-slate-400 text-white placeholder:text-white"
      />
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          handleSearchBtn(orderTitle);
        }}
      >
        {" "}
        Search
      </button>
    </div>
  );
};

export default UserSearch;
