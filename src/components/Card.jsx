/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";
import "./Card.modules.css";

export function Card({ id, name, username }) {
  const odontologo = {
    id,
    name,
    username,
  };

  function addFav() {
    const odontologos = JSON.parse(localStorage.getItem("odontologos") || "[]");
    const odontologoAdd = odontologos.find((e) => e.id === odontologo.id);
    if (!odontologoAdd) {
      odontologos.push(odontologo);
      localStorage.setItem("odontologos", JSON.stringify(odontologos));
    } else {
      alert(
        `El odontólogo ${odontologo.name} ya ha sido agregado a favoritos.`
      );
    }
    console.log("Agregando odontologos" + odontologo.id);
  }

  return (
    <article className="card">
      <Link to={`/details/${id}`} className="card-link">
        <img className="imagen" src={img} alt="doctor" />
        <h2 className="name">{name}</h2>
        <p className="user">{odontologo.username}</p>
      </Link>
      <button className="boton-card" onClick={addFav}>
        Add to Favorites
      </button>
    </article>
  );
}
