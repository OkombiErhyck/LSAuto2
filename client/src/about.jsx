
import React from 'react';
import background from "./images/07how-to-buy-anew-car-9.jpg";
import { useHistory } from 'react-router-dom';


import "./about.css";
const About = () => {

  const history = useHistory();

  const handleClick = () => {
    history.push('/signup');
  };
    return (
        <>
           <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-12 col-md-5 offset-md-1 p-5 align-self-center">
          <h2>Vrei sa it vinzi masina?</h2>
          <p className="text-muted lead">Platforma noastra ofera solutia perfecta pentru cei care doresc sa isi vanda masina singuri.
          </p>
          <p className="text-muted lead">Listeaza-ti masina astazi si pregateste-te sa gasesti cumparatorul perfect.</p>
          
          <button id="bx" className="text-decoration-none text-uppercase h4 pulsate" onClick={handleClick}>adauga un anunt</button>
        </div>
        <div className="d-none d-md-block col-md-5 offset-md-1" id="about-bg-1" style={{ backgroundImage: `url(${background})` }}>
        </div>
      </div>
    </div>
        </>
    );
};
export default About