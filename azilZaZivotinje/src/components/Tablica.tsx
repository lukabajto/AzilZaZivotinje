import RedakTablice from "./RedakTablice";

function Tablica({ zivotinje, isAdmin }) {
    
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
                    <th>Akcije</th>
                    {isAdmin && <th>Promjena</th>}
                </tr>
            </thead>
            <tbody>
            {zivotinje.map(r => (
            <RedakTablice key={r.id} rez={r} isAdmin={isAdmin} />
            ))}
            </tbody>
        </table>
 );
}

export default Tablica;
