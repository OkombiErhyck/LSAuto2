import { useEffect, useState } from "react";
import axios from "axios";
import "./IndexPage.css"
import { Link } from "react-router-dom";
import Image from "./image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCalendarAlt,faRoad } from '@fortawesome/free-solid-svg-icons';


export default function Details() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get("/places").then(response => { 
        setPlaces(response.data);
      });
    };
    fetchData(); // Fetch data initially
    const intervalId = setInterval(fetchData, 10 * 60 * 1000); // Fetch data every 10 minutes
    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  const limitedPlaces = shuffleArray(places).slice(0, 6); // display 3 random posts

  return(
    <div className="main2"> 
      <div className="container">
        <div className="details container">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
            {limitedPlaces.length > 0 && limitedPlaces.map(place => ( 
              <Link to={"/place/" + place._id} key={place._id} className="link-no-underline" >
              <div className="col ">
                  <div className="box card-body p-0  shadow-sm mb-5">
                    {place.photos.length > 0 && (
                      <Image src={place.photos[0]} className="img-fluid" style={{height: "270px", width: "100%", objectFit: "cover"}}/>
                    )}
                    <div className="box_content">
                     <h4> {place.marca} {place.model}</h4>
                     <div className="row pl-2 pr-2">
    <div
      className="col-lg-6 col-sm-6 col-6 text-left"
      style={{ fontSize: "0.9em", color: "#636363" }}
    >
       <span style={{ color:"var(--main)", width: 16, textAlign: "center" }}>
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
      </span>{" "}
      an
    </div>
    <div
      className="col-lg-6 col-sm-6 col-6 text-right"
      style={{ fontWeight: 500 }}
    >
      {place.anul}
    </div>
  </div>
  <div className="row pl-2 pr-2">
    <div
      className="col-lg-6 col-sm-6 col-6 text-left"
      style={{ fontSize: "0.9em", color: "#636363" }}
    >
       <span style={{ color:"var(--main)", width: 16, textAlign: "center" }}>
        <FontAwesomeIcon icon={faRoad} className="mr-2" />
      </span>{" "}
      rulaj
    </div>
    <div
      className="col-lg-6 col-sm-6 col-6 text-right"
      style={{ fontWeight: 500 }}
    >
      {place.km} km
    </div>
  </div>
  <div className="row pl-2 pr-2">
    <div
      className="col-lg-6 col-6 text-left"
      style={{ fontSize: "0.9em", color: "#636363" }}
    >
       <span style={{ color:"var(--main)", width: 16, textAlign: "center" }}>
        <FontAwesomeIcon icon={faBox} className="mr-2" />
      </span>{" "}
      putere
    </div>
    <div className="col-lg-6 col-6 text-right" style={{ fontWeight: 500 }}>
      {place.putere} cp
    </div>
  </div>
  <div
    className="row pl-2 pr-2"
    style={{
      fontSize: "1em",
      fontWeight: "bold",
      borderTop: "1px solid #d4d4d4",
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10
    }}
  >
    <div className="col-lg-7 col-7"> Pret Net </div>
    <div className="col-lg-5 col-5 text-right"> {place.title}€</div>
  </div>

                     
                      <button style={{background : "var(--main)"}} className="btn1">Detalii</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="center">
      <Link to="/IndexPage" className="btn">
        Vezi toate <span>anunturile</span>
      </Link>
    </div>
    </div>
  );
};
