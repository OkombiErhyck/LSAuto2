import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IndexPage.css"
import { Link } from "react-router-dom";
import Image from "./image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCalendarAlt,faRoad } from '@fortawesome/free-solid-svg-icons';
import sad from "./images/review.png";



export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage, setPlacesPerPage] = useState(9);
  const [selectedMarca, setSelectedMarca] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedAnul, setSelectedAnul] = useState("");
  const [selectedCombustibil, setSelectedCombustibil] = useState("");
  const [selectedCuloare, setSelectedCuloare] = useState("");
  const [selectedNormaeuro, setSelectedNormaeuro] = useState("");
  const [selectedTransmisie, setSelectedTransmisie] = useState("");
  const [selectedPutere, setSelectedPutere] = useState("");
  const [selectedKm, setSelectedKm] = useState("");
  const [selectedKmMin, setSelectedKmMin] = useState("");
  const [selectedKmMax, setSelectedKmMax] = useState("");
  const [selectedTitleMin, setSelectedTitleMin] = useState("");
  const [selectedTitleMax, setSelectedTitleMax] = useState("");
  const [selectedAnulMin, setSelectedAnulMin] = useState("");
  const [selectedAnulMax, setSelectedAnulMax] = useState("");
  const [selectedPutereMin, setSelectedPutereMin] = useState("");
  const [selectedPutereMax, setSelectedPutereMax] = useState("");


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
    (selectedCombustibil === "" || place.combustibil === selectedCombustibil) &&
    (selectedCuloare === "" || place.culoare === selectedCuloare) &&
    (selectedNormaeuro === "" || place.normaeuro === selectedNormaeuro) &&
    (selectedTransmisie === "" || place.transmisie === selectedTransmisie) &&
    (selectedPutere === "" || (Number(place.putere) >= Number(selectedPutere) && Number(place.putere) < Number(selectedPutere) + 100)) &&
    (selectedKmMin === "" || place.km >= Number(selectedKmMin)) &&
    (selectedKmMax === "" || place.km <= Number(selectedKmMax)) &&
    (selectedTitleMin === "" || place.title >= Number(selectedTitleMin)) &&
    (selectedTitleMax === "" || place.title <= Number(selectedTitleMax)) &&
    (selectedAnulMin === "" || place.anul >= Number(selectedAnulMin)) &&
    (selectedAnulMax === "" || place.anul <= Number(selectedAnulMax)) &&
    (selectedPutereMin === "" || place.putere >= Number(selectedPutereMin)) &&
    (selectedPutereMax === "" || place.putere <= Number(selectedPutereMax))
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
  const handleAnulMinSelect = (event) => setSelectedAnulMin(event.target.value);
  
  const handleAnulMaxSelect = (event) => setSelectedAnulMax(event.target.value);

  const handleCombustibilSelect = (event) => setSelectedCombustibil(event.target.value);

  const handleCuloareSelect = (event) => setSelectedCuloare(event.target.value);


   const handleNormaeuroSelect = (event) => setSelectedNormaeuro(event.target.value);

  const handleTransmisieSelect = (event) => setSelectedTransmisie(event.target.value);


  const handlePutereSelect = (event) => setSelectedPutere(event.target.value);

  const handleKmSelect = (event) => setSelectedKm(event.target.value);

  const handleKmMinSelect = (event) => setSelectedKmMin(event.target.value);
  
  const handleKmMaxSelect = (event) => setSelectedKmMax(event.target.value);

  const handlePutereMinSelect = (event) => setSelectedPutereMin(event.target.value);
  
  const handlePutereMaxSelect = (event) => setSelectedPutereMax(event.target.value);

  
  const resetFilters = () => {
    setSelectedMarca("");
    setSelectedModel("");
    setSelectedAnul("");
    setSelectedCombustibil("");
    setSelectedCuloare("");
    setSelectedNormaeuro("");
    setSelectedTransmisie("");
    setSelectedPutere("");
    setSelectedKm("");
    setSelectedKmMin("");
    setSelectedKmMax("");
    setSelectedTitleMin("");
    setSelectedTitleMax("");
    setSelectedAnulMin("");
    setSelectedAnulMax("");
    setSelectedPutereMin("");
    setSelectedPutereMax("");
  };


  const kmArray = [];
  for (let km = new Date().getFullYear(); km >= 0; km--) {
 kmArray.push(km);
  }
  const [showFilter, setShowFilter] = useState(false);
  
  const [filtersApplied, setFiltersApplied] = useState(false);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  // Function to handle filter changes and update the result count
  const handleFiltersChange = () => {
    const filteredResults = data.filter((item) => {
      if (selectedMarca && item.marca !== selectedMarca) {
        return false;
      }
  
      if (selectedModel && item.model !== selectedModel) {
        return false;
      }
  
      if (selectedAnul && item.anul !== selectedAnul) {
        return false;
      }
      if (selectedKm && item.km !== selectedKm) {
        return false;
      }
      if (selectedPutere && item.putere !== selectedPutere) {
        return false;
      }
      if (selectedCombustibil && item.combustibil !== selectedCombustibil) {
        return false;
      }
      if (selectedTransmisie && item.transmisie !== selectedTransmisie) {
        return false;
      }
      
  
      return true;
    });
  
    setResultCount(filteredResults.length);
    setFiltersApplied(true);
    setShowFilter(false);

  };

    const [showExtra, setShowExtra] = useState(false);
    const [resultCount, setResultCount] = useState(0);
    const [extraApplied, setExtraApplied] = useState(false);
  
    const handleExtraToggle = () => {
      setShowExtra(!showExtra);
    };
  
    // Function to handle filter changes and update the result count
    const handleExtraChange = () => {
      const filteredResults = data.extra((item) => {
        if (selectedMarca && item.marca !== selectedMarca) {
          return false;
        }
    
        if (selectedModel && item.model !== selectedModel) {
          return false;
        }
    
        if (selectedAnul && item.anul !== selectedAnul) {
          return false;
        }
        if (selectedKm && item.km !== selectedKm) {
          return false;
        }
        if (selectedPutere && item.putere !== selectedPutere) {
          return false;
        }
        if (selectedCombustibil && item.combustibil !== selectedCombustibil) {
          return false;
        }
        if (selectedTransmisie && item.transmisie !== selectedTransmisie) {
          return false;
        }
        if (selectedNormaeuro && item.normaeuro !== selectedNormaeuro) {
          return false;
        }
        
        if (selectedCuloare && item.culoare !== selectedCuloare) {
          return false;
        }
        
    
        return true;
      });
    setResultCount(filteredResults.length);
    setExtraApplied(true);
    setShowExtra(false);
 
  };
  



  
  return (<> 
  <div className="top"></div>
    <div className="main2"> 
      <div className="container" style={{marginTop:"20px"}}>
     

     <button
     
        className={`filter-button ${showFilter ? 'active' : ''}`}
        onClick={handleFilterToggle}
      >Filtreaza</button>
  
{showFilter && (
  <div className="filter-container">
          <div className="filter-item">
            <label htmlFor="marca-select"> </label>
            <select id="marca-select" value={selectedMarca} onChange={handleMarcaSelect}>
            <option value="">Marca</option>
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
          <label htmlFor="model-select"> </label>
      <select id="model-select" value={selectedModel} onChange={handleModelSelect}>
        <option value="">Model</option>
        {filteredPlaces.map(place => (
          <option key={place.id} value={place.model}>{place.model}</option>
        ))}
      </select>
    </div>
    <div className="filter-item">
  <label htmlFor="anul-min-select"> </label>
  <input   placeholder="Anul de la" id="anul-min-select" type="number" value={selectedAnulMin} onChange={(event) => setSelectedAnulMin(event.target.value)} />
  
</div>

<div className="filter-item">
  <label htmlFor="anul-max-select"> </label>
  <input   placeholder="Anul pana la" id="anul-max-select" type="number" value={selectedAnulMax} onChange={(event) => setSelectedAnulMax(event.target.value)} />

</div>


          <div className="filter-item">
  <label htmlFor="title-min-select"> </label>
  <input   placeholder="Pret de la" id="title-min-select" type="number" value={selectedTitleMin} onChange={(event) => setSelectedTitleMin(event.target.value)} />
  <span>&euro;</span>
</div>
<div className="filter-item">
  <label htmlFor="title-max-select"> </label>
  <input   placeholder="Pret pana la" id="title-max-select" type="number" value={selectedTitleMax} onChange={(event) => setSelectedTitleMax(event.target.value)} />
  <span>&euro;</span>
</div>
          
        
          

          <div className="filter-item">
          <label htmlFor="km-min-input"> </label>
<input   placeholder="Km de la" id="km-min-input" type="text" value={selectedKmMin} onChange={(e) => setSelectedKmMin(e.target.value)} />
  
    </div>
    <div className="filter-item">
    <label htmlFor="km-max-input"> </label>
<input   placeholder="Km pana la" id="km-max-input" type="text" value={selectedKmMax} onChange={(e) => setSelectedKmMax(e.target.value)} />
  </div>
  
  <div className="filter-item">
          <label htmlFor="putere-min-input"> </label>
<input   placeholder="Putere de la" id="putere-min-input" type="text" value={selectedPutereMin} onChange={(e) => setSelectedPutereMin(e.target.value)} />
  
    </div>

    <div className="filter-item">
          <label htmlFor="putere-max-input"> </label>
<input   placeholder="Putere pana la" id="putere-max-input" type="text" value={selectedPutereMax} onChange={(e) => setSelectedPutereMax(e.target.value)} />
  
    </div>

          <div className="filter-item">
            <label htmlFor="combustibil-select">  </label>
            <select id="combustibil-select" value={selectedCombustibil} onChange={handleCombustibilSelect}>
              <option value="">Combustibil</option>
              <option value="Benzina">Benzina</option>
  <option value="Benzina-Gaz">Benzina-Gaz</option>
  <option value="Diesel">Diesel</option>
  <option value="Electric">Electric</option>
  <option value="Hibrid">Hibrid</option>
  <option value="Hibrid-Diesel">Hibrid-Diesel</option>
  <option value="Etanol">Etanol</option>
  <option value="Gaz">Gaz</option>

              
         </select>
          </div>

          <div className="filter-item">
            <label htmlFor="transmisie-select">  </label>
            <select id="transmisie-select" value={selectedTransmisie} onChange={handleTransmisieSelect}>
              <option value="">Transmisie</option>
              <option value="CVT">CVT</option>
  <option value="Automata"> Automata</option>
 
  <option value="Manuala">Manuala</option>

              
         </select>
          </div>

          <div className="filter-item">
        <button onClick={resetFilters}>Reset</button>
      </div>
      <button
  onClick={handleFiltersChange}
  
  className="cauta-button"
>
  Cauta
</button>

<button
     
        className={`filter-button ${showExtra ? 'active' : ''}`}
        onClick={handleExtraToggle}
      >Extra</button>
  
{showExtra && (
  <div className="filter-container">
          <div className="filter-item">
            <label htmlFor="normaeuro-select"> </label>
            <select id="normaeuro-select" value={selectedNormaeuro} onChange={handleNormaeuroSelect}>
            <option value="">Norma euro</option>
            <option value="euro0">Non euro</option>
  <option value="euro1">Euro 1</option>
  <option value="euro2">Euro 2</option>
  <option value="euro3">Euro 3</option>
  <option value="euro4">Euro 4</option>
  <option value="euro5">Euro 5</option>
  <option value="euro6">Euro 6</option>
  <option value="euro7">Euro 7</option>
 
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="culoare-select"> </label>
            <select id="culoare-select" value={selectedCuloare} onChange={handleCuloareSelect}>
            <option value="">Culoare</option>
            <option value="Alb">Alb</option>
  <option value="Negru">Negru</option>
  <option value="Gri">Gri</option>
  <option value="Argintiu">Argintiu</option>
  <option value="Auriu">Auriu</option>
  <option value="Maro">Maro</option>
  <option value="Rosu">Roșu</option>
  <option value="Portocaliu">Portocaliu</option>
  <option value="Galben">Galben</option>
  <option value="Verde">Verde</option>
  <option value="Albastru">Albastru</option>
  <option value="Violet">Violet</option>
  <option value="Roz">Roz</option>
 
            </select>
          </div>

<div className="filter-item">
  <label htmlFor="anul-max-select"> </label>
  <input   placeholder="Anul pana la" id="anul-max-select" type="number" value={selectedAnulMax} onChange={(event) => setSelectedAnulMax(event.target.value)} />

</div>


          <div className="filter-item">
  <label htmlFor="title-min-select"> </label>
  <input   placeholder="Pret de la" id="title-min-select" type="number" value={selectedTitleMin} onChange={(event) => setSelectedTitleMin(event.target.value)} />
  <span>&euro;</span>
</div>
<div className="filter-item">
  <label htmlFor="title-max-select"> </label>
  <input   placeholder="Pret pana la" id="title-max-select" type="number" value={selectedTitleMax} onChange={(event) => setSelectedTitleMax(event.target.value)} />
  <span>&euro;</span>
</div>
          
        
          

          <div className="filter-item">
          <label htmlFor="km-min-input"> </label>
<input   placeholder="Km de la" id="km-min-input" type="text" value={selectedKmMin} onChange={(e) => setSelectedKmMin(e.target.value)} />
  
    </div>
    <div className="filter-item">
    <label htmlFor="km-max-input"> </label>
<input   placeholder="Km pana la" id="km-max-input" type="text" value={selectedKmMax} onChange={(e) => setSelectedKmMax(e.target.value)} />
  </div>
  
  <div className="filter-item">
          <label htmlFor="putere-min-input"> </label>
<input   placeholder="Putere de la" id="putere-min-input" type="text" value={selectedPutereMin} onChange={(e) => setSelectedPutereMin(e.target.value)} />
  
    </div>

    <div className="filter-item">
          <label htmlFor="putere-max-input"> </label>
<input   placeholder="Putere pana la" id="putere-max-input" type="text" value={selectedPutereMax} onChange={(e) => setSelectedPutereMax(e.target.value)} />
  
    </div>

          <div className="filter-item">
            <label htmlFor="combustibil-select">  </label>
            <select id="combustibil-select" value={selectedCombustibil} onChange={handleCombustibilSelect}>
              <option value="">Combustibil</option>
              <option value="Benzina">Benzina</option>
  <option value="Benzina-Gaz">Benzina-Gaz</option>
  <option value="Diesel">Diesel</option>
  <option value="Electric">Electric</option>
  <option value="Hibrid">Hibrid</option>
  <option value="Hibrid-Diesel">Hibrid-Diesel</option>
  <option value="Etanol">Etanol</option>
  <option value="Gaz">Gaz</option>

              
         </select>
          </div>

          <div className="filter-item">
            <label htmlFor="transmisie-select">  </label>
            <select id="transmisie-select" value={selectedTransmisie} onChange={handleTransmisieSelect}>
              <option value="">Transmisie</option>
              <option value="CVT">CVT</option>
  <option value="Automata"> Automata</option>
 
  <option value="Manuala">Manuala</option>

              
         </select>
          </div>

          <div className="filter-item">
        <button onClick={resetFilters}>Reset</button>
      </div>
      <button
  onClick={handleFiltersChange}
  
  className="cauta-button"
>
  Cauta
</button>



    </div>)}

    </div>)}
    <div className="filter-container2" >
          <div className="filter-item">
            <label htmlFor="marca-select">  </label>
            <select id="marca-select" value={selectedMarca} onChange={handleMarcaSelect}>
            <option value="">Marca</option>
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
          <label htmlFor="model-select"> </label>
      <select id="model-select" value={selectedModel} onChange={handleModelSelect}>
        <option value="">Model</option>
        {filteredPlaces.map(place => (
          <option key={place.id} value={place.model}>{place.model}</option>
        ))}
      </select>
    </div>
    <div className="filter-item">
  <label htmlFor="anul-min-select"> </label>
  <input   placeholder="Anul de la" id="anul-min-select" type="number" value={selectedAnulMin} onChange={(event) => setSelectedAnulMin(event.target.value)} />
  
</div>

<div className="filter-item">
  <label htmlFor="anul-max-select"> </label>
  <input   placeholder="Anul pana la" id="anul-max-select" type="number" value={selectedAnulMax} onChange={(event) => setSelectedAnulMax(event.target.value)} />

</div>


          <div className="filter-item">
  <label htmlFor="title-min-select"> </label>
  <input   placeholder="Pret de la" id="title-min-select" type="number" value={selectedTitleMin} onChange={(event) => setSelectedTitleMin(event.target.value)} />
  <span>&euro;</span>
</div>
<div className="filter-item">
  <label htmlFor="title-max-select"> </label>
  <input   placeholder="Pret pana la" id="title-max-select" type="number" value={selectedTitleMax} onChange={(event) => setSelectedTitleMax(event.target.value)} />
  <span>&euro;</span>
</div>
          
        
          

          <div className="filter-item">
          <label htmlFor="km-min-input"> </label>
<input   placeholder="Km de la" id="km-min-input" type="text" value={selectedKmMin} onChange={(e) => setSelectedKmMin(e.target.value)} />
  
    </div>
    <div className="filter-item">
    <label htmlFor="km-max-input">  </label>
<input   placeholder="Km pana la" id="km-max-input" type="text" value={selectedKmMax} onChange={(e) => setSelectedKmMax(e.target.value)} />
  </div>



  <div className="filter-item">
          <label htmlFor="putere-min-input"> </label>
<input   placeholder="Putere de la" id="putere-min-input" type="text" value={selectedPutereMin} onChange={(e) => setSelectedPutereMin(e.target.value)} />
  
    </div>

    <div className="filter-item">
          <label htmlFor="putere-max-input"> </label>
<input   placeholder="Putere pana la" id="putere-max-input" type="text" value={selectedPutereMax} onChange={(e) => setSelectedPutereMax(e.target.value)} />
  
    </div>

          <div className="filter-item">
            <label htmlFor="combustibil-select">  </label>
            <select id="combustibil-select" value={selectedCombustibil} onChange={handleCombustibilSelect}>
              <option value="">Combustibil</option>
              <option value="Benzina">Benzina</option>
  <option value="Benzina-Gaz">Benzina-Gaz</option>
  <option value="Diesel">Diesel</option>
  <option value="Electric">Electric</option>
  <option value="Hibrid">Hibrid</option>
  <option value="Hibrid-Diesel">Hibrid-Diesel</option>
  <option value="Etanol">Etanol</option>
  <option value="Gaz">Gaz</option>

              
         </select>
          </div>

          <div className="filter-item">
            <label htmlFor="transmisie-select">  </label>
            <select id="transmisie-select" value={selectedTransmisie} onChange={handleTransmisieSelect}>
              <option value="">Transmisie</option>
              <option value="CVT">CVT</option>
  <option value="Automata"> Automata</option>
 
  <option value="Manuala">Manuala</option>

              
         </select>
          </div>

          <div className="filter-item">
        <button onClick={resetFilters}>Reset</button>
      </div>
      <button
  onClick={handleFiltersChange}
  
  className="cauta-button"
>
  Cauta
</button>



    </div>
    {filteredPlaces.length === 0 && filtersApplied && (
  <div className="no-results">
  <img style={{height:"45vh", width:"auto"}} src={sad} alt=""/>
  <p>No results found.</p>
  
  </div>
)}


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
    <div > 
      {place.putere} cp | {place.anul} | {place.km} km     <h5> {place.title}€</h5>
  </div>
 
                     


  <button style={{background : "#cccccc00", color : "var(--main)"}} className="btn1">Detalii</button>
                    </div>
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
