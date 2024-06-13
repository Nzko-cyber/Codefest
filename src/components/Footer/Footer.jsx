import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Codefest</h1>

          <h2>Location</h2>

          <address>
            <h2>Tashkent,Yunusobod, bodomzor kochasi</h2>
            <br />

            <a className="footer__btn" href="mailto:quvonctoshtemirov.com">
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Kompaniya uchun</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Yangiliklar</a>
              </li>

              <li>
                <a href="#">Yetkazib beruvchilar</a>
              </li>

              <li>
                <a href="#">Codefest nima u</a>
              </li>
              <li>
                <a href="#">Rekvizitlar va malumotlar</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Cataloglar</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Orginal texnikalar</a>
              </li>

              <li>
                <a href="#">Traktorlar</a>
              </li>

              <li>
                <a href="#">Ekskavatorlar</a>
              </li>

              <li>
                <a href="#">Ehtiyot qisimlar</a>
              </li>

              <li>
                <a href="#">Yoqilgi</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Yordam</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Foydalanish qoidalari</a>
              </li>

              <li>
                <a href="#">Sayt xaritasi</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy;Copyright © ООО «Codefest» 2023. All rights reserved.</p>

          <div className="legal__links">
            <span>
              Made with <span className="heart">♥</span> remotely from Anywhere
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
