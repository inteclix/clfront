import React from "react";

function Footer() {
  return (
    <>
      <section className="section ls-rainbow-gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <h3 className="title ls-half-space has-text-white is-3 has-text-bold">
                Abonnez-vous à notre newsletter
              </h3>
              <p className="has-text-white">
                Entrez votre email pour recevoir les dernières mises à jour et
                actualités
              </p>
            </div>
            <div className="column is-5 is-offset-2">
              <div className="field ls-round-input has-background-white">
                <input
                  className="input has-text-grey"
                  type="text"
                  placeholder="Entrer votre Email"
                />
                <button type="submit" className="button is-success">
                  Souscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="columns has-text-centered-mobile">
            <div className="column is-4">
              <img
                className="ls-space"
                src="/imgs/logo-full.png"
                width="195"
                title="Condor Logistics"
              />
              <p className=""></p>
            </div>
            <div className="column is-4">
              <h5 className="title has-text-dark is-5">NOS SERVICES</h5>
              <ul className="ls-footer-links">
                <li>
                  <a href="#services">Transport public de marchandis</a>
                </li>
                <li>
                  <a href="#services">
                    Location de tous les types de voitures & engins
                  </a>
                </li>
                <li>
                  <a href="#services">Transport de personel</a>
                </li>
                <li>
                  <a href="#services">
                    La maintenance des materiel roulant & engins
                  </a>
                </li>
              </ul>
            </div>
            <div className="column is-4">
              <h5 className="title has-text-dark is-5">NOTRE MISSION</h5>
              <p>
                La mission de <b>SPA CONDOR LOGISTICS</b> se décrit en un seul
                mot : ‘’La satisfaction de ses clients’’ Déterminée à offrir un
                service personnalisé de première qualité,{" "}
                <b>SPA CONDOR LOGISTICS</b> se donne comme mission : bla bla
                bla.
              </p>
            </div>
          </div>
          <div className="columns ls-footer">
            <div className="column is-5 is-marginless has-text-centered-mobile content has-text-grey">
              <p>Copyright 2020 © condor-logistics.dz</p>
            </div>
            <div className="column is-7">
              <ul className="columns ls-bottom-links is-mobile is-multiline is-marginless">
                <li className="ls-bottom-link">
                  <a href="#">ACCUEIL</a>
                </li>
                <li className="ls-bottom-link">
                  <a href="#news">ACTUALITES</a>
                </li>
                <li className="ls-bottom-link">
                  <a href="#services">NOS SERVICES</a>
                </li>
                <li className="ls-bottom-link">
                  <a href="#contact">NOUS CONTACTER</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
