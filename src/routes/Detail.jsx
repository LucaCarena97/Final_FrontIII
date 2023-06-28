/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../routes/Detail.modules.css";

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
    <article className="detalle">
      <h2 className="title-detalle">Detalles</h2>
      <div className="info">
        <p className="data">Nombre: {detalle.name}</p>
        <p className="data">Email: {detalle.email}</p>
        <p className="data">Celular: {detalle.phone}</p>
        <p className="data">Web: {detalle.website}</p>
      </div>
      <Link to="/" className="atras">
        Volver a Inicio
      </Link>
    </article>
  );
}
