import RedakTablice from "./RedakTablice";

function Tablica({ zivotinje }) {
 
    return (
        <table>
            <thead>
                <tr>
                    <th>Ime</th>
                    <th>Vrsta</th>
                    <th>Čip</th>
                    <th>Godine</th>
                    <th>Opis</th>
                    <th>Pregled</th>
                    <th>Udomljen</th>
                </tr>
            </thead>
            <tbody>
            {zivotinje.map(r => (
            <RedakTablice key={r.id} rez={r} />
            ))}
            </tbody>
        </table>
 );
}

export default Tablica;
