
export default function Cart(props) {
    const { cart, setCart } = props;



    return (
        <>
            <button id="cartBtn" className="btn bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><img className="bg-white" style={{ width: "50px" }}src="./img/cart.svg" alt="cart symbol" /></button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                {cart.map((item, index) => <div key={index}>{item.title}{item.price}</div>)}

                </div>
            </div>
        </>
    )
}