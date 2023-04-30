import { useState, useEffect } from "react";

function RedakTablice({ rez }) {
    const [udomljen, setUdomljen] = useState(false);
    const [cipiran, setCipiran] = useState(false)
    
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
    </tr>
  );
}

export default RedakTablice;
