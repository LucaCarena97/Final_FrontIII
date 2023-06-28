import { Link } from "react-router-dom";
import "../components/Navbar.modules.css";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

export function Navbar() {
  const { cambioTema } = useContext(ContextGlobal);
  const { tema } = useContext(ContextGlobal);
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: tema.nav, color: tema.font }}
    >
      <Link className="nav-title" to={"/"}>
        Principal
      </Link>
      <Link className="nav-title" to={"/contact"}>
        Contacto
      </Link>
      <Link className="nav-title" to={"/favs"}>
        Favoritos
      </Link>
      <button className="boton" onClick={cambioTema}>
        Tema
      </button>
    </nav>
  );
}
