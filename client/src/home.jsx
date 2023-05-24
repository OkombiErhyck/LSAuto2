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

  /*const [showPopup, setShowPopup] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 1600) {
      setShowPopup(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);*/


  const about2Ref = useRef(null);
  const aboutRef = useRef(null);
  const detailsRef = useRef(null);
  const header2Ref = useRef(null);
  const cookiePopupRef = useRef(null);
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

    
    observer.observe(about2Ref.current);
    observer.observe(aboutRef.current);
    observer.observe(detailsRef.current);
    observer.observe(header2Ref.current);
    observer.observe(cookiePopupRef.current);
    observer.observe(details2Ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

   return(
    
       <div>

          <Header/>
         
          <About2/>
          <Details/>
          <About/> 
          <Details2/>
          <Header2/>
           <CookiePolicyPopup/> 
         
       </div>
     );
};


export default Home;