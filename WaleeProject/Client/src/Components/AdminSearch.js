import React, { useState } from "react";
import Admin from "./Admin";

const AdminSearch = () => {
  const [orderTitle, setOrderTitle] = useState("");

  return (
    <div className="container mx-auto bg-green-500 mt-10">
      <div>
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
          // onClick={() => {
          //   handleDeleteBtn();
          // }}
        >
          {" "}
          Search
        </button>
      </div>
    </div>
  );
};

export default AdminSearch;
