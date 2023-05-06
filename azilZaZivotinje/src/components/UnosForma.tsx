import { useState, useEffect} from "react";
import axios from "axios";

function UnosForma(props) {
    const [vrste, postaviVrste] = useState([])
    const [formaPodaci, postaviPodatke] = useState({
        ime: "",
        vrsta: vrste[0],
        cip: "",
        godine: "",
        opis: "",
        pregled: "",
        udomljen: ""
    })
    const [uspjesnoUneseno, postaviTekstUneseno] = useState(false)

    useEffect(() => {
        axios
          .get("http://localhost:3001/vrste")
          .then(rez => postaviVrste(rez.data))
          .catch(err => console.log(err.message));
      }, []);

    const saljiPodatke = event => {
        event.preventDefault();
        console.log(formaPodaci);
       
        const zaSlanje = obradiPodatke(formaPodaci)
        
        axios.post('http://localhost:3001/zivotinje', zaSlanje)
            .then(rez => {
                props.dodaj(stanje => [...stanje, rez.data])
                postaviTekstUneseno(true);
            })
    }

    function obradiPodatke(objekt) {
        return {
            "ime": objekt.ime,
            "vrsta": objekt.vrsta,
            "cip": objekt.cip === "true",
            "godine": objekt.godine,
            "opis": objekt.opis,
            "pregled": objekt.pregled,
            "udomljen": objekt.udomljen === "true"
        }
    }
    
    function promjenaUlaza(event) {
        const { name, value } = event.target;
        postaviPodatke({ ...formaPodaci, [name]: value });
    }

    return (
            <form onSubmit={saljiPodatke}>
                {uspjesnoUneseno && <h4>Uspješno unesena!</h4>}
                <div className="unos-forma-div">
                    <label>
                        Ime:
                        <input
                            type='text'
                            name='ime'
                            value={formaPodaci.ime}
                            onChange={promjenaUlaza}
                            required
                        />
                    </label>
                </div>

                <div className="unos-forma-div">
                    <label>Vrsta:    
                        <select name="vrsta" onChange={promjenaUlaza}><option value="">Odaberi vrstu</option>
                        {vrste.map(vrsta => (
                            <option key={vrsta} value={vrsta}>{vrsta}</option>
                        ))}
                        </select>
                    </label>
                </div>

                <div className="select-div">
                    <label>Čip:
                    <select name="cip" value={formaPodaci.cip} onChange={promjenaUlaza}>
                            <option value="">Odaberi</option>
                            <option value={true}>Da</option>
                            <option value={false}>Ne</option>
                        </select>
                    </label>
                </div>
             
                <div className="unos-forma-div">
                    <label>
                        Godine:
                        <input type="text" name="godine" value={formaPodaci.godine} onChange={promjenaUlaza} required />
                    </label>
                </div>
                    
                <div className="unos-forma-div">
                    <label>
                        Opis:
                        <input type="text" name="opis" value={formaPodaci.opis} onChange={promjenaUlaza} />
                    </label>
                </div>


                <div className="unos-forma-div">
                    <label>
                        Pregled:
                        <input type="text" name="pregled" value={formaPodaci.pregled} onChange={promjenaUlaza} required />
                    </label>
                </div>

                <div>
                    <label>Udomljen:
                        <select name="udomljen" value={formaPodaci.udomljen} onChange={promjenaUlaza}>
                            <option value="">Odaberi</option>
                            <option value={true}>Da</option>
                            <option value={false}>Ne</option>
                        </select>
                    </label>
                </div>

            
                <br></br>

            

            <button type='submit'>Nova životinja</button>
            
            </form>
    )

}

export default UnosForma;