import React from "react";
import Header from "./header";
import About2 from "./about2";
import Details from "./details";
import About from "./about";
import Details2 from "./details2";
import Header2 from "./header2";
 import CookiePolicyPopup from "./CookiePolicyPopup";
import IndexPage from "./IndexPage";


function Home(){
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