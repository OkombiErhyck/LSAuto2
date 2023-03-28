import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlacePlage.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "./image";
import Details from './details';

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showPerks, setShowPerks] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  useEffect(() => {
    function adjustCarouselImageSize() {
      const images = document.querySelectorAll('.carousel .d-block');
      const windowHeight = window.innerHeight;
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const imageHeight = image.naturalHeight;
        const maxImageHeight = Math.min(windowHeight, imageHeight);
        image.style.maxHeight = `${maxImageHeight}px`;
      }
    }

    // Adjust the carousel image size on mount
    adjustCarouselImageSize();

    // Add a resize event listener to adjust the max-height on window resize
    window.addEventListener('resize', adjustCarouselImageSize);

    // Remove the resize event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', adjustCarouselImageSize);
    }
  }, []);

  if (!place) return "";

  function goBack() {
    window.history.go(-1);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const trimDescription = (description) => {
    if (description.length > 400) {
      return description.substring(0, 400) + '...';
    }
    return description;
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: place.title,
        text: place.description,
        url: window.location.href,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
   
  return (
    <>
      <div className="main3">
        <div className="carousel-container">
          <Carousel className="carousel" style={{borderBottom: "solid 1px var(--main)"}}>
            {place.photos?.map((photo, index) => (
              <Carousel.Item key={index}>
                <Image
                  className="d-block w-100"
                  src={photo}
                  alt={"Slide " + (index + 1)}
                  style={{ objectFit: "contain",maxHeight: "546px" }}
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
              color: "var(--main)",
              fontWeight: "bold",
              textAlign: "left",
              marginBottom: 0,
            }}
          >
           <span style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "left",
              marginBottom: 0,
            }}>  {place.marca} {place.model} </span> €{place.title}
          </h2>
          <div style={{color:"wheat"}}> 
      {place.putere} cp | {place.anul} | {place.km} km  <button onClick={handleShare} style={{
    padding: '10px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }}>Share</button>


  </div>
        </div>
    <br></br>
     
<div className="containere">

<div className="infoContainer">
 
  <div className="infoColumn">
  <h3>Detalii</h3>
  <br></br>
    <div className="infoRow">
    
      <p style={{color:"var(--main)"}}>Culoare  </p>
      
      <p>{place.culoare}</p>
    </div>
    <div className="infoRow">
      <p style={{color:"var(--main)"}}>Combustibil</p>
      <p>{place.combustibil}</p>
    </div>
    <div className="infoRow">
      <p style={{color:"var(--main)"}}>Tractiune</p>
      <p>{place.tractiune}</p>
    </div>
  </div>
  <div className="infoColumn">
    <div className="infoRow">
      <p style={{color:"var(--main)"}}>Transmisie</p>
      <p>{place.transmisie}</p>
    </div>
    <div className="infoRow">
      <p style={{color:"var(--main)"}}>Norma Euro</p>
      <p>{place.normaeuro}</p>
    </div>
    <div className="infoRow">
      <p style={{color:"var(--main)"}}>Serie Sasiu</p>
      <p >{place.seriesasiu}</p>
    </div>
    <div className="infoRow">
      <p style={{color:"var(--main)"}}>Caroserie</p>
      <p>{place.caroserie}</p>
    </div>
    <div className="infoRow">
      <p style={{color:"var(--main)"}}>Cilindree</p>
      <p>{place.cilindre}cc</p>
    </div>
  </div>
  
</div>

 
   
<div className="contContainer">
<h3>CONTACT</h3>
   
   <p><span style={{color:"var(--main)"}}>Nume:</span>     {place.nume}</p> 
   
   <p><span style={{color:"var(--main)"}}>Telefon:</span>    {place.telefon}</p>
    
   <p><span style={{color:"var(--main)"}}>Email: </span>     {place.mail}</p>
</div>

</div>
<div className="desContainer">
      <h3>
        <button onClick={() => setShowPerks(!showPerks)}>
          {showPerks ? 'X' : 'Optiuni'}
        </button>
      </h3>
      <br />
      {showPerks && (
        <ul className="perksList noDotList">
          {place.perks.map((perk, index) => (
            <li key={index}>{perk}</li>
          ))}
        </ul>
      )}
      <h3>DESCRIERE</h3>
      <div className="descriptionContainer">
        <p style={{ whiteSpace: 'pre-line'  }}>
          {showMore ? place.description : trimDescription(place.description)}
        </p>
        {place.description.length > 400 && !showMore && (
          <button onClick={handleShowMore}>Show more</button>
        )}
      </div>
    </div>

  <br />
   <Details  onOpen={handleScrollToTop}  /> 
</div>
  </div>
    </>
  );
}


 
