import React, { useState, useEffect } from 'react';
import './banner.css'; // Import your CSS file for styling
import emag1 from "./images/emag 1.jpg";
import emag2 from "./images/emag2.jpg";
import rca1 from "./images/rca1.jpg";

const Banner = () => {

const [isVisible, setIsVisible] = useState(true);
const [imageURL, setImageURL] = useState(emag1); // Set the initial image URL
const [linkURL, setLinkURL] = useState('https://l.profitshare.ro/l/12237876'); // Set the initial link URL
const [reappearCount, setReappearCount] = useState(0);

const handleCloseBanner = () => {
  setIsVisible(false);
  document.body.style.marginTop = '0';
  // Set a timer to make the banner reappear after 60 seconds
  setTimeout(() => {
    if (reappearCount < 3) {
      setIsVisible(true);
      // Update image and link URLs when the banner reappears
      if (reappearCount % 2 === 0) {
        setImageURL(rca1);
        setLinkURL('https://l.profitshare.ro/l/12238073');
      } else {
        setImageURL(emag2);
        setLinkURL('https://l.profitshare.ro/l/12238026');
      }
      setReappearCount(reappearCount + 1);
    } else {
      // Reset after reappearing 3 times
      setReappearCount(0);
    }
  }, 20000);
};

  // Use useEffect to reset the margin and timer when isVisible changes
  useEffect(() => {
    if (isVisible) {
      if (window.innerWidth <= 768) {
        // On mobile screens (width <= 768px), set margin-top to 100px
        document.body.style.marginTop = '100px';
      } else {
        // On larger screens, set margin-top to 250px
        document.body.style.marginTop = '250px';
      }
    }
  }, [isVisible]);

  return isVisible ? (
    <div className="banner">
      <button className="banner-close-button" onClick={handleCloseBanner}>
        &times;
      </button>
      <a href={linkURL} target="_blank" rel="noopener noreferrer">
        <img
          src={imageURL}
          alt="Your Image"
          className="banner-image"
        />
      </a>
    </div>
  ) : null;
};

export default Banner;
