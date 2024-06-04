import React, { useState } from 'react';
import "../cssfiles/Dashboard.css";
import logo from "../images/logo.png";
import tm from "../images/tmlogo.png";


function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  return (
    <div className={`dash p-4 flex items-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`} >

    <img src={logo} alt="Logo" className="mr-3" /> &nbsp;&nbsp;&nbsp;
    <b className="mr-3 text-lg" >uifry</b> &nbsp;&nbsp;
     <img src={tm} alt='mark' className="mr-3"/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
    <a href="#home" className="nav-item mr-3 text-red-500" style={{color:'red'}}>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#testi" className="nav-item mr-3">About Us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#pricing" className="nav-item mr-3">Pricing</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#features" className="nav-item mr-3">Features</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <button 
      className="ml-16 px-4 py-2 bg-black text-white text-2xl transition-transform duration-300 hover:scale-110"
      style={{marginLeft:'150px'}}
    >
      Download
    </button> &nbsp;&nbsp;
    <button 
      onClick={toggleDarkMode}
      className="ml-4 px-4 py-2 bg-gray-800 text-white transition-transform duration-300 hover:scale-110"
    >
      {darkMode ? 'Toggle to Light Mode' : 'Toggle to Dark Mode'}
    </button>
  </div>
);
};
export default Dashboard