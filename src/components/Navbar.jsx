import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img
            src="./assets/AILES_LOGO.png"
            alt="Logo"
            className="d-inline-block align-top"
            style={{ height: "40px" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="quienes-somos"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                ¿Quiénes somos?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="acompanamiento-escolar"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Acompañamiento escolar
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="area-clinica"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Área clínica
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contacto"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
