import { useEffect } from "react";
export default function Food(props) {
    const { item, cart, setCart } = props

    function handleClick(title, price) {
        setCart([...cart, { "title": title, "price": price }])
    }

    useEffect(() => {localStorage.setItem("cart", JSON.stringify(cart))}, [cart])

    return (
        <div className="card col-lg-6 col-12  bg-transparent border-0 text-white" >
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price}</p>
                <button onClick={() => handleClick(item.title, item.price)} className="float-right  text-white btn btn-transparent border">Add to Cart</button>
            </div>
        </div>
    )
}