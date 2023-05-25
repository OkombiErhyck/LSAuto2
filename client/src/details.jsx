import { useEffect, useState } from "react";
import axios from "axios";
import "./IndexPage.css";
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

  const limitedPlaces = shuffleArray(places).slice(0, 10); // display 10 random places

  return (
    <div className="main2"> 
      <div className="container">
        <div className="details container">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4" style={{ overflowX: "scroll", scrollBehavior: "smooth", whiteSpace: "nowrap" , flexWrap: "nowrap"}}>
            {limitedPlaces.length > 0 && limitedPlaces.map(place => ( 
              <Link to={"/place/" + place._id} key={place._id} className="link-no-underline">
                <div className="col" style={{ display: "inline-block", minWidth: "300px" }}>
                  <div className="box card-body p-0 shadow-sm mb-5">
                    {place.photos.length > 0 && (
                      <Image src={place.photos[0]} className="img-fluid" style={{ height: "270px", width: "100%", objectFit: "cover" }}/>
                    )}
                    <div className="box_content">
                      <h4> {place.marca} {place.model}</h4>
                      <div className="row pl-2 pr-2">
                        <div> 
                          {place.putere} cp | {place.anul} | {place.km} km     <h5> {place.title}€</h5>
                        </div>
                        <button style={{ background : "#cccccc00", color : "var(--main)" }} className="btn1">Detalii</button>
                      </div>
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
