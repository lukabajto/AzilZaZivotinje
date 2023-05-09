import axios from "axios";

function OkvirObavijesti({ obavijesti, osvjeziObavijesti, isAdmin }) {
    obavijesti.sort((a, b) => new Date(b.datum) - new Date(a.datum));
    function brisiObavijest(idObavijesti) {
        axios
        .delete(`http://localhost:3001/obavijesti/${idObavijesti}`).then(() => osvjeziObavijesti()).catch(err => console.log(err))
    }


    return (
        <>
            {obavijesti.map(r => (
                <div className={`div-obavijesti ${r.vazno === 'nista' ? 'nema-vazno' : r.vazno ? 'vazno' : 'nije-vazno'}`}>
                    <h4>{r.naslov}</h4>
                    <h6>{r.datum}</h6>
                    <p>{r.tekst}</p>
                    {!isAdmin && <br></br>}
                    {isAdmin && <button className="brisiObavijest" onClick={() => brisiObavijest(r.id)}>Izbriši</button>}
               </div> 
            ))}
        </>
    )


}
export default OkvirObavijesti;