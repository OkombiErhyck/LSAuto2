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

  
  


 
  
  
   
  
  

  // Intersection Observer setup
 

   return(
    
       <div>

<Header/>
      
     
     
        <Details/> 
     

        <About/> 
    
       
      
      
     
        <Details2/>
      
      
      
        <CookiePolicyPopup/> 
      
       
       </div>
     );
};


export default Home;