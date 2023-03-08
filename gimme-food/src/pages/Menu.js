import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Food from "../components/Food";
export default function Menu() {

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


    return (
        <>
            <Nav />

            <div className="container bg-img2 w-75 d-flex justify-content-center row mx-auto">
                <h1 className="text-center m-1" style={{ fontSize: "100px", color: "white", fontFamily: "chalk"}}>Menu</h1>
                

                {food.map((item, index) => <Food item={item} key={index}></Food>)}

            </div>
            <Footer />
        </>
    )
}