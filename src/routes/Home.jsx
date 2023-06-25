import { useState, useEffect } from "react";
import { Card } from "../components/Card";

export function Home() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
    //    return () => {
    //      setData("");
    //    };
  }, []);

  return (
    <article>
      <h1>Home</h1>
      <section>
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
