import footerStyles from "../components/Footer.module.css";
import face from "../images/ico-facebook.png";
import ig from "../images/ico-instagram.png";
import tik from "../images/ico-tiktok.png";
import wp from "../images/ico-whatsapp.png";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";

export function Footer() {
  const { tema } = useContext(ContextGlobal);
  return (
    <footer
      className={footerStyles.footer}
      style={{ backgroundColor: tema.footer, color: tema.font }}
    >
      <div className={footerStyles.infoFooter}>
        <a
          href="https://luca-carena-web.vercel.app/"
          className={footerStyles.enlacePerfil}
        >
          <p className={footerStyles.nombre}>Web Personal</p>
        </a>
      </div>

      <div className={footerStyles.final}>Luca Carena - Final Front III</div>

      <div className={footerStyles.images}>
        <a
          className={footerStyles.buttonClass}
          href="https://www.facebook.com/"
        >
          <img className={footerStyles.face} src={face} alt="Facebook" />
        </a>
        <a
          className={footerStyles.buttonClass}
          href="https://www.instagram.com/"
        >
          <img className={footerStyles.ig} src={ig} alt="Instagram" />
        </a>
        <a className={footerStyles.buttonClass} href="https://www.tiktok.com/">
          <img className={footerStyles.tik} src={tik} alt="TikTok" />
        </a>
        <a
          className={footerStyles.buttonClass}
          href="https://www.whatsapp.com/"
        >
          <img className={footerStyles.wp} src={wp} alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
}
