import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Food from "../components/Food";
export default function Menu() {

    const [food, setFood] = useState([])
    const [filter, setFilter] = useState("All")

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


    return (
        <>
            <Nav />

            <div className="container bg-img2 w-75 d-flex justify-content-center row mx-auto">
                <h1 className="text-center m-1" style={{ fontSize: "100px", color: "white", fontFamily: "chalk"}}>Menu</h1>
                <div className="text-center btn-group bg-white w-75">
                    <button className="btn btn-transparent" onClick={() => {handleClick("All")}}>All</button>
                    <button className="btn btn-transparent" onClick={() => {handleClick("Breakfast")}}>Breakfast</button>
                    <button className="btn btn-transparent" onClick={() => {handleClick("Lunch")}}>Lunch</button>
                    <button className="btn btn-transparent" onClick={() => {handleClick("Appetizer")}}>Appetizer</button>
                    <button className="btn btn-transparent" onClick={() => {handleClick("Dinner")}}>Dinner</button>
                    <button className="btn btn-transparent" onClick={() => {handleClick("Drink")}}>Drink</button>
                </div>

                {food.map((item, index) => <Food item={item} key={index}></Food>)}

            </div>
            <Footer />
        </>
    )
}