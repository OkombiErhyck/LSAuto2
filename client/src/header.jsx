import HeaderImg from "./images/1.jpeg";
import "./header.css";
import { Link } from "react-router-dom";
import Credit from "./images/credit.png";

const Header = () => {

     

    
  return (
    <>
      <div className="header">
        <div className="img">
          <div>
            <img src={HeaderImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="logo">
          <h1>LS</h1>
        </div>
        <div className="Content">
          <h2>
            Gaseste-ti masina <span>potrivita</span> !
          </h2>

      
      <Link to="/IndexPage" className="btn">
           Cauta 
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default Header;
