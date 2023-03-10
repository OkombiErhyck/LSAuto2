import About2Img from "./images/trust.png";
import About3Img from "./images/display.png";
import About4Img from "./images/businessman.png";
import "./about2.css";
const About2 = () => {
    return (
        <>
           <div className="container1 py-5">
  <div className="row">
    <div className="col-6 offset-3 text-center py-5">
      <h1 className="font-weight-bold">Ce Ofera <span>LS</span>Auto?</h1>
      <p className="text-muted lead" id="p">Locul potrivit pentru cei care doresc să-și vândă mașina. Încrederea și transparența sunt valorile noastre de bază, iar serviciile noastre sunt profesionale.   Alegeți LSAuto pentru o experiență de vânzare a mașinii fără stres.</p>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-4 text-center">
      <img className="img-fluid py-3" src={About3Img}  alt="coffe shop logo" />
      <p className="h4 font-weight-bold">Transparenta</p>
    </div>
    <div className="col-sm-4 text-center">
      <img className="img-fluid py-3" src={About2Img} alt="coffe shop logo" />
      <p className="h4 font-weight-bold">Incredere</p>
    </div>
    <div className="col-sm-4 text-center">
      <img className="img-fluid py-3" src={About4Img} alt="coffe shop logo" />
      <p className="h4 font-weight-bold">Profesionalism</p>
    </div>
  </div>
</div>

        </>
    );
};
export default About2