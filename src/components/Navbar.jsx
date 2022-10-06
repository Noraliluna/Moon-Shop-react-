import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="logotipo" src="logo1.png" alt="#"/>
                    TED' RESTAURANT
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">MENÚ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONFITERIA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">BEBIDAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">POSTRE</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    </>
    );
}

export default Navbar;