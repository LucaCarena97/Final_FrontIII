import "../components/Footer.modules.css";
import face from "../images/ico-facebook.png";
import ig from "../images/ico-instagram.png";
import tik from "../images/ico-tiktok.png";
import wp from "../images/ico-whatsapp.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="info-footer">
        <p className="nombre">Luca Carena</p>
        <p className="final">Final Front III</p>
      </div>
      <div className="images">
        <a className="button-class" href="https://www.facebook.com/">
          <img className="face" src={face} alt="Facebook" />
        </a>
        <a className="button-class" href="https://www.instagram.com/">
          <img className="ig" src={ig} alt="Instagram" />
        </a>
        <a className="button-class" href="https://www.tiktok.com/">
          <img className="tik" src={tik} alt="TikTok" />
        </a>
        <a className="button-class" href="https://www.whatsapp.com/">
          <img className="wp" src={wp} alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
}
