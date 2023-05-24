import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {

  return (
    <div className="splash-screen">
     <h1>LS<span style={{color:"white"}}>Auto</span> </h1>
      <div className="road">
        <div className="center-line"></div>
      </div>
      <div className="car">
      <div className='smoke'></div>
        <div className="car-top"></div>
        <div className="car-body">
          <div className="wheel wheel1"></div>
          <div className="wheel wheel2"></div>
        </div>
      </div>
      
      Lenes Automobile
    </div>
  );
};

export default SplashScreen;
