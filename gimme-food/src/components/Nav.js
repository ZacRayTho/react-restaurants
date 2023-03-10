import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white border-bottom border-dark">
                <div className="container-fluid w-75">
                    <NavLink className={"text-decoration-none"} to="/">
                    <button className="navbar-brand bg-transparent border-0 " >
                        <img src="./img/justins.png"  width="200" alt="justins logo"/>
                    </button>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={"text-decoration-none"} to="/menu">
                                    <button className="nav-link active bg-transparent border-0 " aria-current="page" >
                                        Menu
                                    </button>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"text-decoration-none"} to="/specials">
                                    <button className="nav-link active bg-transparent border-0 " aria-current="page" >
                                        Specials
                                    </button>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"text-decoration-none"} to="/checkout">
                                    <button className="nav-link active bg-transparent border-0 " aria-current="page" >
                                        Checkout
                                    </button>
                                </NavLink> 
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}