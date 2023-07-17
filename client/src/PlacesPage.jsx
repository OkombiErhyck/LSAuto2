import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Myadds.css';
import Image from './image';
import View from './images/view.png';
import { Link } from 'react-router-dom';

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  const [showPlaces, setShowPlaces] = useState(true);

  useEffect(() => {
    axios.get('/user-places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    axios.delete(`/places/${id}`).then(() => {
      setPlaces(prevPlaces => prevPlaces.filter(place => place._id !== id));
    });
  };

  return (
    <>
      <div className="top"></div>

      <div className="main2">
        <div className="container">
          <div className="details container">
            <button onClick={() => setShowPlaces(!showPlaces)}>
              {showPlaces ? 'Hide Places' : 'Show Places'}
            </button>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {showPlaces &&
                places.length > 0 &&
                places.map(place => (
                  <Link className="link-no-underline" to={"/write/" + place._id} key={place._id}>
                    <div className="col">
                      <div className="box card-body p-0 shadow-sm mb-5">
                        {place.photos.length > 0 && (
                          <Image
                            src={place.photos[0]}
                            className="img-fluid"
                            style={{ height: "270px", width: "100%", objectFit: "cover" }}
                          />
                        )}
                        <div className="box_content">
                          <h4>
                            {place.marca} {place.model}
                          </h4>
                          <div className="row pl-2 pr-2">
                            <div>
                              {place.putere} cp | {place.anul} | {place.km} km <h5>{place.title}€</h5>
                            </div>
                            <div> <img src={View} style={{height:"20px", width:"auto"}} alt=""/> {place.clicks}</div>
                            <button style={{ background: "#cccccc00", color: "var(--main)" }} className="btn1">
                              Editeaza
                            </button>
                            <button style={{ backgroundColor: "red" }} className="btn1" onClick={(event) => handleDelete(event, place._id)}>
                              Sterge
                            </button>
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
    </>
  );
}
