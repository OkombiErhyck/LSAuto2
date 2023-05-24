
import React, { useState } from 'react';
import background from "./images/07how-to-buy-anew-car-9.jpg";
import { Link } from 'react-router-dom';


import "./about.css";
const About = () => {
  
    return (
        <>
        


           <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-12 col-md-5 offset-md-1 p-5 align-self-center">
          <h2>Vrei sa iti vinzi masina?</h2>
          <p className="text-muted lead">Platforma noastra ofera solutia perfecta pentru cei care doresc sa isi vanda masina singuri.
          </p>
          <p className="text-muted lead">Listeaza-ti masina astazi si pregateste-te sa gasesti cumparatorul perfect.</p>
          <Link to="/signup"> 
          <button id="bx" className="text-decoration-none text-uppercase h4 " >adauga un anunt</button>
          </Link>
        </div>
        <div className="d-none d-md-block col-md-5 offset-md-1" id="about-bg-1" style={{ backgroundImage: `url(${background})` }}>
        </div>
      </div>
    </div>
        </>
    );
};
export default About