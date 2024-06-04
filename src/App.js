import React  from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Dashboard from "./components/Dashboard";
import TestimonialsSection from "./components/TestimonialsSection";
import ScreenShotsSection from "./components/ScreenshotsSection";
import ContactSection from "./components/ContactSection"; 



function App() {
  

  return (
    <div className="App">
      <div className="container">
      
                 <Dashboard/> 
                 <HeroSection/>
                 <FeaturesSection/>
                 <TestimonialsSection />
                 <ScreenShotsSection />
                 <ContactSection/>
           
       </div>
      
    </div>
  );
}

export default App;

