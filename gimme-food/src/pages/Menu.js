
import Nav from "../components/Nav";
import Food from "../components/Food";

export default function Menu(props) {

    const { cart, setCart, filter, setFilter, food } = props;
   
    function handleClick(category) {
        setFilter(category)
    }

    let active;
    switch (filter) {
        default:
        case "All": active = food
            break;
        case "Breakfast": active = food.filter((item) => item.category === "Breakfast")
            break;
        case "Appetizer": active = food.filter((item) => item.category === "Appetizer")
            break;
        case "Lunch": active = food.filter((item) => item.category === "Lunch")
            break;
        case "Dinner": active = food.filter((item) => item.category === "Dinner")
            break;
        case "Drink": active = food.filter((item) => item.category === "Drink")
            break;
    }


    return (
        <>
            <Nav />

            <div className="container bg-img2 w-75 d-flex justify-content-center row mx-auto">
                <h1 className="text-center m-1 " style={{ fontSize: "12vw", color: "white", fontFamily: "chalk" }}>Menu</h1>
                <div className="text-center btn-group bg-white w-75 row">
                    <button className="col-auto btn btn-transparent" onClick={() => { handleClick("All") }}>All</button>
                    <button className="col-auto btn btn-transparent" onClick={() => { handleClick("Breakfast") }}>Breakfast</button>
                    <button className="col-auto btn btn-transparent" onClick={() => { handleClick("Lunch") }}>Lunch</button>
                    <button className="col-auto btn btn-transparent" onClick={() => { handleClick("Appetizer") }}>Appetizer</button>
                    <button className="col-auto btn btn-transparent" onClick={() => { handleClick("Dinner") }}>Dinner</button>
                    <button className="col-auto btn btn-transparent" onClick={() => { handleClick("Drink") }}>Drink</button>
                </div>

                {active.map((item, index) => <Food cart={cart} setCart={setCart} item={item} key={index}></Food>)}

            </div>

        </>
    )
}