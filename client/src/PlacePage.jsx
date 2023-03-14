import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlacePlage.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "./image";


export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showPerks, setShowPerks] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";
   
    function goBack() {
      window.history.go(-1);
    }


     
  return (
    <> 
    <div className="main3">
      <div className="carousel-container">
        <Carousel className="carousel">
          {place.photos?.map((photo, index) => (
            <Carousel.Item key={index}>
              <Image
                className="d-block w-100"
                src={photo}
                alt={"Slide " + (index + 1)}
                style={{ objectFit: "contain", height: "100vh" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
        
        
      
      
    
    <div className="m2">
    <div
          id="price"
          className="container"
           
        >
          <h2
            className="h_det"
            style={{
              color: "#e26c18",
              fontWeight: "bold",
              textAlign: "left",
              marginBottom: 0,
            }}
          >
           <span style={{
              color: "#ffff",
              fontWeight: "bold",
              textAlign: "left",
              marginBottom: 0,
            }}>  {place.marca} {place.model} </span> €{place.title}
          </h2>
    
        </div>
    <br></br>
     
<div className="containere">

<div className="infoContainer">

  <div className="infoColumn">
  <h3>Detalii</h3>
  <br></br>
    <div className="infoRow">
    
      <h6>Culoare  </h6>
      
      <h6>{place.culoare}</h6>
    </div>
    <div className="infoRow">
      <h6>Combustibil</h6>
      <h6>{place.combustibil}</h6>
    </div>
    <div className="infoRow">
      <h6>Tractiune</h6>
      <h6>{place.tractiune}</h6>
    </div>
  </div>
  <div className="infoColumn">
    <div className="infoRow">
      <h6>Transmisie</h6>
      <h6>{place.transmisie}</h6>
    </div>
    <div className="infoRow">
      <h6>Norma Euro</h6>
      <h6>{place.normaeuro}</h6>
    </div>
    <div className="infoRow">
      <h6>Serie Sasiu</h6>
      <h6>{place.seriesasiu}</h6>
    </div>
    <div className="infoRow">
      <h6>Caroserie</h6>
      <h6>{place.caroserie}</h6>
    </div>
    <div className="infoRow">
      <h6>Cilindree</h6>
      <h6>{place.cilindre}cc</h6>
    </div>
  </div>
  
</div>

 
   
<div className="contContainer">
<h3>CONTACT</h3>
   <br></br>
   <h6><span style={{color:"var(--main)"}}>Nume:</span>     {place.nume}</h6> 
   
   <h6><span style={{color:"var(--main)"}}>Telefon:</span>    {place.telefon}</h6>
    
   <h6><span style={{color:"var(--main)"}}>Email: </span>     {place.mail}</h6>
</div>

</div>
<div className="desContainer  "   >
<h3>
          
          <button onClick={() => setShowPerks(!showPerks)}>
            {showPerks ? 'X' : '   Optiuni'}
          </button>
        </h3>
        <br />
        {showPerks && 
  <ul className="perksList">
    {place.perks.map((perk, index) => (
      <li key={index}>{perk}</li>
    ))}
  </ul>
}
<h3>DESCRIERE</h3>
<p style={{ whiteSpace: 'pre-line' }}>{place.description}</p>
</div>
 <br></br>
  
 </div>
</div>
    </>
  );
}

// Add a media query to set the image width to 50% on mobile devices
 
