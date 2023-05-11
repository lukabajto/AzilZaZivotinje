import axios from "axios";

function OkvirDonacije({donacije}) {
    


    return (
        <>
            <h4>Tražimo:</h4>
            <table className="donacijeTrazi">
                <thead>
                    <th>Tip</th>
                    <th>Vrijednost</th>
                    <th>Opis</th>
                    <th>Radnje</th>
                </thead>
                <tbody>
                    {donacije.filter(r => r.kategorija === "trazi").map(rez => (
                        <tr>
                            <td>{rez.tip}</td>
                            <td>{rez.vrijednost}</td>
                            <td>{rez.opis}</td>
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
                    <th>Radnje</th>
                </thead>
                <tbody>
                    {donacije.filter(r => r.kategorija === "nudi").map(rez => (
                        <tr>
                            <td>{rez.tip}</td>
                            <td>{rez.vrijednost}</td>
                            <td>{rez.opis}</td>
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
                    <th>Radnje</th>
                </thead>
                <tbody>
                    {donacije.filter(r => r.kategorija === "donirano").map(rez => (
                        <tr>
                            <td>{rez.tip}</td>
                            <td>{rez.vrijednost}</td>
                            <td>{rez.opis}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default OkvirDonacije;