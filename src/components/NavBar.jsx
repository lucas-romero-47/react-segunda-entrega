import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo-button">
            Kiosco Escuela N11
          </Link>
          <div className="nav-links">
            <Link to="/c/comidas" className="nav-link-button">
              Comidas
            </Link>
            <Link to="/c/panaderia" className="nav-link-button">
              Panadería
            </Link>
            <Link to="/c/bebidas" className="nav-link-button">
              Bebidas
            </Link>
          </div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}
