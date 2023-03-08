export default function Food(props) {
    const { item } = props
    return (
        <div className="card col-6 bg-transparent text-white" >
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price}</p>
                <button href="a" className="text-white btn btn-transparent border">Add to Cart</button>
            </div>
        </div>
    )
}