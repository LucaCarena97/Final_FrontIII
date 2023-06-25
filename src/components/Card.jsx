import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";

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
      alert(`El odontólogo ${odontologo.name}ya ha sido agregado a favoritos.`);
    }
    console.log("Agregando odontologos" + odontologo.id);
  }

  return (
    <article>
      <img src={img} alt="doctor" />
      <h2>
        <Link to={`/${id}`}>{name}</Link>
      </h2>
      <p>{odontologo.username}</p>

      <button onClick={addFav}>Add to Favorites</button>
    </article>
  );
}
