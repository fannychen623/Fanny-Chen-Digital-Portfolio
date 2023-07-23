// import package and local component
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import local components
import NavTabs from "./components/navBar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";

// import local global style sheet
import './styles/global.css';

// main App component that can reference other React components for rendering
function App() {

  return (
    <Router>
      <div className="global">
        <Routes>
          <Route path="/Fanny-Chen-Digital-Portfolio" element={<Home />} />
          <Route path="/about" element={<><NavTabs /><About /><Footer /></>} />
          <Route path="/portfolio" element={<><NavTabs /><Portfolio /><Footer /></>}/>
          <Route path="/resume" element={<><NavTabs /><Resume /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;