import React ,{useState} from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Dashboard from "./components/Dashboard";
import TestimonialsSection from "./components/TestimonialsSection";
import ScreenShotsSection from "./components/ScreenshotsSection";
import ContactSection from "./components/ContactSection"; 
import pic from './images//Property 1=Default (1).png';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div className="App">
      <div className="container">
            <button className="togglebutton" onClick={toggleDarkMode}>Toggle Dark Mode</button>
           <Dashboard/> 
          
                
                 <HeroSection/>
                 <FeaturesSection/>
                 <TestimonialsSection />
                 <ScreenShotsSection />
                 <ContactSection/>
           
       </div>
        <img src={pic} alt="page" />
    </div>
  );
}

export default App;

