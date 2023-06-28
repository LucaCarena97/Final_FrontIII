import { Link } from "react-router-dom";
import "../components/Navbar.modules.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-title" to={"/"}>
        Principal
      </Link>
      <Link className="nav-title" to={"/contact"}>
        Contacto
      </Link>
      <Link className="nav-title" to={"/favs"}>
        Favoritos
      </Link>
      <button className="boton">Tema</button>
    </nav>
  );
}
