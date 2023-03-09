import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Food from "../components/Food";

export default function Menu(props) {

    const { cart, setCart, filter, setFilter } = props;

    const [food, setFood] = useState([])
    


    useEffect(
        
        
        function apiCall() {
            let options = {
                baseURL: "https://www.jsonkeeper.com/b/MDXW",
                params: {}
            }
            axios.get('/', options)
                .then(function (response) {
                    // console.log(response.data);
                    setFood([...response.data])
                })
                .catch(function (error) {
                    console.log("FAILURE HERE " + error);

                })
        }
        , [])



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
                <h1 className="text-center m-1" style={{ fontSize: "100px", color: "white", fontFamily: "chalk" }}>Menu</h1>
                <div className="text-center btn-group bg-white w-75">
                    <button className="btn btn-transparent" onClick={() => { handleClick("All") }}>All</button>
                    <button className="btn btn-transparent" onClick={() => { handleClick("Breakfast") }}>Breakfast</button>
                    <button className="btn btn-transparent" onClick={() => { handleClick("Lunch") }}>Lunch</button>
                    <button className="btn btn-transparent" onClick={() => { handleClick("Appetizer") }}>Appetizer</button>
                    <button className="btn btn-transparent" onClick={() => { handleClick("Dinner") }}>Dinner</button>
                    <button className="btn btn-transparent" onClick={() => { handleClick("Drink") }}>Drink</button>
                </div>

                {active.map((item, index) => <Food cart={cart} setCart={setCart} item={item} key={index}></Food>)}

            </div>

        </>
    )
}