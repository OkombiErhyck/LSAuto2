import React from "react";
import Anunt from "./images/add.png";
import toate from "./images/grid.png";
import PlacesPage from "./images/approved.png";
import Logout from "./images/logout.png";
import "./userpage.css";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Userpage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  if (!ready) {
    return "loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/"} />;
  }

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  function vibrateButton() {
    if (navigator.vibrate) {
      // Check if the Vibration API is supported
      navigator.vibrate([100]); // Vibrate for 100 milliseconds
    } else if (window.Notification && window.Notification.permission === "granted") {
      // Fallback to using Web Notifications API for vibration
      const notification = new window.Notification("", {
        silent: true,
        vibrate: [100]
      });
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <>
      <div className="userbox">
        <div className="usercontent">
          <h1>
            Bine ai venit,<span style={{ color: "var(--main)" }}> {user.name}</span>{" "}
          </h1>

          <div className="details container">
            <div className="row">
              <div className="col-lg-4 col-xs-6">
                <div className="box card-body p-0 shadow-sm mb-5">
                  <div className="box_content">
                    <a href="/placespage">
                      <img src={PlacesPage} className="img-fluid" alt="" />
                      <button className="btn1" onClick={vibrateButton}>
                        Anunturile Mele
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xs-6">
                <div className="box card-body p-0 shadow-sm mb-5">
                  <div className="box_content">
                    <a href="/write">
                      <img src={Anunt} className="img-fluid" alt="" />
                      <button className="btn1" onClick={vibrateButton}>
                        Adauga un Anunt
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xs-6">
                <div className="box card-body p-0 shadow-sm mb-5">
                  <div className="box_content">
                    <a href="/IndexPage">
                      <img src={toate} className="img-fluid" alt="" />
                      <button className="btn1" onClick={vibrateButton}>
                        Toate Anunturile
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xs-6">
                <div onClick={logout} className="box card-body p-0 shadow-sm mb-5">
                  <div className="box_content">
                    <img src={Logout} className="img-fluid" alt="" />
                    <span onClick={vibrateButton} className="btn1">
                      Iesire din Cont
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userpage;
