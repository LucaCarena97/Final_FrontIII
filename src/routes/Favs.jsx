import { useContext, useEffect, useState } from "react";
import { Card } from "../components/Card";
import favsStyles from "../routes/Favs.module.css";
import { ContextGlobal } from "../components/utils/global.context";

export function Favs() {
  const { tema } = useContext(ContextGlobal);
  const [odontologos, setOdontologos] = useState(
    JSON.parse(localStorage.getItem("odontologos")) || []
  );

  useEffect(() => {
    const actDentista = JSON.parse(localStorage.getItem("odontologos") || "[]");
    setOdontologos(actDentista);
  }, [odontologos]);

  return (
    <article
      className={favsStyles.favs}
      style={{ backgroundColor: tema.home, color: tema.font }}
    >
      <p className={favsStyles.titleFavs}>Odontólogos favoritos</p>
      {odontologos.length === 0 ? (
        <p className={favsStyles.advertencia}>
          No hay guardado ningún odontólogo
        </p>
      ) : (
        <section className={favsStyles.cardFavs}>
          {odontologos.map(function (item) {
            return (
              <Card
                name={item.name}
                username={item.username}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </section>
      )}
    </article>
  );
}
