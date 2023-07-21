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

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('/places').then(response => {
      const sortedPlaces = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPlaces(sortedPlaces);
      setLoading(false); // Set loading to false when the data is fetched
    });
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
  

  const handlePlaceClick = async (placeId) => {
    try {
      // Get the place object from the current state
      const clickedPlace = places.find((place) => place._id === placeId);
      if (!clickedPlace) {
        return; // Place not found, handle error if needed
      }
  
      // Increment the click count by 1
      const updatedPlace = { ...clickedPlace, clickCount: clickedPlace.clickCount + 1 };
  
      // Update the place in the state
      const updatedPlaces = places.map((place) => {
        if (place._id === placeId) {
          return updatedPlace;
        }
        return place;
      });
      setPlaces(updatedPlaces);
  
      // Send a PUT request to update the click count in the backend (optional)
      await axios.put(`/places/${placeId}/clicks`, { clicks: updatedPlace.clickCount });
  
      // Handle success if needed
    } catch (error) {
      console.error("Error updating click count:", error);
      // Handle error if needed
    }
  };
  
  return(
    <div className="main2"> 
    <h4>Cele mai vizualizate anunturi</h4>
      <div className="container">
      {loading ? (
          <div className="loader">
        <div className="spinner"> </div>
        <span className="loading-text">Lenes Automobile</span>
      </div>
       ) : (
        <div className="details container">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
            {limitedPlaces.length > 0 && limitedPlaces.map(place => ( 
              <Link to={"/place/" + place._id} key={place._id} className="link-no-underline" onClick={() => handlePlaceClick(place._id)}>
              <div className="col ">
                  <div className="box card-body p-0  shadow-sm mb-5">
                    {place.photos.length > 0 && (
                      <Image src={place.photos[0]} className="img-fluid" style={{height: "270px", width: "100%", objectFit: "cover"}}/>
                    )}
                    <div className="box_content">
                     <h5> {place.marca} {place.model}</h5>
                     <div className="row pl-2 pr-2">
    <div > 
      {place.putere} cp | {place.anul} | {place.km} km     <h5> {place.title}€</h5>
  </div>
 
                     
                      <button style={{background : "#cccccc00", color : "var(--main)"}} className="btn1"  onClick={() => handlePlaceClick(place._id)} >Detalii</button>
                    </div>
                  </div>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        )}
      </div>
      <div className="center">
      <Link to="/IndexPage" className="btn">
        Vezi toate <span>anunturile</span>
      </Link>
    </div>
    </div>
  );
};
