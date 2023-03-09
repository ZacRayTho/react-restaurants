import Nav from "../components/Nav"



export default function Land() {
    return (
        <>
            <Nav />

            <div className="mx-auto bg-white w-75">
                <div className="row">

                    <div className="col-12 text-center">
                        <h1 className="mb-3">Welcome to <b>Justin's</b>, Food so good its to sin for!</h1>
                        <h2>Wondering where you can get such delicious food? We're located at:</h2>
                        <h2>348 E Main St, Lexington, KY</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1678376578660!6m8!1m7!1siDginUY_SmJGug7wA_OIRA!2m2!1d38.04223995415456!2d-84.49244062656197!3f228.09059078569226!4f9.645244076816837!5f0.7820865974627469"
                            width={600}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="googleMaps"
                        />


                        <h3>Open at:</h3>

                        <ul>
                            <li>Monday: 8:00 AM - 8:00 PM</li>
                            <li>Tuesday: 8:00 AM - 8:00 PM</li>
                            <li>Wednesday: 8:00 AM - 8:00 PM</li>
                            <li>Thursday:8:00 AM - 8:00 PM</li>
                            <li>Friday: 8:00 AM - 10:00 PM</li>
                            <li>Saturday: 8:00 AM - 10:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                        <h3>Contact us:</h3>
                        <p>(859) 867-5309</p>

                    </div>

                    <div className="col-6 my-5 ">
                        <h4 className="text-center">Our founder, Justin, training an apprentice in our new Chef Bootcamp! Contact us for more info if you're interested!</h4>
                        <img className="d-flex mx-auto" src="./img/headChef.jpg" alt="master chef training apprentice"></img>
                    </div>
                    <div className="col-6 my-5">
                        <h4 className="text-center"> An average night at Justin's, place your reservations early!</h4>
                        <img className="d-flex mx-auto" src="./img/JustinBusyNight.jpg" alt="busy night at justin's"></img>
                    </div>
                </div>
            </div>
        </>
    )
}