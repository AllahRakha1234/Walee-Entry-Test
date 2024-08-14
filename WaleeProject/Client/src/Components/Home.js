import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const styles = {
    textWhite: {
      color: "white",
    },
  };

  const textBold = {
    fontWeight: "bold",
  };

  // Combine styles using spread operator
  const combinedStyle = {
    ...styles.textWhite, // Include styles.textWhite
    ...textBold, // Include textBold
    marginLeft: "10px", // Add new style property
  };

  return (
    <div className="container mx-auto h-max">
      <h1 className=" bg-slate-300 text-white text-3xl font-bold p-3 d-flex justify-center items-center mx-auto">
        Welcome to Coffee Shop
      </h1>
      <div className="flex space-x-5 mt-6">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          <Link to="/login"> Login </Link>
        </button>
        <br />
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          <Link to="/signup"> Signup </Link>
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          <Link to="/users"> AllUsers </Link>
        </button>
      </div>
      <img
        className="my-4"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS8AimFv-GUOXPAeo6uz-2YIl9btD5P2xzA&usqp=CAU"
        }
        alt="temp img"
      />
      <h2 className="bgRed" style={combinedStyle}>
        I am custom css
      </h2>
      <h2 style={{ color: "white", backgroundColor: "aqua", padding: "10px" }}>
        I am css
      </h2>
    </div>
  );
};

export default Home;
