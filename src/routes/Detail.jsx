/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import detailStyles from "../routes/Detail.module.css";
import { ContextGlobal } from "../components/utils/global.context";

export function Detail() {
  const { id } = useParams();
  const { tema } = useContext(ContextGlobal);
  const [detalle, setDetalle] = useState({});

  async function detailFetch() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    setDetalle(data);
  }

  useEffect(() => {
    detailFetch();
  }, []);

  return (
    <article
      className={detailStyles.detalle}
      style={{ backgroundColor: tema.home, color: tema.font }}
    >
      <h2 className={detailStyles.titleDetalle}>Detalles</h2>
      <div className={detailStyles.info}>
        <p className={detailStyles.data}>Nombre: {detalle.name}</p>
        <p className={detailStyles.data}>Email: {detalle.email}</p>
        <p className={detailStyles.data}>Celular: {detalle.phone}</p>
        <p className={detailStyles.data}>Web: {detalle.website}</p>
      </div>
      <Link to="/" className={detailStyles.atras}>
        Volver a Inicio
      </Link>
    </article>
  );
}
