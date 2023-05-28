import React, { useState } from 'react';
import "./cookie.css";

const CookiePolicyPopup = () => {
  const [showPopup, setShowPopup] = useState(!document.cookie.includes('cookie_policy_accepted=true'));

  const hidePopup = () => {
    setShowPopup(false);
    document.cookie = 'cookie_policy_accepted=true; path=/; max-age=31536000';
  };

  const disableCrossSiteTracking = () => {
    alert("To disable 'Prevent cross-site tracking', please follow these steps:\n\n1. Open your browser settings.\n2. Navigate to the 'Privacy' or 'Security' section.\n3. Find the option for 'Prevent cross-site tracking'.\n4. Disable the option if it's enabled.\n5. Refresh the page to continue browsing.");
  };

  return (
    showPopup && (
      <div className="cookie-policy-popup">
        <p>
          Acest website utilizează cookie-uri pentru a vă asigura cea mai bună experiență pe site-ul nostru.
          {navigator.doNotTrack === "1" && (
            <span>
              {' '}
              De asemenea, aveți activată funcția de „Prevent cross-site tracking” în browserul dvs.
              <button onClick={disableCrossSiteTracking}>Doriți să dezactivați această funcție?</button>
            </span>
          )}
          {' '}Aflați mai multe. <a href="/despre">aici</a>.
        </p>
        <button onClick={hidePopup}>Am înțeles</button>
      </div>
    )
  );
};

export default CookiePolicyPopup;
