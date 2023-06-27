import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import "../routes/Home.modules.css";

export function Home() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article className="home">
      <p className="principal">Bienvenido a la sección principal</p>
      <hr />
      <br />
      <section className="card-home">
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
