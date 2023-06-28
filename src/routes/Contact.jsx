import { Form } from "../components/Form";
import "../routes/Contact.modules.css";

export function Contact() {
  return (
    <article className="info-form">
      <p className="title-form">Formulario de contacto</p>
      <p className="info-p">
        Si tiene alguna duda, envienos sus datos y nos contactaremos a la
        brevedad
      </p>
      <Form />
    </article>
  );
}
