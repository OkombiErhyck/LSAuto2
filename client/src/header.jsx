import HeaderImg from "./images/1.jpeg";
import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

    const [selectedMarca, setSelectedMarca] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState([]);
  
    const handleMarcaSelect = (event) => {
      setSelectedMarca(event.target.value);
    };
  
    const handleModelSelect = (event) => {
      setSelectedModel(event.target.value);
    };

    
  return (
    <>
      <div className="header">
        <div className="img">
          <div>
            <img src={HeaderImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="logo">
          <h1>LS</h1>
        </div>
        <div className="Content">
          <h2>
            Gaseste-ti masina <span>potrivita</span> !
          </h2>
          

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
          {filteredPlaces.map((place) => (
            <option key={place.id} value={place.model}>
              {place.model}
            </option>
          ))}
        </select>
      </div>
      <Link to="/IndexPage" className="btn">
            Vezi toate <span>anunturile</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
