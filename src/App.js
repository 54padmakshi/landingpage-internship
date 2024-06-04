import React  from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Dashboard from "./components/Dashboard";
import TestimonialsSection from "./components/TestimonialsSection";
import ScreenShotsSection from "./components/ScreenshotsSection";
import ContactSection from "./components/ContactSection"; 



function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
       <button 
          onClick={scrollToTop}
         style={{textAlign:'center',position:'absolute'}}
          className="fixed bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:scale-110"
        >
          Back to Top
        </button>
    </div>
  );
}

export default App;

