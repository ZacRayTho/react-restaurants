export default function CartItem(props) {
    const {item, setCart, cart, index} = props;

    function handleClick() {
        let dupe = [...cart];
        // console.log(dupe)
        dupe.splice(index, 1)
        // console.log(dupe)
        setCart([...dupe ])
    }

    return(
        <>
        <h4>{item.title}</h4>
        <h5>{item.price}</h5>
        <button className="btn btn-danger" onClick={handleClick}>Remove</button>
        </>
    )
}