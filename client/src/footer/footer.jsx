import "./footer.css";
import "../footer2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebook, faIdbadge , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const history = useHistory();

  const handleClick = () => {
    history.push('/contact'); // Replace '/contact' with the actual route to your contact component
  };
    return (
        <>
        
           <footer>
            
            
                <p>Copyright &copy; LSAuto | 2023 All rights reserved  <a href="/despre" className="nav-link">
                    politici
                  </a></p>
           </footer>
        </>
    );
};
export default Footer;