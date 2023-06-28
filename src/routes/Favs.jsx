import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import "../routes/Favs.modules.css";

export function Favs() {
  const [odontologos, setOdontologos] = useState(
    JSON.parse(localStorage.getItem("odontologos")) || []
  );

  useEffect(() => {
    const actDentista = JSON.parse(localStorage.getItem("odontologos") || "[]");
    setOdontologos(actDentista);
  }, [odontologos]);

  function removerFavorito(id) {
    const actDentista = odontologos.filter(
      (odontologo) => odontologo.id !== id
    );
    setOdontologos(actDentista);
    localStorage.setItem("odontologos", JSON.stringify(actDentista));
  }

  return (
    <article className="favs">
      <p className="title-favs">Odontólogos favoritos</p>
      <section className="card-favs">
        {odontologos.map(function (item) {
          return (
            <Card
              name={item.name}
              username={item.username}
              key={item.id}
              id={item.id}
            >
              <button
                className="borrar-button"
                onClick={() => removerFavorito(item.id)}
              >
                Borrar
              </button>
            </Card>
          );
        })}
      </section>
    </article>
  );
}
