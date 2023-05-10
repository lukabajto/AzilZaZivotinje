import axios from "axios";
import { useState, useEffect } from "react";
import OkvirObavijesti from "./OkvirObavijesti";
import UnosObavijesti from "./UnosObavijesti";

function Obavijesti({isAdmin}) {
    
    const [obavijesti, postaviObavijesti] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:3001/obavijesti/")
          .then(res => postaviObavijesti(res.data));
    }, []);
    
    async function osvjeziObavijesti() {
        await axios
          .get("http://localhost:3001/obavijesti/")
          .then(res => postaviObavijesti(res.data));
    }
    
    return (
        <div className="obavijesti">
            <h4>Popis obavijesti</h4>
            <OkvirObavijesti obavijesti={obavijesti} osvjeziObavijesti={osvjeziObavijesti} isAdmin={isAdmin} />
            <h4>Unos obavijesti</h4>
            <UnosObavijesti osvjeziObavijesti={osvjeziObavijesti} isAdmin={isAdmin} />
        </div>
    )
}
export default Obavijesti;