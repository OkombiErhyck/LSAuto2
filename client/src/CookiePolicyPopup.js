import React, { useState, useEffect } from 'react';
import "./cookie.css";

const CookiePolicyPopup = () => {
  const [showPopup, setShowPopup] = useState(!document.cookie.includes('cookie_policy_accepted=true'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in based on a cookie or authentication status
    const checkLoggedInStatus = () => {
      const isLoggedInCookie = document.cookie.includes('isLoggedIn=true');
      setIsLoggedIn(isLoggedInCookie);
    };

    checkLoggedInStatus();
  }, []);

  const hidePopup = () => {
    setShowPopup(false);
    document.cookie = 'cookie_policy_accepted=true; path=/; max-age=31536000';
  };

  const handleLogin = () => {
    // Perform login logic here
    // Set the login status in the cookie
    document.cookie = 'isLoggedIn=true; path=/; max-age=86400'; // Set the cookie to expire in 24 hours
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    // Clear the login status cookie
    document.cookie = 'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    setIsLoggedIn(false);
  };

  return (
    showPopup && (
      <div className="cookie-policy-popup">
        <p>
          Acest website utilizează cookie-uri pentru a vă asigura cea mai bună experiență pe site-ul nostru.
         
          {' '}Aflați mai multe. <a href="/despre">aici</a>.
        </p>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
        <button onClick={hidePopup}>Am înțeles</button>
      </div>
    )
  );
};

export default CookiePolicyPopup;
