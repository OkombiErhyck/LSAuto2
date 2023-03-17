import React, { useEffect } from "react";
import { useState } from "react";
import "./write.css";
import axios from "axios";
import Perks from "../Perks"
import PhotosUpLoader from "../PhotosUpLoader";
import { Navigate, useParams } from "react-router-dom";


export default function Write() {
  const cars = [
    {
      brand: 'Acura',
      models: ['MDX', 'NSX', 'RDX', 'RL', 'RLX', 'TL', 'TLX', 'TSX', 'ILX']
    },
    {
      brand: 'Aston Martin',
      models: ['DB11', 'DBS', 'Vantage']
    },
    {
      brand: 'Audi',
      models: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'R8', 'RS Q3', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'SQ2', 'SQ5', 'SQ7', 'TT', 'TT RS', 'TTS']
    },
    {
      brand: 'Bentley',
      models: ['Bentayga', 'Continental', 'Flying Spur']
    },
    {
      brand: 'BMW',
      models: ['116','118','120','116d', '118d', '120d', '128ti', 'M135i', '218i', '220d', 'M235i', '318i', '320d', '320i', '330e', '330i', 'M340i',  '420i', '430i', '440i', 'M440i', '520d', '520i', '530d', '530e', '530i', '540i', 'M550i',  '630i', '640i', 'M650i', '730d', '740d', '745e', '750i', 'M760i', '840i', 'M850i', 'M2', 'M3', 'M4', 'M5', 'M6','M8', 'X1 sDrive18i', 'X1 sDrive20i', 'X1 xDrive20d', 'X1 xDrive25d','X1 xDrive25i','x2','X3', 'X4', 'X5', 'X6', 'X7', 'X3 M', 'X4 M', 'X5 M', 'X6 M', 'Z4']
    },
    {
      brand: 'Bugatti',
      models: ['Chiron', 'Divo']
    },
    {
      brand: 'Cadillac',
      models: ['CT4', 'CT5', 'CT6', 'Escalade', 'XT4', 'XT5', 'XT6']
    },
    {
      brand: 'Chevrolet',
      models: ['Blazer', 'Camaro', 'Corvette', 'Equinox', 'Malibu', 'Silverado', 'Suburban', 'Tahoe', 'Trailblazer', 'Traverse', 'Trax']
    },
    {
      brand: 'Chrysler',
      models: ['300', 'Pacifica', 'Voyager']
    },
    {
      brand: 'Citroen',
      models: ['C1', 'C3', 'C4', 'C5', 'Cactus', 'DS 3', 'DS 4', 'DS 5', 'SpaceTourer']
    },
    {
      brand: 'Dacia',
      models: ['Dokker', 'Duster', 'Logan', 'Sandero', 'Spring', 'MCV']
    },
    {
      brand: 'Dodge',
      models: ['Challenger', 'Charger', 'Durango', 'Journey']
    },
    {
      brand: 'Ferrari',
      models: ['458', '488', '812 Superfast', 'California', 'F8 Tributo', 'GTC4Lusso', 'LaFerrari', 'Portofino', 'Roma', 'SF90 Stradale']
    },
    {
      brand: 'Fiat',
      models: ['500', '500L', '500X', 'Panda', 'Tipo']
    },
    {
      brand: 'Ford',
      models: ['Bronco', 'EcoSport', 'Edge', 'Escape', 'Explorer', 'F-150', 'Fiesta', 'Focus', 'Mustang', 'Ranger', 'Transit', 'C-Max', 'Fusion', 'Taurus', 'Flex', 'Five Hundred', 'Freestar', 'Freestyle', 'GT', 'Thunderbird']
    },
    {
      brand: 'Honda',
      models: ['Accord', 'Civic', 'Clarity', 'CR-V', 'Fit', 'HR-V', 'Insight', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline', 'Element', 'FCX Clarity', 'Ridgeline']
    },
    {
      brand: 'Hyundai',
      models: ['Accent', 'Elantra', 'Ioniq', 'Kona', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster', 'Azera', 'Entourage', 'Equus', 'Genesis', 'Veracruz']
    },
    {
      brand: 'Infiniti',
      models: ['Q50', 'Q60', 'Q70', 'QX30', 'QX50', 'QX60', 'QX70', 'QX80', 'EX35', 'FX35', 'FX45']
    },
    {
      brand: 'Jeep',
      models: ['Cherokee', 'Compass', 'Grand Cherokee', 'Renegade', 'Wrangler', 'Commander', 'Liberty', 'Patriot']
    },
    {
      brand: 'Kia',
      models: ['Forte', 'K5', 'Niro', 'Optima', 'Rio', 'Seltos', 'Sorento', 'Soul', 'Sportage', 'Stinger', 'Telluride', 'Amanti', 'Borrego', 'Cadenza', 'K900', 'Sedona']
    },
    {
      brand: 'Lamborghini',
      models: ['Aventador', 'Huracan', 'Urus', 'Gallardo', 'Murcielago']
    },
    {
      brand: 'Lexus',
      models: ['ES', 'GS', 'GX', 'IS', 'LC', 'LS', 'LX', 'NX', 'RC', 'RX', 'UX', 'CT', 'HS', 'LFA']
    },
    {
      brand: 'Land Rover',
      models: ['Defender', 'Discovery', 'Discovery Sport', 'Range Rover', '  Evoque', '  Sport', '  Velar']
      },
    {
      brand: 'Maserati',
      models: ['Ghibli', 'GranTurismo', 'Levante', 'Quattroporte', 'Coupe', 'Spyder']
    },
    {
      brand: 'Mazda',
      models: ['3', '6', 'CX-3', 'CX-30', 'CX-5', 'CX-9', 'MX-5 Miata', '2', '5', 'RX-8']
    },
    {
      brand: 'Mercedes-Benz',
      models: ['A-Class', 'C-Class', 'CLA-Class', 'CLS-Class', 'E-Class', 'G-Class', 'GLA-Class', 'GLC-Class', 'GLE-Class', 'GLS-Class', 'S-Class', 'B-Class', 'CL-Class', 'CLK-Class', 'GL-Class', 'M-Class', 'R-Class', 'SL-Class', 'SLK-Class', 'SLS AMG']
    },
    {
      brand: 'Mini',
      models: ['Clubman', 'Cooper', 'Countryman', 'Hardtop', 'John Cooper Works', 'Convertible', 'Coupe', 'Roadster']
    },
    {
      brand: 'Mitsubishi',
      models: ['Eclipse Cross', 'Mirage', 'Outlander', 'Outlander PHEV', 'Galant', 'Lancer', 'Lancer Evolution', 'Raider']
    },
    {
      brand: "Renault",
      models: ["Talisman", "Clio", "Megane", "Espace", "Twingo", "Wind", "Megane RS", "Clio RS", "Koleos"]
    },
    {
      brand: "Rolls Royce",
      models: ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan"]
    },
    {
      brand: 'Nissan',
      models: ['Altima', 'Armada', 'Frontier', 'GT-R', 'Kicks', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra', 'Titan', 'Versa', 'Xterra', '370Z', 'Quest']
      },
      {
      brand: 'Subaru',
      models: ['Ascent', 'Crosstrek', 'Forester', 'Impreza', 'Legacy', 'Outback', 'WRX', 'BRZ']
      },
      {
      brand: 'Toyota',
      models: ['4Runner', 'Avalon', 'Camry', 'Corolla', 'Highlander', 'Land Cruiser', 'Prius', 'Rav4', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', 'Venza', 'Matrix', 'Solara']
      },
      {
      brand: 'Volkswagen',
      models: ['Atlas', 'Beetle', 'CC', 'e-Golf', 'Eos', 'Golf', 'GTI', 'Jetta', 'Passat', 'Tiguan', 'Touareg', 'Arteon', 'Routan']
      },
      {
      brand: 'Volvo',
      models: ['S60', 'S90', 'V60', 'V90', 'XC40', 'XC60', 'XC90', 'C30', 'C70', 'S40', 'V50', 'XC70']
      }
    
  // Add more car brands and models here...
]
  const {id} = useParams();
  console.log({id});
  const [title,setTitle] = useState("");
  const [nume,setNume] = useState("");
  const [mail,setMail] = useState("");
  const [telefon,setTelefon] = useState("");
  const [culoare,setCuloare] = useState("");
  const [tractiune,setTractiune] = useState("");
  const [transmisie,setTransmisie] = useState("");
  const [caroserie,setCaroserie] = useState("");
  const [combustibil,setCombustibil] = useState("");
  const [seriesasiu,setSeriesasiu] = useState("");
  const [putere,setPutere] = useState("");
  const [normaeuro,setNormaeuro] = useState("");
  const [cilindre,setCilindre] = useState("");
  const [km,setKm] = useState("");
  const [marca,setMarca] = useState("");
  const [model,setModel] = useState("");
  const [anul,setAnul] = useState("");
   const [addedPhotos, setAddedPhotos] = useState([]);
  const [description,setDescription] = useState("");
  const [perks,setPerks] = useState ([]);
  const [redirect,setRedirect] = useState("");
  useEffect(() => {
     if (!id) {
      return;
     }
     axios.get("/places/"+id).then(response => {
      const {data} = response;
      setCuloare(data.culoare);
      setNume(data.nume);
      setMail(data.mail);
      setTelefon(data.telefon);
      setTractiune(data.tractiune);
      setTransmisie(data.transmisie);
      setCaroserie(data.caroserie);
      setCombustibil(data.combustibil);
      setSeriesasiu(data.seriesasiu);
      setPutere(data.putere);
      setNormaeuro(data.normaeuro);
      setCilindre(data.cilindre);
      setTitle(data.title);
      setMarca(data.marca);
      setModel(data.model);
      setAddedPhotos(data.photos);
      setAnul(data.anul);
      setKm(data.km);
      setDescription(data.description);
      setPerks(data.perks);
     });
  },[id]);

async function savePlace(ev) {
  ev.preventDefault();
  const placeData = {
    title ,marca ,model ,km ,anul 
    ,addedPhotos ,description ,perks,
    culoare,
    cilindre,
    nume,
    mail,
    telefon,
    tractiune,
    transmisie,
    seriesasiu,
    caroserie,
    putere,
    normaeuro,
    combustibil
  };
if (id) {
  //update
  await axios.put("/places", {
    id, ...placeData
     
  });
  setRedirect("/");
} else {
  //new place
  await axios.post("/places", placeData);
  setRedirect("/");
}
}

if (redirect) {
  return <Navigate to={redirect}/>
}

const generateModelOptions = () => {
  const selectedCar = cars.find(car => car.brand === marca);
  if (!selectedCar) {
    return <option  value="">Selecteaza model-ul</option>;
  }
  return (
    <>
      <option   value="">Selecteaza model-ul</option>
      {selectedCar.models.map(model => (
        <option key={model} value={model}>{model}</option>
      ))}
    </>
  );
};

  return (
    <React.Fragment>
    <div className="top"></div>
     
      <div className="write">
      <h2 style={{color:"var(--main)"}}>Adauga un anunt</h2>
        <form onSubmit={savePlace} className="writeForm">
        
          <div className="writeFormGroup ">
           
          <h5>Pret</h5>
          <input
              className="writeInput"
              placeholder="30000"
              type="text"
              autoFocus={true}
              value={title} onChange={ev => setTitle(ev.target.value)}
            />
             <h5>Marca</h5>
             <select
      className="writeInput"
      value={marca}
      onChange={ev => setMarca(ev.target.value)}
    >
      <option style={{color:"#000"}} value="">Selecteaza marca</option>
      {cars.map(car => (
        <option key={car.brand} value={car.brand}>{car.brand}</option>
      ))}
    </select>
            <h5>Model</h5>
            <select
      className="writeInput"
      value={model}
      onChange={ev => setModel(ev.target.value)}
    >
      {generateModelOptions()}
    </select>
             <h5>Caroserie</h5>
             <select className="writeInput" value={caroserie} onChange={ev => setCaroserie(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selecteaza caroseria</option>
  <option value="Coupe">Coupe</option>
  <option value="Compacta">Compacta</option>
  <option value="Berlina">Berlina</option>
  <option value="Monovolum">Monovolum</option>
  <option value="Suv">Suv</option>
  <option value="Crossover">Crossover</option>
  <option value="Break">Break</option>
  <option value="Pickup">Pickup</option>


</select>

            <h5>Putere</h5>
             <input
              className="writeInput"
              placeholder="250"
              type="text"
              value={putere} onChange={ev => setPutere(ev.target.value)}
            />
            <h5>Combustibil</h5>
            <select className="writeInput" value={combustibil} onChange={ev => setCombustibil(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selecteaza combustibil-ul</option>
  <option value="Benzina">Benzina</option>
  <option value="Diesel">Diesel</option>
  <option value="Electric">Electric</option>
  <option value="Hibrid">Hibrid</option>
  <option value="Hibrid-Benzina">Hibrid-Benzina</option>
  <option value="Hibrid-Diesel">Hibrid-Diesel</option>
  <option value="Etanol">Etanol</option>
  <option value="Gaz">Gaz</option>


</select>
            <h5>Serie Sasiu</h5>
             <input
              className="writeInput"
              placeholder=""
              type="text"
              value={seriesasiu} onChange={ev => setSeriesasiu(ev.target.value)}
            />
            <h5>Tractiune</h5>
            <select className="writeInput" value={tractiune} onChange={ev => setTractiune(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selecteaza tractiunea</option>
  <option value="Fata">Fata</option>
  <option value="Spate">Spate</option>
  <option value="4x4">4x4</option>
  <option value="4WD">4WD</option>
  <option value="AWD">AWD</option>
   

</select>
            <h5>Culoare</h5>
            <select className="writeInput" value={culoare} onChange={ev => setCuloare(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selectează culoarea</option>
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

            
            <h5>Norma Euro</h5>
            <select className="writeInput" value={normaeuro} onChange={ev => setNormaeuro(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selecteaza Norma Euro</option>
  <option value="euro0">Non euro</option>
  <option value="euro1">Euro 1</option>
  <option value="euro2">Euro 2</option>
  <option value="euro3">Euro 3</option>
  <option value="euro4">Euro 4</option>
  <option value="euro5">Euro 5</option>
  <option value="euro6">Euro 6</option>
  <option value="euro7">Euro 7</option>
</select>
            <h5>Transmisie</h5>
            <select className="writeInput" value={transmisie} onChange={ev => setTransmisie(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selecteaza Transmisia</option>
  <option value="CVT">CVT</option>
  <option value="Automata"> Automata</option>
  <option value="Semi-Automata">Semi-Automata</option>
  <option value="Manuala">Manuala</option>
   
</select>
             <h5>Cilindre</h5>
             <input
              className="writeInput"
              placeholder="1997cc"
              type="text"
              value={cilindre} onChange={ev => setCilindre(ev.target.value)}
            />
            <h5>Nume pentu contact</h5>
             <input
              className="writeInput"
              placeholder="Nume"
              type="text"
              value={nume} onChange={ev => setNume(ev.target.value)}
            />
            <h5>Telefon</h5>
             <input
              className="writeInput"
              placeholder="07xxxxxxxx"
              type="text"
              value={telefon} onChange={ev => setTelefon(ev.target.value)}
            />
            <h5>eMail</h5>
             <input
              className="writeInput"
              placeholder="abc@xyz.com"
              type="text"
              value={mail} onChange={ev => setMail(ev.target.value)}
            />

             <h5>Kilometri</h5>
             <input
              className="writeInput"
              placeholder="10000"
              type="text"
              value={km} onChange={ev => setKm(ev.target.value)}
            />
             <h5>Anul de fabricatie</h5>
             <input
              className="writeInput"
              placeholder="2012"
              type="text"
              value={anul} onChange={ev => setAnul(ev.target.value)}
            />
             
             <PhotosUpLoader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
             <br></br>
            <Perks selected={perks} onChange={setPerks}/>
          
          </div>
             
            
        

           
          <div className="writeFormGroup">

          <h4>Descriere</h4>
          <textarea
  className="writeInput writeText"
  placeholder="Detalii despre vehicul"
  type="text"
  value={description}
  onChange={ev => setDescription(ev.target.value)}
  onKeyDown={ev => {
    if (ev.keyCode === 13) {
      // The Enter key was pressed, handle the new line here
      console.log('New line detected!');
    }
  }}
/>

          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
      
    </React.Fragment>
  );
}
