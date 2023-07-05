import "./footer.css";
import "../footer2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebook, faIdbadge , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    
    return (
        <>
        
           <footer>
            
           <div className="container py-5" style={{marginBottom: "-8%"}}>
     
     <br/><br/><br/><br/>
     <div className="row">
       <ul>
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
                
                <p>Copyright &copy; LSAuto | 2023 All rights reserved  <a href="/despre" className="nav-link">
                    politici
                  </a></p>
           </footer>
        </>
    );
};
export default Footer;