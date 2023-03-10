import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IndexPage.css"
import { Link } from "react-router-dom";
import Image from "./image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCalendarAlt,faRoad } from '@fortawesome/free-solid-svg-icons';




export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage, setPlacesPerPage] = useState(9);
  const [selectedMarca, setSelectedMarca] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedAnul, setSelectedAnul] = useState("");
  const [selectedCombustibil, setSelectedCombustibil] = useState("");
  const [selectedPutere, setSelectedPutere] = useState("");
  const [selectedKm, setSelectedKm] = useState("");
  const [selectedKmMin, setSelectedKmMin] = useState("");
  const [selectedKmMax, setSelectedKmMax] = useState("");
  const [selectedTitleMin, setSelectedTitleMin] = useState("");
  const [selectedTitleMax, setSelectedTitleMax] = useState("");


  const data = [
    {
      id: 1,
      marca: "Abarth",
      model: "124 Spider",
      title: "Abarth 124 Spider",
      // ... other details
    },
    {
      id: 2,
      marca: "Abarth",
      model: "595",
      title: "Abarth 595",
      // ... other details
    },
    {
      id: 3,
      marca: "Alfa Romeo",
      model: "Giulia",
      title: "Alfa Romeo Giulia",
      // ... other details
    },
    {
      id: 4,
      marca: "Alfa Romeo",
      model: "Stelvio",
      title: "Alfa Romeo Stelvio",
      // ... other details
    },
    // ... other places
  ];


  useEffect(() => {
    axios.get("/places").then(response => { 
      setPlaces(response.data);
    });
  }, []);

  // Calculate the index of the last place to display
  const lastPlaceIndex = currentPage * placesPerPage;
  // Calculate the index of the first place to display
  const firstPlaceIndex = lastPlaceIndex - placesPerPage;
  
  // Filter the places by marca and anul
  const filteredPlaces = places.filter(place => (
    (selectedMarca === "" || place.marca === selectedMarca) &&
    (selectedModel === "" || place.model === selectedModel) &&
    (selectedAnul === "" || place.anul === selectedAnul)&&
    (selectedCombustibil === "" || place.combustibil === selectedCombustibil)&&
    (selectedPutere === "" || (Number(place.putere) >= Number(selectedPutere) && Number(place.putere) < Number(selectedPutere) + 100))&&
    (selectedKmMin === "" || place.km >= Number(selectedKmMin)) && (selectedKmMax === "" || place.km <= Number(selectedKmMax))&&
    (selectedTitleMin === "" || place.title >= Number(selectedTitleMin)) &&
    (selectedTitleMax === "" || place.title <= Number(selectedTitleMax))
    ));

  // Get the current page's places
  const currentPlaces = filteredPlaces.slice(firstPlaceIndex, lastPlaceIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredPlaces.length / placesPerPage);

  // Change the current page
  
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  };
  // Handle marca selection
  const handleMarcaSelect = (event) => setSelectedMarca(event.target.value);
  const handleModelSelect = (event) => setSelectedModel(event.target.value);
  // Handle anul selection
  const handleAnulSelect = (event) => setSelectedAnul(event.target.value);


  const handleCombustibilSelect = (event) => setSelectedCombustibil(event.target.value);

  const handlePutereSelect = (event) => setSelectedPutere(event.target.value);

  const handleKmSelect = (event) => setSelectedKm(event.target.value);

  const handleKmMinSelect = (event) => setSelectedKmMin(event.target.value);
  
  const handleKmMaxSelect = (event) => setSelectedKmMax(event.target.value);
  
  const resetFilters = () => {
    setSelectedMarca("");
    setSelectedModel("");
    setSelectedAnul("");
    setSelectedCombustibil("");
    setSelectedPutere("");
    setSelectedKm("");
    setSelectedKmMin("");
    setSelectedKmMax("");
    setSelectedTitleMin("");
    setSelectedTitleMax("");
  };


  const kmArray = [];
  for (let km = new Date().getFullYear(); km >= 0; km--) {
 kmArray.push(km);
  }


  return (<> 
  <div className="top"></div>
    <div className="main2"> 
      <div className="container">
        <div className="filter-container">
          <div className="filter-item">
            <label htmlFor="marca-select">Marca </label>
            <select id="marca-select" value={selectedMarca} onChange={handleMarcaSelect}>
            <option value="">Toate</option>
            <option value="Abarth">Abarth</option>
            <option value="Acura">Acura</option>
    <option value="Alfa Romeo">Alfa Romeo</option>
    <option value="Audi">Audi</option>
    <option value="Bentley">Bentley</option>
    <option value="BMW">BMW</option>
    <option value="Bugatti">Bugatti</option>
    <option value="Buick">Buick</option>
    <option value="Cadillac">Cadillac</option>
    <option value="Chevrolet">Chevrolet</option>
    <option value="Chrysler">Chrysler</option>
    <option value="Citroen">Citroen</option>
    <option value="Dacia">Dacia</option>
    <option value="Daewoo">Daewoo</option>
    <option value="Daihatsu">Daihatsu</option>
    <option value="Dodge">Dodge</option>
    <option value="Ferrari">Ferrari</option>
    <option value="Fiat">Fiat</option>
    <option value="Ford">Ford</option>
    <option value="GMC">GMC</option>
    <option value="Honda">Honda</option>
    <option value="Hyundai">Hyundai</option>
    <option value="Infiniti">Infiniti</option>
    <option value="Isuzu">Isuzu</option>
    <option value="Jaguar">Jaguar</option>
    <option value="Jeep">Jeep</option>
    <option value="Kia">Kia</option>
    <option value="Lamborghini">Lamborghini</option>
    <option value="Lancia">Lancia</option>
    <option value="Land Rover">Land Rover</option>
    <option value="Lexus">Lexus</option>
    <option value="Lincoln">Lincoln</option>
    <option value="Lotus">Lotus</option>
    <option value="Maserati">Maserati</option>
    <option value="Mazda">Mazda</option>
    <option value="Mercedes-Benz">Mercedes-Benz</option>
    <option value="MG">MG</option>
    <option value="Mini">Mini</option>
    <option value="Mitsubishi">Mitsubishi</option>
    <option value="Nissan">Nissan</option>
    <option value="Opel">Opel</option>
    <option value="Peugeot">Peugeot</option>
    <option value="Porsche">Porsche</option>
    <option value="Renault">Renault</option>
    <option value="Rolls-Royce">Rolls-Royce</option>
    <option value="Rover">Rover</option>
    <option value="Saab">Saab</option>
    <option value="Seat">Seat</option>
    <option value="Skoda">Skoda</option>
    <option value="Smart">Smart</option>
    <option value="SsangYong">SsangYong</option>
<option value="Subaru">Subaru</option>
<option value="Suzuki">Suzuki</option>
<option value="Tesla">Tesla</option>
<option value="Toyota">Toyota</option>
<option value="Volkswagen">Volkswagen</option>
<option value="Volvo">Volvo</option>
 
 
            </select>
          </div>

          <div className="filter-item">
          <label htmlFor="model-select">Model</label>
      <select id="model-select" value={selectedModel} onChange={handleModelSelect}>
        <option value="">Toate</option>
        {filteredPlaces.map(place => (
          <option key={place.id} value={place.model}>{place.model}</option>
        ))}
      </select>
    </div>
          <div className="filter-item">
            <label htmlFor="anul-select">Anul </label>
            <select id="anul-select" value={selectedAnul} onChange={handleAnulSelect}>
              <option value="">Toate</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
         </select>
          </div>


          <div className="filter-item">
  <label htmlFor="title-min-select">Pret de la</label>
  <input id="title-min-select" type="number" value={selectedTitleMin} onChange={(event) => setSelectedTitleMin(event.target.value)} />
  <span>&euro;</span>
</div>
<div className="filter-item">
  <label htmlFor="title-max-select">pana la</label>
  <input id="title-max-select" type="number" value={selectedTitleMax} onChange={(event) => setSelectedTitleMax(event.target.value)} />
  <span>&euro;</span>
</div>
          
        
          

          <div className="filter-item">
          <label htmlFor="anul-max-input">Km de la</label>
<input id="km-min-input" type="text" value={selectedKmMin} onChange={(e) => setSelectedKmMin(e.target.value)} />
  
    </div>
    <div className="filter-item">
    <label htmlFor="anul-max-input">pana la</label>
<input id="km-max-input" type="text" value={selectedKmMax} onChange={(e) => setSelectedKmMax(e.target.value)} />
  </div>
  <div className="filter-item">
            <label htmlFor="putere-select">Putere </label>
            <select id="putere-select" value={selectedPutere} onChange={handlePutereSelect}>
              <option value="">Toate</option>
              <option value="10"> 10cp - 99cp</option>
              <option value="100">100cp - 199cp</option>
              <option value="200">200cp - 299cp</option>
              <option value="300">300cp - 399cp</option>
              <option value="400">400cp - 499cp</option>
              <option value="500">500cp - 599cp</option>
              <option value="600">600cp -699cp</option>
              <option value="700">700cp -799cp</option>
         </select>
          </div>

          <div className="filter-item">
            <label htmlFor="combustibil-select">Combustibil </label>
            <select id="combustibil-select" value={selectedCombustibil} onChange={handleCombustibilSelect}>
              <option value="">Toate</option>
              <option value="motorina">motorina</option>
              <option value="benzina">benzina</option>
              <option value="gaz">gaz</option>
              <option value="hibrid-benzina">hibrid-benzina</option>
              <option value="hibrid-motorina">hibrid-motorina</option>
         </select>
          </div>
          <div className="filter-item">
        <button onClick={resetFilters}>Reset</button>
      </div>
    </div>
    
        </div>
        <div className="details container">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
          
            {currentPlaces.length > 0 && currentPlaces.map(place => ( 
              <Link to={"/place/" + place._id} key={place._id} className="link-no-underline">
                <div className="col ">
                  <div className="box card-body p-0  shadow-sm mb-5">
                    {place.photos.length > 0 && (
                      <Image src={ place.photos[0]} className="img-fluid" style={{height: "270px", width: "100%", objectFit: "cover"}}/>
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
    <div className="col-lg-5 col-5 text-right"> {place.title}???</div>
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
      <div className="pagination">
        <ul>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <li key={pageNumber}>
              <button onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
            </li>
          ))}
        </ul>
      </div>
     
    </>
  );
};
