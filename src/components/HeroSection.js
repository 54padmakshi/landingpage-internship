import React from 'react';
import "../cssfiles/HeroSection.css";
import make from "../images/make the best financial decisions.png";
import cum from "../images/Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor..png"
import group from "../images/Group 5.png";
import star3 from "../images/Star 3.png";
import group2 from "../images/Group 35924.png";
import star8 from "../images/Star 8.png";
import frame1 from "../images/Frame 1.png";
import ph2 from "../images/iPhone-13-Pro-Front-2.png";
import ph1 from '../images/iPhone-13-Pro-Front.png';
import ph3 from '../images/iPhone-13-Pro-Front-3.png';

function HeroSection() {
  return (
    <div className='hero'>
      <div className='leftimages'>
      <img src={star3} alt = 'star'/>   
        <p><img style={{marginLeft : '80px'}}  src= {make} alt='Make'/></p> 
        <p><img style={{marginLeft : '80px'}}  src= {cum} alt='cum'/></p> 
        <p><img style={{marginLeft : '80px'}}   src={group} alt='group' /> </p> 
        <img style={{marginLeft : '200px',marginTop: '50px'}}    src={star8} alt = 'star'/>
        <p><img style={{marginLeft : '80px'}}   src={group2} alt='group'/></p>
      </div>
      
    
        <div className='rightimages'>
        <div style={{ position: "relative" }}>
      <img src={frame1} alt="frame" style={{ position: "absolute", top: 0, left: 0 }} />
      <img src={ph1} alt="ph1" style={{ position: "absolute", top: 30, left: 10, margin: '10px' }} />
      <img src={ph2} alt="ph2" style={{ position: "absolute", top: 30, left: 10, margin: '10px' }} />
      <img src={ph3} alt="ph3" style={{ position: "absolute", top: -50, left: -80, margin: '10px' }} />
    </div>
        
        </div>
     


    </div>
  )
}

export default HeroSection

