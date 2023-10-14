import { useState, useEffect, useContext } from "react";
import { Card } from "../components/Card";
import homeStyles from "../routes/Home.module.css";
import { ContextGlobal } from "../components/utils/global.context";

export function Home() {
  const [data, setData] = useState([]);
  const { tema } = useContext(ContextGlobal);
  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article
      className={homeStyles.home}
      style={{ backgroundColor: tema.home, color: tema.font }}
    >
      <p className={homeStyles.principal}>Bienvenido a la sección principal</p>
      <hr />
      <br />
      <section className={homeStyles.cardHome}>
        {data.map(function (item) {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              username={item.username}
            />
          );
        })}
      </section>
    </article>
  );
}
