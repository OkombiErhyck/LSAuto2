import "./footer.css";
import "./footer2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebook, faIdbadge , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    
    return (
        <>
        
           <footer>
            
          
  
      <div className="footer-container">
        <div className="footer-column">
        <br></br><br></br>
          <h4>Meniu</h4>
          <a href="/" className="nav-link">Acasa</a>
          <a href="/indexpage" className="nav-link"> Anunturi</a>
          <a href="/despre" className="nav-link">
            Politici
          </a>
          <a href="/login" className="nav-link">
                    Log In
                  </a>
                  <a href="/signup" className="nav-link">
                    Sign Up
                  </a>

        </div>
        <div className="footer-column">
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <div className="row" id="row">
       <ul className="ul">
         <li>
         <a href="https://www.tiktok.com/@lsauto.ro">
              <FontAwesomeIcon style={{marginTop: "19px"}} icon={faTiktok} className="fa" />
              <span>  TikTok</span>
            </a>

         </li>
         <li>
           <a href="/contact">
           <FontAwesomeIcon style={{marginTop: "19px"}} icon={faEnvelope } className="fa" />
             <span>  Contact</span>
           </a>
         </li>
         <li>
           <a href="https://www.instagram.com/lsauto.ro/">
           <FontAwesomeIcon style={{marginTop: "19px"}} icon={faInstagram} className="fa" />
             <span>  Instagram</span>
           </a>
         </li>
       </ul>
     </div>
        </div>
      </div>
     

 

                <p>Copyright &copy; LSAuto | 2023 All rights reserved </p>
           </footer>
        </>
    );
};
export default Footer;