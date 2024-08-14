import "./App.css";
import HomePage from "./Components/HomePage";
import PageNotFound from "./Components/PageNotFound";
import Admin from "./Components/Admin";
import User1 from "./Components/User1";
import User2 from "./Components/User2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className=" mt-5">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user1" element={<User1 />} />
          <Route path="/user2" element={<User2 />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
