import React, { useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import LeadForm from "./components/LeadForm";
import "./styles/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="logo">Growly</h1>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaRegSun /> : <FaRegMoon />}
            </button>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <HowItWorks />
                <Features />
                <LeadForm />
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
