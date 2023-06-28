import { useState, useEffect } from "react";
import "./Form.modules.css";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 3 || !email.includes("@")) {
      setError("Datos inválidos");
      return;
    }

    setSuccessMessage(`Gracias ${name} por contactarnos`);
    setError("");
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

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
        <button className="form-button" type="submit">
          Enviar
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="enviado">{successMessage}</p>}
    </div>
  );
}
