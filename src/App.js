import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth"
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "0" }}></div>
      {/* <Home /> */}
      {/* <Profile/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Auth />}/>
        </Routes>
      </BrowserRouter>
      {/* <Auth/> */}
    </div>
  );
}

export default App;
