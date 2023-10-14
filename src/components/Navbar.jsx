import { Link } from "react-router-dom";
import navStyles from "../components/Navbar.module.css";
import { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

export function Navbar() {
  const { cambioTema } = useContext(ContextGlobal);
  const { tema } = useContext(ContextGlobal);
  const [colorBoton, setColorBoton] = useState("#8B4513");

  function cambiarColorBoton() {
    if (colorBoton === "#8B4513") {
      setColorBoton("#c199956c");
    } else {
      setColorBoton("#8B4513");
    }
  }
  return (
    <nav
      className={navStyles.navbar}
      style={{ backgroundColor: tema.nav, color: tema.font }}
    >
      <Link className={navStyles.navTitulo} to={"/"}>
        Principal
      </Link>
      <Link className={navStyles.navTitulo} to={"/contact"}>
        Contacto
      </Link>
      <Link className={navStyles.navTitulo} to={"/favs"}>
        Favoritos
      </Link>
      <button
        className={navStyles.boton}
        onClick={() => {
          cambioTema();
          cambiarColorBoton();
        }}
        style={{ backgroundColor: colorBoton }}
      >
        Tema
      </button>
    </nav>
  );
}
