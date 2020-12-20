import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MyMap extends React.Component {
  render() {
    return (
      <Map
        center={[36.054911, 4.756988]}
        zoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={[36.054911, 4.756988]}>
          <Popup>Condor logistics</Popup>
        </Marker>
      </Map>
    );
  }
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop">
            <div className="ls-section-content has-text-centered ls-space-bottom">
              <h3 className="title has-text-dark">CONTACTEZ-NOUS</h3>
              <p className="content has-text-grey is-size-5">
                Contactez-nous par email ou au téléphone.
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-7">
            <form action="#" className="ls-form-contact">
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded">
                      <label
                        className="screen-reader-text"
                        htmlFor="lsNameInput"
                      >
                        NOM & PRENOM
                      </label>
                      <input
                        className="input"
                        id="lsNameInput"
                        type="text"
                        placeholder="NOM & PRENOM"
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded">
                      <label
                        className="screen-reader-text"
                        htmlFor="lsEmailInput"
                      >
                        Votre Mail
                      </label>
                      <input
                        className="input"
                        id="lsEmailInput"
                        type="email"
                        placeholder="Email"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <label className="screen-reader-text">Message</label>
                      <textarea
                        className="textarea"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button className="button ls-button-slim has-text-weight-bold is-success">
                        Envoyer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="column is-5 ls-info-contact">
            <h4 className="title is-5 has-text-dark ls-half-space">Contact</h4>
            <p className="content has-text-grey"></p>
            <div className="media ls-item-contact">
              <div className="media-left">
                <span className="icon has-text-primary fa-lg">
                  <i aria-hidden="true" className="fas fa-envelope"></i>
                </span>
              </div>
              <a href="#" className="">
                Email: commercial@condor-logistics.dz
              </a>
            </div>
            <div className="media ls-item-contact">
              <div className="media-left">
                <span className="icon has-text-primary fa-lg">
                  <i
                    aria-hidden="true"
                    className="fas fa-phone"
                    data-fa-transform="rotate-90"
                  ></i>
                </span>
              </div>
              <a href="#" className="">
                TEL: +213 770 000 000
              </a>
            </div>
            <div className="media ls-item-contact">
              <div className="media-left">
                <span className="icon has-text-primary fa-lg">
                  <i aria-hidden="true" className="fas fa-globe"></i>
                </span>
              </div>
              <a href="https://condor-logistics.dz">
                Web: www.condor-logistics.dz
              </a>
            </div>
            <div className="ls-social-buttons">
              <h4 className="title has-text-dark is-6 is-marginless ls-half-space">
                Réseaux sociaux
              </h4>
              <a href="#" rel="noopener" className="ls-facebook">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-square fa-stack-2x"></i>
                  <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a href="#" rel="noopener" className="ls-linkedin">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-square fa-stack-2x"></i>
                  <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a href="#" rel="noopener" className="">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-square fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Contact;
