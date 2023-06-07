import React, { useState } from "react";
import "./perks.css";


export default function Perks({ selected, onChange }) {

    const [isCollapsed, setIsCollapsed] = useState(false);
  
    function handleCbClick(ev) {
      const { checked, name } = ev.target;
      if (checked) {
        onChange([...selected, name]);
      } else {
        onChange([...selected.filter((selectedName) => selectedName !== name)]);
      }
    }
  
    const [showGeneral, setShowGeneral] = useState(false);
    const [showAudio, setShowAudio] = useState(false);
    const [showConfort, setShowConfort] = useState(false);
    const [showElectronice, setShowElectronice] = useState(false);
    const [showPerformanta, setShowPerformanta] = useState(false);
    const [showSiguranta, setShowSiguranta] = useState(false);
    
  
    const handleGeneralToggle = () => {
      setShowGeneral(!showGeneral);
    };

    const handleAudioToggle = () => {
      setShowAudio(!showAudio);
    };

    const handleConfortToggle = () => {
      setShowConfort(!showConfort);
    };
    const handleElectroniceToggle = () => {
      setShowElectronice(!showElectronice);
    };
    const handlePerformantaToggle = () => {
      setShowPerformanta(!showPerformanta);
    };
    const handleSigurantaToggle = () => {
      setShowSiguranta(!showSiguranta);
    };
  
    function toggleCollapse(event) {
      event.preventDefault();
      setIsCollapsed(!isCollapsed);
    }
    return(
        <>
            <h4>Optiuni generale</h4>
          <p>Selectacti din optiunile</p>
          <div className="optiuni">
          
          <span
  className={`cauta-button ${showGeneral ? "active" : ""}`}
  onClick={handleGeneralToggle}
>
 Generale
</span>

      {showGeneral && (
        <div className="filter-container" style={{ background: "#d5d5d5" }}>
        <div className="filter-item">
          <div>
            <label>
              <input type="checkbox"  checked={selected.includes("bluetooth")} name="bluetooth" onChange={handleCbClick}/>
              <span>Bluetooth</span>
            </label>
          </div>   

          
          <div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de navigație")} name="sistem de navigație" onChange={handleCbClick}/>
    <span>Navigație</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("senzori de parcare")} name="senzori de parcare" onChange={handleCbClick}/>
    <span>Senzori de parcare</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("control automat al climatizării")} name="control automat al climatizării" onChange={handleCbClick}/>
    <span>Clima automata</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("faruri cu LED")} name="faruri cu LED" onChange={handleCbClick}/>
    <span>Faruri cu LED</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("faruri cu Laser")} name="faruri cu Laser" onChange={handleCbClick}/>
    <span>Faruri cu Laser</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("scaune încălzite")} name="scaune încălzite" onChange={handleCbClick}/>
    <span>Scaune încălzite</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("cameră video de marșarier")} name="cameră video de marșarier" onChange={handleCbClick}/>
    <span>Cameră video de marșarier</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("airbag-uri frontale")} name="airbag-uri frontale" onChange={handleCbClick}/>
    <span>Airbag-uri frontale</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("airbag-uri laterale")} name="airbag-uri laterale" onChange={handleCbClick}/>
    <span>Airbag-uri laterale</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("airbag-uri cortină")} name="airbag-uri cortină" onChange={handleCbClick}/>
    <span>Airbag-uri cortină</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de avertizare a şoferului")} name="sistem de avertizare a şoferului" onChange={handleCbClick}/>
    <span>Sistem de avertizare a şoferului</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de monitorizare a unghiului mort")} name="sistem de monitorizare a unghiului mort" onChange={handleCbClick}/>
    <span>Sistem de monitorizare a unghiului mort</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de frânare automată de urgenţă")} name="sistem de frânare automată de urgenţă" onChange={handleCbClick}/>
    <span>Sistem de frânare automată de urgenţă</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de control al tracţiunii")} name="sistem de control al tracţiunii" onChange={handleCbClick}/>
    <span>Sistem de control al tracţiunii</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de control al stabilităţii")} name="sistem de control al stabilităţii" onChange={handleCbClick}/>
    <span>Sistem de control al stabilităţii</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de recunoaştere a semnelor de circulaţie")} name="sistem de recunoaştere a semnelor de circulaţie" onChange={handleCbClick}/>
    <span>Sistem de recunoaştere a semnelor de circulaţie</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de asistenţă la menţinerea benzii de mers")} name="sistem de asistenţă la menţinerea benzii de mers" onChange={handleCbClick}/>
    <span>Sistem de asistenţă la menţinerea benzii de mers</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de asistență la plecarea din rampă")} name="sistem de asistență la plecarea din rampă" onChange={handleCbClick}/>
    <span>Sistem de asistență la plecarea din rampă</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de avertizare a pietonilor")} name="sistem de avertizare a pietonilor" onChange={handleCbClick}/>
    <span>Sistem de avertizare a pietonilor</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("sistem de monitorizare a presiunii în pneuri")} name="sistem de monitorizare a presiunii în pneuri" onChange={handleCbClick}/>
    <span>Sistem de monitorizare a presiunii în pneuri</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("cameră video pentru mersul înapoi")} name="cameră video pentru mersul înapoi" onChange={handleCbClick}/>
    <span>Cameră video pentru mersul înapoi</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("geamuri electrice")} name="geamuri electrice" onChange={handleCbClick}/>
    <span>Geamuri electrice</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("oglinzi electrice")} name="oglinzi electrice" onChange={handleCbClick}/>
    <span>Oglinzi electrice</span>
  </label>
</div>
<div>
  <label>
    <input type="checkbox" checked={selected.includes("oglinzi încălzite")} name="oglinzi încălzite" onChange={handleCbClick}/>
    <span>Oglinzi încălzite</span>
  </label>
</div>
</div>
</div>)}
        
        <h4 style={{color:"transparent"}}>Optiuni avansate</h4>

<h4>Optiuni avansate</h4>
        <span
  className={`cauta-button ${showAudio ? "active" : ""}`}
  onClick={handleAudioToggle}
>
  Audio si Conectivitate
</span>

      {showAudio && (
        <div className="filter-container" style={{ background: "#d5d5d5" }}>
          <div className="filter-item">
            
          <div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Apple Carplay")}
      name="Apple Carplay"
      onChange={handleCbClick}
    />
    <span>Apple Carplay</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Android Auto")}
      name="Android Auto"
      onChange={handleCbClick}
    />
    <span>Android Auto</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Bluetooth")}
      name="Bluetooth"
      onChange={handleCbClick}
    />
    <span>Bluetooth</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Radio")}
      name="Radio"
      onChange={handleCbClick}
    />
    <span>Radio</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem hands-free")}
      name="Sistem hands-free"
      onChange={handleCbClick}
    />
    <span>Sistem hands-free</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Port USB")}
      name="Port USB"
      onChange={handleCbClick}
    />
    <span>Port USB</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Wireless charging")}
      name="Wireless charging"
      onChange={handleCbClick}
    />
    <span>Wireless charging</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem navigatie")}
      name="Sistem navigatie"
      onChange={handleCbClick}
    />
    <span>Sistem navigatie</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem audio")}
      name="Sistem audio"
      onChange={handleCbClick}
    />
    <span>Sistem audio</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Head up display")}
      name="Head up display"
      onChange={handleCbClick}
    />
    <span>Head up display</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Monitor cu touch screen")}
      name="Monitor cu touch screen"
      onChange={handleCbClick}
    />
    <span>Monitor cu touch screen</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Control vocal")}
      name="Control vocal"
      onChange={handleCbClick}
    />
    <span>Control vocal</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Conexiune Internet")}
      name="Conexiune Internet"
      onChange={handleCbClick}
    />
    <span>Conexiune Internet</span>
  </label>
</div>

         
          </div>
        </div>
      )}





      <span
  className={`cauta-button ${showAudio ? "active" : ""}`}
  onClick={handleConfortToggle}
>
  Confort
</span>

      {showConfort && (
        <div className="filter-container" style={{ background: "#d5d5d5" }}>
          <div className="filter-item">
            
          <div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Scaun pasager ajustabil electric")}
      name="Scaun pasager ajustabil electric"
      onChange={handleCbClick}
    />
    <span>Scaun pasager ajustabil electric</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Incalzire scaun sofer")}
      name="Incalzire scaun sofer"
      onChange={handleCbClick}
    />
    <span>Incalzire scaun sofer</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Incalzire scaun pasager")}
      name="Incalzire scaun pasager"
      onChange={handleCbClick}
    />
    <span>Incalzire scaun pasager</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Suport lombar electric scaun sofer")}
      name="Suport lombar electric scaun sofer"
      onChange={handleCbClick}
    />
    <span>Suport lombar electric scaun sofer</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Suport lombar electric scaun pasager")}
      name="Suport lombar electric scaun pasager"
      onChange={handleCbClick}
    />
    <span>Suport lombar electric scaun pasager</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Scaune fata ventilate")}
      name="Scaune fata ventilate"
      onChange={handleCbClick}
    />
    <span>Scaune fata ventilate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Scaune fata cu masaj")}
      name="Scaune fata cu masaj"
      onChange={handleCbClick}
    />
    <span>Scaune fata cu masaj</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Scaun cu memorie")}
      name="Scaun cu memorie"
      onChange={handleCbClick}
    />
    <span>Scaun cu memorie</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Scaune sport fata")}
      name="Scaune sport fata"
      onChange={handleCbClick}
    />
    <span>Scaune sport fata</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Incalzire scaune spate")}
      name="Incalzire scaune spate"
      onChange={handleCbClick}
    />
    <span>Incalzire scaune spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Scaune spate ventilate")}
      name="Scaune spate ventilate"
      onChange={handleCbClick}
    />
    <span>Scaune spate ventilate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Scaune spate cu masaj")}
      name="Scaune spate cu masaj"
      onChange={handleCbClick}
    />
    <span>Scaune spate cu masaj</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Cotiera (fata)")}
      name="Cotiera (fata)"
      onChange={handleCbClick}
    />
    <span>Cotiera (fata)</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Cotiera (spate)")}
      name="Cotiera (spate)"
      onChange={handleCbClick}
    />
    <span>Cotiera (spate)</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Volan piele")}
      name="Volan piele"
      onChange={handleCbClick}
    />
    <span>Volan piele</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Volan sport")}
      name="Volan sport"
      onChange={handleCbClick}
    />
    <span>Volan sport</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Volan cu comenzi")}
      name="Volan cu comenzi"
      onChange={handleCbClick}
    />
    <span>Volan cu comenzi</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Volan reglabil electric")}
      name="Volan reglabil electric"
      onChange={handleCbClick}
    />
    <span>Volan reglabil electric</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Volan multifunctional")}
      name="Volan multifunctional"
      onChange={handleCbClick}
    />
    <span>Volan multifunctional</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Incalzire volan")}
      name="Incalzire volan"
      onChange={handleCbClick}
    />
    <span>Incalzire volan</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Volan cu schimbator de viteze")}
      name="Volan cu schimbator de viteze"
      onChange={handleCbClick}
    />
    <span>Volan cu schimbator de viteze</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Schimbator viteze piele")}
      name="Schimbator viteze piele"
      onChange={handleCbClick}
    />
    <span>Schimbator viteze piele</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Cheie digitala")}
      name="Cheie digitala"
      onChange={handleCbClick}
    />
    <span>Cheie digitala</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Keyless entry")}
      name="Keyless entry"
      onChange={handleCbClick}
    />
    <span>Keyless entry</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Keyless go")}
      name="Keyless go"
      onChange={handleCbClick}
    />
    <span>Keyless go</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Pornire motor Keyless")}
      name="Pornire motor Keyless"
      onChange={handleCbClick}
    />
    <span>Pornire motor Keyless</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Incalzire auxiliara")}
      name="Incalzire auxiliara"
      onChange={handleCbClick}
    />
    <span>Incalzire auxiliara</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Incalzire cu reglare automata")}
      name="Incalzire cu reglare automata"
      onChange={handleCbClick}
    />
    <span>Incalzire cu reglare automata</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Senzor ploaie")}
      name="Senzor ploaie"
      onChange={handleCbClick}
    />
    <span>Senzor ploaie</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Parbriz cu incalzire")}
      name="Parbriz cu incalzire"
      onChange={handleCbClick}
    />
    <span>Parbriz cu incalzire</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Stergatoare parbriz")}
      name="Stergatoare parbriz"
      onChange={handleCbClick}
    />
    <span>Stergatoare parbriz</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Geamuri electrice fata")}
      name="Geamuri electrice fata"
      onChange={handleCbClick}
    />
    <span>Geamuri electrice fata</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Geamuri electrice spate")}
      name="Geamuri electrice spate"
      onChange={handleCbClick}
    />
    <span>Geamuri electrice spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Privacy glass")}
      name="Privacy glass"
      onChange={handleCbClick}
    />
    <span>Privacy glass</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jaluzele electrice luneta")}
      name="Jaluzele electrice luneta"
      onChange={handleCbClick}
    />
    <span>Jaluzele electrice luneta</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Top electric")}
      name="Top electric"
      onChange={handleCbClick}
    />
    <span>Top electric</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Top cu telecomanda")}
      name="Top cu telecomanda"
      onChange={handleCbClick}
    />
    <span>Top cu telecomanda</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Conexiune Internet")}
      name="Conexiune Internet"
      onChange={handleCbClick}
    />
    <span>Conexiune Internet</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Scaun sofer ajustabil electric")}
      name="Scaun sofer ajustabil electric"
      onChange={handleCbClick}
    />
    <span>Scaun sofer ajustabil electric</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Aparatoare vant")}
      name="Aparatoare vant"
      onChange={handleCbClick}
    />
    <span>Aparatoare vant</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Aer conditionat")}
      name="Aer conditionat"
      onChange={handleCbClick}
    />
    <span>Aer conditionat</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Climatizare spate")}
      name="Climatizare spate"
      onChange={handleCbClick}
    />
    <span>Climatizare spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Climatronic")}
      name="Climatronic"
      onChange={handleCbClick}
    />
    <span>Climatronic</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Climatronic 2 zone")}
      name="Climatronic 2 zone"
      onChange={handleCbClick}
    />
    <span>Climatronic 2 zone</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Climatronic 3 zone")}
      name="Climatronic 3 zone"
      onChange={handleCbClick}
    />
    <span>Climatronic 3 zone</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Climatronic 4 zone")}
      name="Climatronic 4 zone"
      onChange={handleCbClick}
    />
    <span>Climatronic 4 zone</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jaluzele geamuri spate automate")}
      name="Jaluzele geamuri spate automate"
      onChange={handleCbClick}
    />
    <span>Jaluzele geamuri spate automate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jaluzele geamuri spate manuale")}
      name="Jaluzele geamuri spate manuale"
      onChange={handleCbClick}
    />
    <span>Jaluzele geamuri spate manuale</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Plafon panoramic")}
      name="Plafon panoramic"
      onChange={handleCbClick}
    />
    <span>Plafon panoramic</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Trapa electrica")}
      name="Trapa electrica"
      onChange={handleCbClick}
    />
    <span>Trapa electrica</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Trapa manuala")}
      name="Trapa manuala"
      onChange={handleCbClick}
    />
    <span>Trapa manuala</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Trapa sticla electrica spate")}
      name="Trapa sticla electrica spate"
      onChange={handleCbClick}
    />
    <span>Trapa sticla electrica spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Tapiterie alcantara")}
      name="Tapiterie alcantara"
      onChange={handleCbClick}
    />
    <span>Tapiterie alcantara</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Tapiterie alcantara piele-textil")}
      name="Tapiterie alcantara piele-textil"
      onChange={handleCbClick}
    />
    <span>Tapiterie alcantara piele-textil</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Tapiterie alcantara piele")}
      name="Tapiterie alcantara piele"
      onChange={handleCbClick}
    />
    <span>Tapiterie alcantara piele</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Tapiterie alcantara stofa")}
      name="Tapiterie alcantara stofa"
      onChange={handleCbClick}
    />
    <span>Tapiterie alcantara stofa</span>
  </label>
</div>

         
          </div>
        </div>
      )}




      <span
  className={`cauta-button ${showElectronice ? "active" : ""}`}
  onClick={handleElectroniceToggle}
>
  Electronice si Asistenta Sofer
</span>

      {showElectronice && (
        <div className="filter-container" style={{ background: "#d5d5d5" }}>
          <div className="filter-item">
            
          <div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Senzori parcare fata")}
      name="Senzori parcare fata"
      onChange={handleCbClick}
    />
    <span>Senzori parcare fata</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Senzori parcare spate")}
      name="Senzori parcare spate"
      onChange={handleCbClick}
    />
    <span>Senzori parcare spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Asistenta la parcare")}
      name="Asistenta la parcare"
      onChange={handleCbClick}
    />
    <span>Asistenta la parcare</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem de parcare automat")}
      name="Sistem de parcare automat"
      onChange={handleCbClick}
    />
    <span>Sistem de parcare automat</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Camera video 360º")}
      name="Camera video 360º"
      onChange={handleCbClick}
    />
    <span>Camera video 360º</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Camera video spate")}
      name="Camera video spate"
      onChange={handleCbClick}
    />
    <span>Camera video spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Oglinzi exterioare cu reglare electrica")}
      name="Oglinzi exterioare cu reglare electrica"
      onChange={handleCbClick}
    />
    <span>Oglinzi exterioare cu reglare electrica</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Oglinzi exterioare incalzite")}
      name="Oglinzi exterioare incalzite"
      onChange={handleCbClick}
    />
    <span>Oglinzi exterioare incalzite</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Oglinzi exterioare rabatabile electric")}
      name="Oglinzi exterioare rabatabile electric"
      onChange={handleCbClick}
    />
    <span>Oglinzi exterioare rabatabile electric</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Oglinzi exterioare digitale")}
      name="Oglinzi exterioare digitale"
      onChange={handleCbClick}
    />
    <span>Oglinzi exterioare digitale</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Avertizare unghi mort")}
      name="Avertizare unghi mort"
      onChange={handleCbClick}
    />
    <span>Avertizare unghi mort</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Asistenta schimbare banda")}
      name="Asistenta schimbare banda"
      onChange={handleCbClick}
    />
    <span>Asistenta schimbare banda</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Lane assist")}
      name="Lane assist"
      onChange={handleCbClick}
    />
    <span>Lane assist</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Controlul distantei")}
      name="Controlul distantei"
      onChange={handleCbClick}
    />
    <span>Controlul distantei</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Limitator viteza")}
      name="Limitator viteza"
      onChange={handleCbClick}
    />
    <span>Limitator viteza</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Asistenta la franare")}
      name="Asistenta la franare"
      onChange={handleCbClick}
    />
    <span>Asistenta la franare</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem asistenta viraj")}
      name="Sistem asistenta viraj"
      onChange={handleCbClick}
    />
    <span>Sistem asistenta viraj</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Controlul tractiunii")}
      name="Controlul tractiunii"
      onChange={handleCbClick}
    />
    <span>Controlul tractiunii</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Asistenta in panta")}
      name="Asistenta in panta"
      onChange={handleCbClick}
    />
    <span>Asistenta in panta</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Asistenta in rampa")}
      name="Asistenta in rampa"
      onChange={handleCbClick}
    />
    <span>Asistenta in rampa</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem recunoastere indicatoare de viteza")}
      name="Sistem recunoastere indicatoare de viteza"
      onChange={handleCbClick}
    />
    <span>Sistem recunoastere indicatoare de viteza</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem recunoastere semne trafic")}
      name="Sistem recunoastere semne trafic"
      onChange={handleCbClick}
    />
    <span>Sistem recunoastere semne trafic</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem asistenta intersectie")}
      name="Sistem asistenta intersectie"
      onChange={handleCbClick}
    />
    <span>Sistem asistenta intersectie</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Conducere autonoma")}
      name="Conducere autonoma"
      onChange={handleCbClick}
    />
    <span>Conducere autonoma</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Asistenta faza lunga")}
      name="Asistenta faza lunga"
      onChange={handleCbClick}
    />
    <span>Asistenta faza lunga</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Faruri directionale")}
      name="Faruri directionale"
      onChange={handleCbClick}
    />
    <span>Faruri directionale</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Faruri autoadaptive")}
      name="Faruri autoadaptive"
      onChange={handleCbClick}
    />
    <span>Faruri autoadaptive</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Faruri directionale dinamice")}
      name="Faruri directionale dinamice"
      onChange={handleCbClick}
    />
    <span>Faruri directionale dinamice</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Faruri cu temporizator")}
      name="Faruri cu temporizator"
      onChange={handleCbClick}
    />
    <span>Faruri cu temporizator</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Spalare faruri")}
      name="Spalare faruri"
      onChange={handleCbClick}
    />
    <span>Spalare faruri</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Lumini de zi")}
      name="Lumini de zi"
      onChange={handleCbClick}
    />
    <span>Lumini de zi</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Lumini de zi LED")}
      name="Lumini de zi LED"
      onChange={handleCbClick}
    />
    <span>Lumini de zi LED</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Faruri ceata")}
      name="Faruri ceata"
      onChange={handleCbClick}
    />
    <span>Faruri ceata</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Faruri ceata LED")}
      name="Faruri ceata LED"
      onChange={handleCbClick}
    />
    <span>Faruri ceata LED</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Stopuri LED")}
      name="Stopuri LED"
      onChange={handleCbClick}
    />
    <span>Stopuri LED</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Follow me home")}
      name="Follow me home"
      onChange={handleCbClick}
    />
    <span>Follow me home</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Iluminare interioara LED")}
      name="Iluminare interioara LED"
      onChange={handleCbClick}
    />
    <span>Iluminare interioara LED</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem Start/Stop")}
      name="Sistem Start/Stop"
      onChange={handleCbClick}
    />
    <span>Sistem Start/Stop</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Senzori presiune roti")}
      name="Senzori presiune roti"
      onChange={handleCbClick}
    />
    <span>Senzori presiune roti</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Frana parcare electrica")}
      name="Frana parcare electrica"
      onChange={handleCbClick}
    />
    <span>Frana parcare electrica</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Servodirectie")}
      name="Servodirectie"
      onChange={handleCbClick}
    />
    <span>Servodirectie</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Diferential blocabil")}
      name="Diferential blocabil"
      onChange={handleCbClick}
    />
    <span>Diferential blocabil</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Selector diferential blocabil")}
      name="Selector diferential blocabil"
      onChange={handleCbClick}
    />
    <span>Selector diferential blocabil</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Asistenta ambuteiaj")}
      name="Asistenta ambuteiaj"
      onChange={handleCbClick}
    />
    <span>Asistenta ambuteiaj</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Pilot automat")}
      name="Pilot automat"
      onChange={handleCbClick}
    />
    <span>Pilot automat</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Distronic")}
      name="Distronic"
      onChange={handleCbClick}
    />
    <span>Distronic</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Adaptive Cruise Control Predictive")}
      name="Adaptive Cruise Control Predictive"
      onChange={handleCbClick}
    />
    <span>Adaptive Cruise Control Predictive</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Faruri Bi-Xenon")}
      name="Faruri Bi-Xenon"
      onChange={handleCbClick}
    />
    <span>Faruri Bi-Xenon</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Faruri Laser")}
      name="Faruri Laser"
      onChange={handleCbClick}
    />
    <span>Faruri Laser</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Faruri Led")}
      name="Faruri Led"
      onChange={handleCbClick}
    />
    <span>Faruri Led</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Faruri Xenon")}
      name="Faruri Xenon"
      onChange={handleCbClick}
    />
    <span>Faruri Xenon</span>
  </label>
</div>

         
          </div>
        </div>
      )}





      <span
  className={`cauta-button ${showPerformanta ? "active" : ""}`}
  onClick={handlePerformantaToggle}
>
  Performanta si modificari
</span>

      {showPerformanta && (
        <div className="filter-container" style={{ background: "#d5d5d5" }}>
          <div className="filter-item">
            
          <div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante aliaj 14")}
      name="Jante aliaj 14"
      onChange={handleCbClick}
    />
    <span>Jante aliaj 14</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante aliaj 15")}
      name="Jante aliaj 15"
      onChange={handleCbClick}
    />
    <span>Jante aliaj 15</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante aliaj 16")}
      name="Jante aliaj 16"
      onChange={handleCbClick}
    />
    <span>Jante aliaj 16</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante aliaj 17")}
      name="Jante aliaj 17"
      onChange={handleCbClick}
    />
    <span>Jante aliaj 17</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante aliaj 18")}
      name="Jante aliaj 18"
      onChange={handleCbClick}
    />
    <span>Jante aliaj 18</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante aliaj 19")}
      name="Jante aliaj 19"
      onChange={handleCbClick}
    />
    <span>Jante aliaj 19</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante aliaj 20")}
      name="Jante aliaj 20"
      onChange={handleCbClick}
    />
    <span>Jante aliaj 20</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante aliaj 21")}
      name="Jante aliaj 21"
      onChange={handleCbClick}
    />
    <span>Jante aliaj 21</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante aliaj 22")}
      name="Jante aliaj 22"
      onChange={handleCbClick}
    />
    <span>Jante aliaj 22</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante aliaj 23")}
      name="Jante aliaj 23"
      onChange={handleCbClick}
    />
    <span>Jante aliaj 23</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Jante otel")}
      name="Jante otel"
      onChange={handleCbClick}
    />
    <span>Jante otel</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Anvelope iarna")}
      name="Anvelope iarna"
      onChange={handleCbClick}
    />
    <span>Anvelope iarna</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Anvelope vara")}
      name="Anvelope vara"
      onChange={handleCbClick}
    />
    <span>Anvelope vara</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Anvelope all season")}
      name="Anvelope all season"
      onChange={handleCbClick}
    />
    <span>Anvelope all season</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Anvelope off road")}
      name="Anvelope off road"
      onChange={handleCbClick}
    />
    <span>Anvelope off road</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Cauciucuri Run-flat")}
      name="Cauciucuri Run-flat"
      onChange={handleCbClick}
    />
    <span>Cauciucuri Run-flat</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Suspensie confort")}
      name="Suspensie confort"
      onChange={handleCbClick}
    />
    <span>Suspensie confort</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Suspensie controlata electronic")}
      name="Suspensie controlata electronic"
      onChange={handleCbClick}
    />
    <span>Suspensie controlata electronic</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Suspensie sport")}
      name="Suspensie sport"
      onChange={handleCbClick}
    />
    <span>Suspensie sport</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Suspensie reglabila")}
      name="Suspensie reglabila"
      onChange={handleCbClick}
    />
    <span>Suspensie reglabila</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Suspensie pneumatica")}
      name="Suspensie pneumatica"
      onChange={handleCbClick}
    />
    <span>Suspensie pneumatica</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Suspensie hidropneumatica")}
      name="Suspensie hidropneumatica"
      onChange={handleCbClick}
    />
    <span>Suspensie hidropneumatica</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Frane carbo-ceramice")}
      name="Frane carbo-ceramice"
      onChange={handleCbClick}
    />
    <span>Frane carbo-ceramice</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Bullbar")}
      name="Bullbar"
      onChange={handleCbClick}
    />
    <span>Bullbar</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Autocolant")}
      name="Autocolant"
      onChange={handleCbClick}
    />
    <span>Autocolant</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Filtru de particule")}
      name="Filtru de particule"
      onChange={handleCbClick}
    />
    <span>Filtru de particule</span>
  </label>
</div>

         
          </div>
        </div>
      )}






      <span
  className={`cauta-button ${showSiguranta ? "active" : ""}`}
  onClick={handleSigurantaToggle}
>
 Siguranta
</span>

      {showSiguranta && (
        <div className="filter-container" style={{ background: "#d5d5d5" }}>
          <div className="filter-item">
            
          <div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("ABS")}
      name="ABS"
      onChange={handleCbClick}
    />
    <span>ABS</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("ESP")}
      name="ESP"
      onChange={handleCbClick}
    />
    <span>ESP</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("EBD")}
      name="EBD"
      onChange={handleCbClick}
    />
    <span>EBD</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Franare asistata")}
      name="Franare asistata"
      onChange={handleCbClick}
    />
    <span>Franare asistată</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem asistenta franare oras")}
      name="Sistem asistenta franare oras"
      onChange={handleCbClick}
    />
    <span>Sistem asistență frânare oraș</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem franare automata pietoni")}
      name="Sistem franare automata pietoni"
      onChange={handleCbClick}
    />
    <span>Sistem frânare automată pietoni</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem activ franare urgenta")}
      name="Sistem activ franare urgenta"
      onChange={handleCbClick}
    />
    <span>Sistem activ frânare urgentă</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem avertizare pre-coliziune")}
      name="Sistem avertizare pre-coliziune"
      onChange={handleCbClick}
    />
    <span>Sistem avertizare pre-coliziune</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Avertizare sonora pre-coliziune")}
      name="Avertizare sonora pre-coliziune"
      onChange={handleCbClick}
    />
    <span>Avertizare sonoră pre-coliziune</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem pre-coliziune spate")}
      name="Sistem pre-coliziune spate"
      onChange={handleCbClick}
    />
    <span>Sistem pre-coliziune spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem pre-coliziune lateral")}
      name="Sistem pre-coliziune lateral"
      onChange={handleCbClick}
    />
    <span>Sistem pre-coliziune lateral</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem avertizare marsarier")}
      name="Sistem avertizare marsarier"
      onChange={handleCbClick}
    />
    <span>Sistem avertizare mărsărier</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem acustic avertizare pietoni")}
      name="Sistem acustic avertizare pietoni"
      onChange={handleCbClick}
    />
    <span>Sistem acustic avertizare pietoni</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem monitorizare stare sofer")}
      name="Sistem monitorizare stare sofer"
      onChange={handleCbClick}
    />
    <span>Sistem monitorizare stare șofer</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem activ recomandare pauza sofer")}
      name="Sistem activ recomandare pauza sofer"
      onChange={handleCbClick}
    />
    <span>Sistem activ recomandare pauză șofer</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Sistem activ monitorizare sofer cu asistenta de urgenta")}
      name="Sistem activ monitorizare sofer cu asistenta de urgenta"
      onChange={handleCbClick}
    />
    <span>Sistem activ monitorizare șofer cu asistență de urgență</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Active lane control assistant")}
      name="Active lane control assistant"
      onChange={handleCbClick}
    />
    <span>Active lane control assistant</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Asistenta telefonica urgenta")}
      name="Asistenta telefonica urgenta"
      onChange={handleCbClick}
    />
    <span>Asistență telefonică urgentă</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Apelare automata 112")}
      name="Apelare automata 112"
      onChange={handleCbClick}
    />
    <span>Apelare automată 112</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag sofer")}
      name="Airbag sofer"
      onChange={handleCbClick}
    />
    <span>Airbag șofer</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag scaun pasager")}
      name="Airbag scaun pasager"
      onChange={handleCbClick}
    />
    <span>Airbag scaun pasager</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag genunchi sofer")}
      name="Airbag genunchi sofer"
      onChange={handleCbClick}
    />
    <span>Airbag genunchi șofer</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag genunchi pasager")}
      name="Airbag genunchi pasager"
      onChange={handleCbClick}
    />
    <span>Airbag genunchi pasager</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag-uri cap fata")}
      name="Airbag-uri cap fata"
      onChange={handleCbClick}
    />
    <span>Airbag-uri cap față</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag central sofer si pasager")}
      name="Airbag central sofer si pasager"
      onChange={handleCbClick}
    />
    <span>Airbag central șofer și pasager</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag-uri frontale pasageri spate")}
      name="Airbag-uri frontale pasageri spate"
      onChange={handleCbClick}
    />
    <span>Airbag-uri frontale pasageri spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag lateral sofer")}
      name="Airbag lateral sofer"
      onChange={handleCbClick}
    />
    <span>Airbag lateral șofer</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag lateral sofer si pasager")}
      name="Airbag lateral sofer si pasager"
      onChange={handleCbClick}
    />
    <span>Airbag lateral șofer și pasager</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag-uri cap spate")}
      name="Airbag-uri cap spate"
      onChange={handleCbClick}
    />
    <span>Airbag-uri cap spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag-uri laterale spate")}
      name="Airbag-uri laterale spate"
      onChange={handleCbClick}
    />
    <span>Airbag-uri laterale spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Airbag cortina spate")}
      name="Airbag cortina spate"
      onChange={handleCbClick}
    />
    <span>Airbag cortină spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Centura de siguranta cu airbag spate")}
      name="Centura de siguranta cu airbag spate"
      onChange={handleCbClick}
    />
    <span>Centură de siguranță cu airbag spate</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Isofix")}
      name="Isofix"
      onChange={handleCbClick}
    />
    <span>Isofix</span>
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      checked={selected.includes("Roll bar")}
      name="Roll bar"
      onChange={handleCbClick}
    />
    <span>Roll bar</span>
  </label>
</div>

         
          </div>
        </div>
      )}






      </div>
        </>
    );
};







