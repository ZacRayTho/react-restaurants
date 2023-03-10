import Nav from "../components/Nav"
import CartItem from "../components/CartItem";
import { useEffect } from "react";
//bring cart info in
export default function Checkout(props) {
    const { cart, setCart } = props;

    useEffect(() => {localStorage.setItem("cart", JSON.stringify(cart))}, [cart])


    return (
        <>
            <Nav />
            <div className="bg-white ">
                <h1>Checkout</h1>
                {cart.map((item, index) => <CartItem cart={cart} index={index} item={item} setCart={setCart} key={index} />)} 
            </div>
        </>
    )
}