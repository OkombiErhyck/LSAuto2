import { useEffect, useState } from "react";
import axios from "axios";
import "./IndexPage.css"
import { Link } from "react-router-dom";
import Image from "./image";

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

  const limitedPlaces = shuffleArray(places).slice(0, 3); // display 3 random posts

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
                          <div class="col-lg-6 col-sm-6 col-6 text-right" ><h6> {place.km}</h6></div>
                          <div class="col-lg-6 col-sm-6 col-6 text-left" >Kilometri</div>
                     </div>
                     <div className="row pl-2 pr-2">
                     <div class="col-lg-6 col-sm-6 col-6 text-right" ><h6>{place.anul}</h6></div>
                     <div class="col-lg-6 col-sm-6 col-6 text-left" >Anul</div>
                    </div>
                    <div className="row pl-2 pr-2">
                    <div class="col-lg-6 col-sm-6 col-6 text-right" ><h6>{place.putere }</h6></div>
                    <div class="col-lg-6 col-sm-6 col-6 text-left" >Putere</div>
                    </div>
                      <h6> {place.title}€ </h6>
                     
                      <button style={{background : "var(--main)"}} className="btn1">Detalii</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
