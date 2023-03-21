import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {

  return (
    <div className="splash-screen">
      <div className="road">
        <div className="center-line"></div>
      </div>
      <div className="car">
        <div className="car-top"></div>
        <div className="car-body">
          <div className="wheel wheel1"></div>
          <div className="wheel wheel2"></div>
        </div>
      </div>
      <h1>LSAuto</h1>
    </div>
  );
};

export default SplashScreen;
