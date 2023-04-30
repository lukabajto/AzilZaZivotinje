import axios from "axios";
import { useEffect, useState } from "react";
import Tablica from "./Tablica";


function Popis(props) {
    const [zivotinje, postaviZivotinje] = useState([])
    const [filtrirano, postaviFiltrirano] = useState(null)
    const { isAdmin } = props;

    useEffect(() => {
        axios
            .get("http://localhost:3001/zivotinje")
            .then(res => postaviZivotinje(res.data));
    }, []);

    function handleFilter(filtriraj) {
        postaviFiltrirano(filtriraj)
    }

    let filtriraneZivotinje = zivotinje;
    if (filtrirano !== null) {
        filtriraneZivotinje = zivotinje.filter(zivotinja => zivotinja.udomljen === filtrirano);
    }

    return (
        <>
            <h4>Popis životinja</h4>
            <div>
                <h6>Filter:</h6>
                <button onClick={() => handleFilter(null)}>Sve</button>
                <button onClick={() => handleFilter(true)}>Udomljene</button>
                <button onClick={() => handleFilter(false)}>Nisu udomljene</button>
            </div>
            <Tablica zivotinje={filtriraneZivotinje} isAdmin={isAdmin} />
            
        </>
    )
        
}
export default Popis;