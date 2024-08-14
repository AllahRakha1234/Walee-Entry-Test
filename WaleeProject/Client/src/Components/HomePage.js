import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="container mx-auto h-max">
      <h1 className=" bg-slate-300 text-white text-3xl font-bold p-3 d-flex justify-center items-center mx-auto">
        Welcome to Home Page
      </h1>
      <div className="flex space-x-5 mt-6">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          <Link to="/user1"> Login as User1 </Link>
        </button>
        <br />
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          <Link to="/user2"> Login as User2 </Link>
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          <Link to="/admin"> Login as Admin </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
