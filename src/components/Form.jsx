import { useState, useEffect } from "react";
import "./Form.modules.css";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length <= 2 || !email.includes("@")) {
      setError("Datos inválidos");
      return;
    }

    setMensaje(
      <>
        Gracias {name}, te contactaremos por {email}
        <br />
        Recargar página para volver a enviar
      </>
    );

    setError("");
    setSubmitted(true);
  }

  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        setMensaje("");
      }, 3800);

      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          className="formulario-input"
          type="text"
          value={name}
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="formulario-input"
          type="email"
          value={email}
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
        />
        {!submitted && (
          <button className="form-button" type="submit">
            Enviar
          </button>
        )}
        {error && <p className="error">{error}</p>}
        {mensaje && <p className="enviado">{mensaje}</p>}
      </form>
    </div>
  );
}
