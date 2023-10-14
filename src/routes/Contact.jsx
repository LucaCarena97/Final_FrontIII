import { useContext } from "react";
import { Form } from "../components/Form";
import contactStyles from "../routes/Contact.module.css";
import { ContextGlobal } from "../components/utils/global.context";

export function Contact() {
  const { tema } = useContext(ContextGlobal);
  return (
    <article
      className={contactStyles.infoForm}
      style={{ backgroundColor: tema.home, color: tema.font }}
    >
      <p className={contactStyles.titleForm}>Formulario de contacto</p>
      <p className={contactStyles.infoP}>
        Si tiene alguna duda, envienos sus datos y nos contactaremos a la
        brevedad
      </p>
      <Form />
    </article>
  );
}
