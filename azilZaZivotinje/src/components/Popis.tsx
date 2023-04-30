import axios from "axios";
import { useEffect, useState } from "react";
import Tablica from "./Tablica";
import UnosForma from "./UnosForma";

function Popis() {
    const [zivotinje, postaviZivotinje] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:3001/zivotinje")
            .then(res => postaviZivotinje(res.data));
    }, []);

    return (
        <>
            <h4>Popis životinja</h4>
            <Tablica zivotinje={zivotinje} />
            <UnosForma dodaj={postaviZivotinje} />
        </>
    )
        
}
export default Popis;