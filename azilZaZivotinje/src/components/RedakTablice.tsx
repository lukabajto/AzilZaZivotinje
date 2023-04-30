import axios from "axios";
import { useState, useEffect } from "react";
import FormaZaUredivanje from "./FormaZaUredivanje";

function RedakTablice({ rez, isAdmin }) {
  
  const [odabranaZivotinja, postaviOdabranaZivotinja] = useState(null)
  const [udomljen, setUdomljen] = useState(false);
  const [cipiran, setCipiran] = useState(false)
  
  function handleUdomi(id) {
    axios
      .patch(`http://localhost:3001/zivotinje/${id}`, { udomljen: true, })
      .then(setUdomljen(true))
      .catch(err => console.log(err));
  }

  function handleUredi(id) {
    axios
      .patch(`http://localhost:3001/zivotinje/${id}`, { cip: !cipiran })
      .then(rez => setCipiran(rez.data.cip)).catch(err => console.log(err))
  }

  useEffect(() => {
    setUdomljen(rez.udomljen);
  }, [rez.udomljen]);

  useEffect(() => {
    setCipiran(rez.cip);
  }, [rez.cip]);
  
  return (
    
    <tr>
      <td>{rez.ime}</td>
      <td>{rez.vrsta}</td>
      {cipiran && <td>Da</td>}
      {!cipiran && <td>Ne</td>}   
      <td>{rez.godine}</td>
      <td>{rez.opis}</td>
      <td>{rez.pregled}</td>
      {udomljen && <td>Udomljen</td>}
      {!udomljen && <td>Nije udomljen</td>}
      <td><button onClick={() => handleUdomi(rez.id)}>Udomi</button></td>
      {isAdmin && <td><button onClick={() => handleUredi(rez.id)}>Uredi čip</button></td>}
    </tr>
    
    
  );
}

export default RedakTablice;
