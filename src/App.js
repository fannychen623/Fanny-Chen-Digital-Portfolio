// import package and local component
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import local components
import NavTabs from "./components/navBar";
import SideMenu from "./components/sideMenu";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import MainProjects from "./pages/mainProjects";
import MiniProjects from "./pages/miniProjects";
import Dietry from "./pages/dietry";
import StepItUp from "./pages/stepItUp";
import ShareAByte from "./pages/shareAByte";
import GifMeMarvel from "./pages/gifMeMarvel";
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
          <Route path="/about" element={<><SideMenu /><About /><Footer /></>} />
          <Route path="/portfolio" element={<><SideMenu /><Portfolio /><Footer /></>}/>
          <Route path="/main-projects" element={<><SideMenu /><MainProjects /><Footer /></>}/>
          <Route path="/mini-projects" element={<><SideMenu /><MiniProjects /><Footer /></>}/>
          <Route path="/dietry" element={<><SideMenu /><Dietry /><Footer /></>}/>
          <Route path="/step-it-up" element={<><SideMenu /><StepItUp /><Footer /></>}/>
          <Route path="/share-a-byte" element={<><SideMenu /><ShareAByte /><Footer /></>}/>
          <Route path="/gif-me-marvel" element={<><SideMenu /><GifMeMarvel /><Footer /></>}/>
          <Route path="/resume" element={<><SideMenu /><Resume /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;