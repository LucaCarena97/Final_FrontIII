/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";
import cardStyles from "./Card.module.css";
import { useState } from "react";

export function Card({ id, name, username }) {
  const odontologo = {
    id,
    name,
    username,
  };
  const [mensaje, setMensaje] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  function addFav() {
    const odontologos = JSON.parse(localStorage.getItem("odontologos") || "[]");
    const odontologoAdd = odontologos.find((e) => e.id === odontologo.id);

    if (!odontologoAdd) {
      odontologos.push(odontologo);
      localStorage.setItem("odontologos", JSON.stringify(odontologos));
      setIsAdded(true);
      setMensaje(true);
    } else {
      setIsAdded(false);
      setMensaje(true);
    }
    setTimeout(() => {
      setMensaje(false);
    }, 2000);
    console.log("Agregando odontologos" + odontologo.id);
  }

  function removeFav() {
    const odontologos = JSON.parse(localStorage.getItem("odontologos") || "[]");
    const updatedOdontologos = odontologos.filter(
      (e) => e.id !== odontologo.id
    );
    localStorage.setItem("odontologos", JSON.stringify(updatedOdontologos));
    setIsAdded(false);
    setMensaje(true);
    setTimeout(() => {
      setMensaje(false);
    }, 2000);
    console.log("Eliminando odontologo" + odontologo.id);
  }

  const isFavorite = JSON.parse(
    localStorage.getItem("odontologos") || "[]"
  ).some((e) => e.id === odontologo.id);

  return (
    <article
      className={`${cardStyles.card} ${isFavorite ? cardStyles.favorite : ""}`}
    >
      <Link to={`/details/${id}`} className={cardStyles.cardLink}>
        <img className={cardStyles.imagen} src={img} alt="doctor" />
        <p className={cardStyles.name}>{name}</p>
        <p className={cardStyles.user}>{odontologo.username}</p>
      </Link>
      {!isFavorite && (
        <button className={cardStyles.botonCard} onClick={addFav}>
          Añadir a favoritos
        </button>
      )}
      {isFavorite && (
        <button className={cardStyles.botonCardDelete} onClick={removeFav}>
          Eliminar de favoritos
        </button>
      )}
      {mensaje && (
        <p
          className={`${cardStyles.mensajeCard} ${
            isAdded ? cardStyles.added : ""
          }`}
        >
          {isAdded
            ? "El odontólogo se añadio a favoritos"
            : "El odontólogo se elimino de favoritos"}
        </p>
      )}
    </article>
  );
}
