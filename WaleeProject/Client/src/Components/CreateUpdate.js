import React, { useState } from "react";

const CreateUpdate = () => {
  const [orderTitle, setOrderTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [statusOption, setStatusOption] = useState("");

  const userOptions = [
    { value: "user1", label: "User 1" },
    { value: "user2", label: "User 2" },
    { value: "admin", label: "Admin" },
  ];

  const statusOptions = [
    { value: "open", label: "Open" },
    { value: "shipped", label: " Shipped" },
    { value: "rejected", label: "Rejected" },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container mx-auto bg-green-500 mt-10">
      <form
        className="form-control flex justify-center items-center flex-col"
        // onSubmit={handleSubmit}
      >
        <br />
        <input
          type="text"
          id="ordertitle"
          value={email}
          placeholder="Enter your ordertitle"
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black-400 p-3 m-3 rounded-lg bg-slate-400 text-white placeholder:text-white"
        />
        <br />
        <label htmlFor="select">Choose User:</label>
        <select
          className="border border-black-400 p-3 m-3 rounded-lg bg-slate-400 text-white placeholder:text-white"
          id="select"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="">Plz choose an option</option>
          {userOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="select">Choose Status:</label>
        <select
          className="border border-black-400 p-3 m-3 rounded-lg bg-slate-400 text-white placeholder:text-white"
          id="select"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="">Plz choose an option</option>
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <br />
        <input
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-3"
          value="Create/Upadate"
        />
      </form>
    </div>
  );
};

export default CreateUpdate;

//   <p>Selected option: {selectedOption}</p>
