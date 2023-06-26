import React, { useState, useEffect, useRef } from 'react';
import Header from "./header";
import About2 from "./about2";
import Details from "./details";
import About from "./about";
import Details2 from "./details2";
import Header2 from "./header2";
 import CookiePolicyPopup from "./CookiePolicyPopup";
import IndexPage from "./IndexPage";
import SplashScreen from "./SplashScreen";
import Popup from "./Popup";
import { gsap } from 'gsap';

function Home(){

  
  


 
  const aboutRef = useRef(null);
  const detailsRef = useRef(null);
   
  
  const details2Ref = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, y: 0, duration: 1 });
          observer.unobserve(entry.target);
        }
      });
    }, options);

    
   
    observer.observe(aboutRef.current);
    observer.observe(detailsRef.current);
   
  
    observer.observe(details2Ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

   return(
    
       <div>

<Header/>
      
     
      <div ref={detailsRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
        <Details/> 
      </div>
      <div ref={aboutRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
        <About/> 
      </div>
       
      
      
      <div ref={details2Ref} style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <Details2/>
      </div>
      
      
        <CookiePolicyPopup/> 
      
       
       </div>
     );
};


export default Home;