import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

useState;

export function Detail() {
  const params = useParams();
  const [detalle, setDetalle] = useState({});

  async function detailFetch() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await response.json();
    setDetalle(data);
  }

  useEffect(() => {
    detailFetch();
  }, []);

  return (
    <article>
      <h2>Detalles</h2>
      <div>
        <p>Nombre: {detalle.name}</p>
        <p>Email: {detalle.email}</p>
        <p>Celular: {detalle.phone}</p>
        <p>Web: {detalle.website}</p>
      </div>
    </article>
  );
}
