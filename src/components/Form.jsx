import { useState, useEffect } from "react";
import formStyles from "./Form.module.css";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length <= 2 || !email.includes("@")) {
      setError("Datos inválidos");
      return;
    }
    setMensaje(`Gracias ${name}, te contactaremos por ${email}`);
    setError("");
  }

  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        setName("");
        setEmail("");
        setMensaje("");
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  return (
    <div>
      <form className={formStyles.formulario} onSubmit={handleSubmit}>
        <input
          className={formStyles.formularioInput}
          type="text"
          value={name}
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={formStyles.formularioInput}
          type="email"
          value={email}
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={formStyles.formButton} type="submit">
          Enviar
        </button>
        {error && <p className={formStyles.error}>{error}</p>}
        {mensaje && <p className={formStyles.enviado}>{mensaje}</p>}
      </form>
    </div>
  );
}
