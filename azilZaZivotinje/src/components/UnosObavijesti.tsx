import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function UnosObavijesti({ osvjeziObavijesti, isAdmin }) {
    const [uspjesnoUneseno, postaviTekstUneseno] = useState(false)
    const [formaPodaciObavijest, postaviPodatkeObavijest] = useState({
        naslov: "",
        datum: "",
        tekst: "",
        vazno: ""
    })

    const saljiPodatkeObavijesti = event => {
        event.preventDefault();
        console.log(formaPodaciObavijest);

        const zaSlanjeObavijesti = obradiPodatkeObavijesti(formaPodaciObavijest)

        axios.post('http://localhost:3001/obavijesti', zaSlanjeObavijesti)
            .then(rez => {
                osvjeziObavijesti()
                postaviTekstUneseno(true);
            })
    }

    function obradiPodatkeObavijesti(objekt) {
        const podaci = {
            naslov: objekt.naslov,
            datum: objekt.datum,
            tekst: objekt.tekst,
        };

        if (isAdmin) {
            podaci.vazno = objekt.vazno === "true";
        } else {
            podaci.vazno = "nista";
        }

        return podaci;
    }

    function promjenaUlazaObavijesti(event) {
        const { name, value } = event.target;
        postaviPodatkeObavijest({...formaPodaciObavijest, [name]: value})
    }

    


    return (
        <form onSubmit={saljiPodatkeObavijesti}>
            {uspjesnoUneseno && <h4>Uspješno unesena!</h4>}
            <div className="unos-forma-div">
                <label>Naslov:
                    <input type="text" name="naslov" value={formaPodaciObavijest.naslov} onChange={promjenaUlazaObavijesti} required/>
                </label>
            </div>

            <div className="unos-forma-div">
                <label>Datum:
                    <input type="text" name="datum" value={formaPodaciObavijest.datum} onChange={promjenaUlazaObavijesti} required/>
                </label>
            </div>

            <div className="unos-forma-div">
                <label>Tekst:
                    <input type="text" name="tekst" value={formaPodaciObavijest.tekst} onChange={promjenaUlazaObavijesti} required/>
                </label>
            </div>

            {isAdmin && <div className="select-div">
                    <label>Važno:
                    <select name="vazno" value={formaPodaciObavijest.vazno} onChange={promjenaUlazaObavijesti}>
                            <option value="">Odaberi</option>
                            <option value={true}>Da</option>
                            <option value={false}>Ne</option>
                        </select>
                    </label>
            </div>}
            
            <button type='submit'>Nova obavijest</button>
        </form>

    )
 }
export default UnosObavijesti;