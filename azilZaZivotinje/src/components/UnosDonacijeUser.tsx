import { useState } from "react";
import axios from "axios";
function UnosDonacijeUser({osvjeziDonacije}) {
    const [uspjesnoUneseno, postaviTekstUneseno] = useState(false)
    const [formaPodaciDonacija, postaviPodatkeDonacija] = useState({
        tip: "",
        vrijednost: "",
        opis: "",
        kategorija: ""
    })

    const saljiPodatkeDonacija = event => {
        event.preventDefault();
        console.log(formaPodaciDonacija);

        const zaSlanjeDonacija = obradiPodatkeDonacija(formaPodaciDonacija)
        
        axios.post('http://localhost:3001/donacije', zaSlanjeDonacija)
            .then(rez => {
                osvjeziDonacije()
                postaviTekstUneseno(true);
                postaviPodatkeDonacija({
                    tip: "",
                    vrijednost: "",
                    opis: "",
                    kategorija: ""
                });
            })
    }

    function obradiPodatkeDonacija(objekt) {
        return {
            "tip": objekt.tip,
            "vrijednost": objekt.vrijednost,
            "opis": objekt.opis,
            "kategorija": "nudi"
        }
    }

    function promjenaUlazaDonacije(event) {
        const { name, value } = event.target;
        postaviPodatkeDonacija({ ...formaPodaciDonacija, [name]: value });
    }

    return (
        <form onSubmit={saljiPodatkeDonacija}>
            {uspjesnoUneseno && <h5>Uspješno unesena!</h5>}
            {!uspjesnoUneseno && <h4>Nova donacija:</h4>}
            <div className="select-div">
                    <label>Tip:
                        <select name="tip" value={formaPodaciDonacija.tip} onChange={promjenaUlazaDonacije}>
                            <option value="">Odaberi</option>
                            <option value={"Hrana"}>Hrana</option>
                            <option value={"Ljekovi"}>Ljekovi</option>
                            <option value={"Igračke"}>Igračke</option>
                            <option value={"Ostalo"}>Veterinarski troškovi</option>
                        </select>
                    </label>
            </div>
            
            
            <div className="unos-forma-div">
                <label>Vrijednost:
                    <input type="number" name="vrijednost" value={formaPodaciDonacija.vrijednost} onChange={promjenaUlazaDonacije} required/>
                </label>
            </div>

            <div className="unos-forma-div">
                <label>Opis:
                    <input type="text" name="opis" value={formaPodaciDonacija.opis} onChange={promjenaUlazaDonacije} />
                </label>
            </div>

            <button type='submit'>Nova donacija</button>
        </form>
    )
}
export default UnosDonacijeUser;