export default function Perks({selected,onChange}) {

  function handleCbClick(ev) {
    const {checked,name} = ev.target;
    if (checked) {
     onChange([...selected,name]);
   
    } else {
     onChange([...selected.filter(selectedName => selectedName !== name)]);
   
   
    }
   }


    return(
        <>
            <h2>Optiuni</h2>
          <p>Selectacti din optiunile</p>
          <div className="optiuni">
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
        </>
    );
};