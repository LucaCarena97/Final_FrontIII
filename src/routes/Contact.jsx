import { Form } from "../components/Form";
import "../routes/Contact.modules.css";

export function Contact() {
  return (
    <article className="info-form">
      <p className="title-form">Formulario de contacto</p>
      <Form />
    </article>
  );
}
