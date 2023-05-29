import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Myadds.css';
import Image from './image';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { incrementClickCount } from './actions';

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/user-places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    axios.delete(`/places/${id}`).then(() => {
      setPlaces((prevPlaces) => prevPlaces.filter((place) => place._id !== id));
    });
  };

  const handlePlaceClick = (id) => {
    dispatch(incrementClickCount(id));
  };

  return (
    <>
      <div className="top"></div>
      <div className="main2">
        <div className="container">
          <div className="details container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {places.length > 0 &&
                places.map((place) => (
                  <Link className="link-no-underline" to={"/write/" + place._id} key={place._id}>
                    <div className="col">
                      <div className="box card-body p-0  shadow-sm mb-5" onClick={() => handlePlaceClick(place._id)}>
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
                            <button style={{ background: "#cccccc00", color: "var(--main)" }} className="btn1">
                              Detalii
                            </button>
                            <button
                              style={{ color: "red" }}
                              className="btn1"
                              onClick={(event) => handleDelete(event, place._id)}
                            >
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
