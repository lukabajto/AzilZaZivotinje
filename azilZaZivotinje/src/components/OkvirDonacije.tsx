import axios from "axios";

function OkvirDonacije({donacije, osvjeziDonacije, isAdmin}) {
    
    function postaviDonirano(id) {
        axios.patch(`http://localhost:3001/donacije/${id}`, {
            kategorija: "donirano",
        }).then(() => osvjeziDonacije())
    }

    function izbrisiAdmin(id) {
        axios.delete(`http://localhost:3001/donacije/${id}`)
        .then(() => osvjeziDonacije())
    }

    function ponoviZahtjev(id) {
        console.log("Provjeraaaaaaaa")
        const donacija = donacije.find(d => d.id === id);
        console.log(donacija)
        const novaDonacija = {
          id: donacije.length + 5, // generiranje novog ID-a
          kategorija: "trazi",
          tip: donacija.tip,
          vrijednost: donacija.vrijednost,
          opis: donacija.opis
        };
        console.log(novaDonacija)
        axios
          .post("http://localhost:3001/donacije", novaDonacija)
          .then(() => osvjeziDonacije())
          .catch(err => console.log(err));
      }

    return (
        <>
            <h4>Tražimo:</h4>
            <table className="donacijeTrazi">
                <thead>
                    <th>Tip</th>
                    <th>Vrijednost</th>
                    <th>Opis</th>
                    <th>Akcija</th>
                    {isAdmin && <th>Označi</th>}
                    {isAdmin && <th>Izbriši</th>}
                </thead>
                <tbody>
                    {donacije.filter(r => r.kategorija === "trazi").map(rez => (
                        <tr>
                            <td>{rez.tip}</td>
                            <td>{rez.vrijednost}</td>
                            <td>{rez.opis}</td>
                            <td><button onClick={() => postaviDonirano(rez.id)}>Doniraj</button></td>
                            {isAdmin && <td><button onClick={() => postaviDonirano(rez.id)}>Donirano</button></td>}
                            {isAdmin && <td><button onClick={() => izbrisiAdmin(rez.id)}>Izbriši</button></td>}
                        </tr>
                    ))}
                </tbody>
            </table>

            <h4>Nudi se:</h4>
            <table className="donacijeNudi">
                <thead>
                    <th>Tip</th>
                    <th>Vrijednost</th>
                    <th>Opis</th>
                    {isAdmin && <th>Označi</th>}
                </thead>
                <tbody>
                    {donacije.filter(r => r.kategorija === "nudi").map(rez => (
                        <tr>
                            <td>{rez.tip}</td>
                            <td>{rez.vrijednost}</td>
                            <td>{rez.opis}</td>
                            {isAdmin && <td><button onClick={() => postaviDonirano(rez.id)}>Donirano</button></td>}
                        </tr>
                    ))}
                </tbody>
            </table>

            <h4>Donirano:</h4>
            <table className="donacijeDonirano">
                <thead>
                    <th>Tip</th>
                    <th>Vrijednost</th>
                    <th>Opis</th>
                    {isAdmin && <th>Briši</th>}
                    {isAdmin && <th>Ponovi</th>}
                </thead>
                <tbody>
                    {donacije.filter(r => r.kategorija === "donirano").map(rez => (
                        <tr>
                            <td>{rez.tip}</td>
                            <td>{rez.vrijednost}</td>
                            <td>{rez.opis}</td>
                            {isAdmin && <td><button onClick={() => izbrisiAdmin(rez.id)}>Izbriši</button></td>}
                            {isAdmin && <td><button onClick={() => ponoviZahtjev(rez.id)}>Ponovi zahtjev</button></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default OkvirDonacije;