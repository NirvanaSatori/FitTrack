import './App.css';
import { Route, Routes,BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Food from "./components/Food";
import Home from "./components/Home";
import Exercise from "./components/Exercise";
import Target from "./components/Target";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer"

function App() {
  return (
    
    <div className="App">
     
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/food" element={<Food />}></Route>
      <Route path="/exercise" element={<Exercise />}></Route>
      <Route path="/target" element={<Target />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>
      <Route path="/login" element={<Login />}></Route>

      </Routes>


      </BrowserRouter>
     
      
    {/* </div>
    <div> */}
    <Footer/>
    
    </div>
    // </>
  );
}

export default App;
