
import "./header2.css";
import background from "./images/head2.jfif";

const Header2 = () => {
    return (
        <>
  <div className="header2" style={{ backgroundImage: `url(${background})` }}>
       
                
                 
     <div className="row no-gutters" id="contact-info-bg-1">
        <div className="col-sm-5 offset-sm-1 p-5 text-light">
          <h2>Ne puteti contacta in urmatoarele intervale </h2>
          
          <br />
          <h4>In timpul saptamanii</h4>
          <p>08:00 - 20:00</p>
          <br />
          <h4>In weekend</h4>
          <p>12:00 – 14:00</p>
         
        </div>
       
        <div className="col-sm-6 p-5 text-light"  id="contact-info-bg-2">
          <h2>Pentu sugesti, oferte, sau suport ne puteti contacta prin:</h2>
          <br />
          <br />
          <h4>Mail</h4>
          <p>contact@lsauto.com</p>
          <br />
          
        </div>
      </div>
          
  </div>
        </>
    );
};
export default Header2;