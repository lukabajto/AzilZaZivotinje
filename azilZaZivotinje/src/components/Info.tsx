import UnosEmail from "./UnosEmail";


function Info() {
    return (
        <>
            <div className="wrapper">
                <div className="vertical-div">
                    <h4>Azil za životinje</h4>
                    <p className="verticalText">
                        <b>Adresa:</b><i> Ulica Ivana Gundulića 16</i>
                    </p>
                    <br></br>
                    <p className="verticalText">
                        <b>Radno vrijeme:</b>
                    </p>
                    <p className="verticalText">10:00 - 17:00</p>
                    <br></br>
                    <p className="verticalText"><b>Vlasnik:</b> Ivo Matić</p>

                </div>


                <div className="horizontal-div top">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.439208061325!2d16.434903776712133!3d43.514033071109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355dfcdfe981d9%3A0xc2e2a52b84ab0e52!2sUl.%20Ivana%20Gunduli%C4%87a%2016%2C%2021000%2C%20Split!5e0!3m2!1sen!2shr!4v1682787652372!5m2!1sen!2shr" width={1210} height={300} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">    
                    </iframe>
                </div>

            </div>
            <br/>
            <h4>Kontaktiraj nas:</h4>
            <UnosEmail/>
        </>
    )
}
export default Info;