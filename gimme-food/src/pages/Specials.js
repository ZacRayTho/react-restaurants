import Nav from "../components/Nav"

export default function Specials(props) {

    const { food, setFood } = props;

    let date = new Date();
    let cheap;
    let rando;
    let specials = [];

    function random() {
        for (let i = 0; i < 6; i++) {
            while (rando === undefined) {
                // console.log("help")
                let x = Math.random() * 100;
                // console.log(x.floor)
                if (Math.floor(x) > 0 && Math.floor(x) < 59) {
                    console.log("if")
                    rando = Math.floor(x);
                }
            }
            specials.push(rando);
            rando = undefined;
        }
        cheap = food.filter((item) => {

            return (specials.includes(item.id))
        })
        console.log(cheap)
        localStorage.setItem("specials", JSON.stringify(cheap))
        console.log(cheap)
    }

    function newWeek() {
        if (localStorage.getItem("specials") !== null) {
            if (date.getDay === 1) {
                random()
            }
            else {
                cheap = JSON.parse(localStorage.getItem("specials"))
            }
        }
        else {
            random()
        }
    }
    newWeek()







    return (
        <>
            <Nav />

            <div>
                <h1 className="text-center bg-white">This Week Specials!</h1>
                <table className="table bg-white">
                    <thead>
                        <tr>
                            <th scope="col">Monday</th>
                            <th scope="col">Tuesday</th>
                            <th scope="col">Wednesday</th>
                            <th scope="col">Thursday</th>
                            <th scope="col">Friday</th>
                            <th scope="col">Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {cheap.map((item) => {
                                return (<td>{item.title}<p className="text-decoration-line-through">{item.price}</p>{item.price - 2.00}</td>)

                            })}
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}