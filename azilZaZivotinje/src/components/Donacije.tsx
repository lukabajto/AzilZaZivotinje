import { useState, useEffect } from "react";
import axios from "axios";
import OkvirDonacije from "./OkvirDonacije";
import UnosDonacije from "./UnosDonacije";
import UnosDonacijeUser from "./UnosDonacijeUser";

function Donacije({isAdmin}) {
    const [donacije, postaviDonacije] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:3001/donacije/")
          .then(res => postaviDonacije(res.data));
    }, []);

    async function osvjeziDonacije() {
        await axios
          .get("http://localhost:3001/donacije/")
          .then(res => postaviDonacije(res.data));
    }

    return (
        <div className="donacije">
            
            <OkvirDonacije donacije={donacije} osvjeziDonacije={osvjeziDonacije} isAdmin={isAdmin} />
            <br />
            {!isAdmin && <UnosDonacijeUser osvjeziDonacije={osvjeziDonacije}/>}
            <br />
            {isAdmin && <UnosDonacije osvjeziDonacije={osvjeziDonacije}/>}
        </div>
    )

}
export default Donacije;