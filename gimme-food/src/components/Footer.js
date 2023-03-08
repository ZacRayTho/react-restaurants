export default function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-around align-items-center py-3 border-top bg-white ">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src="./img/justins.png" width="150" alt="justin's logo"/>
                    </a>
                    <span className="text-muted">© 2023 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="a"><img src="./img/fb.svg" alt="facebook logo"/></a></li>
                    <li className="ms-3"><a className="text-muted" href="a"><img src="./img/twitter.svg" alt="twitter logo"/></a></li>
                    <li className="ms-3"><a className="text-muted" href="a"><img src="./img/instagram.svg" alt="instagram logo"/></a></li>
                </ul>
            </footer>
        </>
    )
}