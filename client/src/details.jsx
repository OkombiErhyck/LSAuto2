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
                          <div class="col-lg-6 col-sm-6 col-6 text-left" >Rulaj</div>
                     </div>
                     <div className="row pl-2 pr-2">
                     <div class="col-lg-6 col-sm-6 col-6 text-right" ><h6>{place.anul}</h6></div>
                     <div class="col-lg-6 col-sm-6 col-6 text-left" >Anul</div>
                    </div>
                    <div className="row pl-2 pr-2"style={{borderBottom: '1px solid black'}}>
                    <div class="col-lg-6 col-sm-6 col-6 text-right" ><h6>{place.putere }</h6></div>
                    <div class="col-lg-6 col-sm-6 col-6 text-left" >Putere</div>
                    </div>
                    <div className="row pl-2 pr-2">
                    <div class="col-lg-6 col-sm-6 col-6 text-right" ><h5> {place.title}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.798 7.45c.512-.67 1.135-.95 1.702-.95s1.19.28 1.702.95a.75.75 0 001.192-.91C12.637 5.55 11.596 5 10.5 5s-2.137.55-2.894 1.54A5.205 5.205 0 006.83 8H5.75a.75.75 0 000 1.5h.77a6.333 6.333 0 000 1h-.77a.75.75 0 000 1.5h1.08c.183.528.442 1.023.776 1.46.757.99 1.798 1.54 2.894 1.54s2.137-.55 2.894-1.54a.75.75 0 00-1.192-.91c-.512.67-1.135.95-1.702.95s-1.19-.28-1.702-.95a3.505 3.505 0 01-.343-.55h1.795a.75.75 0 000-1.5H8.026a4.835 4.835 0 010-1h2.224a.75.75 0 000-1.5H8.455c.098-.195.212-.38.343-.55z" clipRule="evenodd" />
</svg>
 </h5></div>
                    <div class="col-lg-6 col-sm-6 col-6 text-left" >Pret Net</div>
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
    </div>
  );
};
