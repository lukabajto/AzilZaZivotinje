import { useState } from "react";
import axios from "axios";
function UnosEmail() {
    const [uspjesnoUneseno, postaviTekstUneseno] = useState(false)
    const [formaPodaciEmail, postaviPodatkeEmail] = useState({
        naslovPoruke: "",
        tekstPoruke: "",
        emailAdresa: ""
    })

    const saljiPodatkeMail = event => {
        event.preventDefault();
        console.log(formaPodaciEmail);

        const zaSlanjeMail = obradiPodatkeMail(formaPodaciEmail)

        axios.post('http://localhost:3001/poruke', zaSlanjeMail)
            .then(rez => {
                postaviTekstUneseno(true);
                postaviPodatkeEmail({
                    naslovPoruke: "",
                    tekstPoruke: "",
                    emailAdresa: ""
                });
            })
            .catch(err => console.log(err));
    }

    function obradiPodatkeMail(objekt) {
        return {
            naslovPoruke: objekt.naslovPoruke,
            tekstPoruke: objekt.tekstPoruke,
            emailAdresa: objekt.emailAdresa
        }
    }

    function promjenaUlazaMail(event) {
        const { name, value } = event.target;
        postaviPodatkeEmail({ ...formaPodaciEmail, [name]: value });
    }

    return (
        <form onSubmit={saljiPodatkeMail}>
            <div className="unos-forma-div">
                <label >Naslov poruke:
                    <input type="text" name="naslovPoruke" value={formaPodaciEmail.naslovPoruke} onChange={promjenaUlazaMail} required/>
                </label>
            </div>

            <div className="unos-forma-div">
                <label >Tekst poruke:
                    <input type="text" name="tekstPoruke" value={formaPodaciEmail.tekstPoruke} onChange={promjenaUlazaMail} required/>
                </label>
            </div>

            <div className="unos-forma-div">
                <label >Vaša e-pošta:
                    <input type="email" name="emailAdresa" value={formaPodaciEmail.emailAdresa} onChange={promjenaUlazaMail} required/>
                </label>
            </div>

            <button type='submit'>Pošalji poruku</button>

        </form>
    )
}
export default UnosEmail;