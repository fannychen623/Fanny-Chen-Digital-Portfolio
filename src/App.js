// import package and local component
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import local components
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";

// import local global style sheet
import './styles/Global.css';

// import projects that will populate the portfolio page
import projects from './projects';
import stepItUp from './stepItUp';
import shareAByte from './shareAByte';
import gifMeMarvel from './gifMeMarvel';

// main App component that can reference other React components for rendering
function App() {

  return (
    <Router>
      <div className="global">
        <Routes>
          <Route path="/Fanny-Chen-Digital-Portfolio" element={<Home />} />
          <Route path="/about" element={<><NavTabs /><About /><Footer /></>} />
          <Route path="/portfolio" element={<><NavTabs />
            <Portfolio
              projects={projects}
              mainProject={stepItUp}
              secondProject={shareAByte}
              thirdProject={gifMeMarvel}
            /><Footer /></>}
          />
          <Route path="/resume" element={<><NavTabs /><Resume /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;