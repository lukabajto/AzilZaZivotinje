import { useState } from "react";
import axios from "axios";

function UnosForma(props) {

    const [formaPodaci, postaviPodatke] = useState({
        ime: "",
        vrsta: "",
        cip: "",
        godine: "",
        opis: "",
        pregled: "",
        udomljen: false
    })

    const saljiPodatke = event => {
        event.preventDefault();
        console.log(formaPodaci);
       
        const zaSlanje = obradiPodatke(formaPodaci)
        
        axios.post('http://localhost:3001/zivotinje', zaSlanje)
            .then(rez => {
                props.dodaj(stanje => [...stanje, rez.data])
            })
    }

    function obradiPodatke(objekt) {
        return {
            "ime": objekt.ime,
            "vrsta": objekt.vrsta,
            "cip": objekt.cip,
            "godine": objekt.godine,
            "opis": objekt.opis,
            "pregled": objekt.pregled,
            "udomljen": objekt.udomljen
        }
    }
    
    function promjenaUlaza(event) {
        const { name, value } = event.target;
        postaviPodatke({ ...formaPodaci, [name]: value });
    }

    return (
            <form onSubmit={saljiPodatke}>
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
                    <label>
                        Vrsta:
                        <input type="text" name="vrsta" value={formaPodaci.vrsta} onChange={promjenaUlaza} required />
                    </label>
                </div>

                <div className="select-div">
                    <label>Čip:
                        <select name="cip" value={formaPodaci.cip} onChange={promjenaUlaza}>
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
                        <input type="text" name="opis" value={formaPodaci.opis} onChange={promjenaUlaza} required />
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