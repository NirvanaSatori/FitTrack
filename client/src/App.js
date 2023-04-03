import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Food from "./components/Food";
import Home from "./components/Home";
import Exercise from "./components/Exercise";
import Target from "./components/Target";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
     
          <Route path="/food" element={<Food />} />
          <Route path="/targets" element={<Target />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
