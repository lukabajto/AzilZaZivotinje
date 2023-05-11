import { useState, useEffect } from "react";
import axios from "axios";
import OkvirDonacije from "./OkvirDonacije";

function Donacije() {
    const [donacije, postaviDonacije] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:3001/donacije/")
          .then(res => postaviDonacije(res.data));
    }, []);



    return (
        <div className="donacije">
            <h4>Popis donacije</h4>
            <OkvirDonacije donacije={donacije}/>
        </div>
    )

}
export default Donacije;