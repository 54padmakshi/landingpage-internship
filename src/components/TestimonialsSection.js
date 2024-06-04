import React from 'react';
import "../cssfiles/Testimonials.css";
import group4 from '../images/Group 1000002334.png';
import group5 from '../images/Group 1000002355.png';

function TestimonialsSection() {
  return (
    <div className='testi' id="testi">
     <div> <img  style={{marginLeft : '60px'}}   src={group4} alt='group4'/></div> 
     <div> < img  style={{marginLeft : '80px'}}   src={group5} alt='group5' /></div>
    </div>
  )
}

export default TestimonialsSection