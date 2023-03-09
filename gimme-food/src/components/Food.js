export default function Food(props) {
    const { item, cart, setCart } = props

    function handleClick(title, price) {
        setCart([...cart, {"title": title, "price": price}])
    }
    let name = item.title;
    let money = item.price;

    return (
        <div className="card col-6 bg-transparent border-0 text-white" >
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price}</p>
                <button onClick={() => handleClick(name, money)} className="float-right  text-white btn btn-transparent border">Add to Cart</button>
            </div>
        </div>
    )
}