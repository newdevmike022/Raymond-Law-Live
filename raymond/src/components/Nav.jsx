import logo from "../images/Raymondlogo4.png";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home"><img src={logo} alt="Raymond Law Live logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link" href="#about">ABOUT</a>
                    <a className="nav-link" href="#webcasts">WEBCASTS</a>
                    <a className="nav-link" href="#services">SERVICES</a>
                    <a className="nav-link" href="#contact">CONTACT</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;