import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Project from "./pages/Project";
import Home from "./pages/Home.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/react-portfolio/" element={<Home />}></Route>
          <Route exact path="/react-portfolio/project" element={<Project />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;