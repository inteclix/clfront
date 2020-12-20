import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends React.Component {
  render() {
    return (
      <Carousel
        stopOnHover={true}
        infiniteLoop={true}
        showIndicators={true}
        autoPlay={true}
        showThumbs={false}
        stopOnHover={true}
      >
        <div>
          <img src="imgs/cover1.png" />
        </div>
        <div>
          <img src="imgs/cover2.png" />
        </div>
        <div>
          <img src="imgs/cover3.png" />
        </div>
      </Carousel>
    );
  }
}

function Header() {
  return (
    <section className="hero ls-main-hero">
      <div className="hero-head">
        <nav className="navbar container ls-main-nav">
          <div className="navbar-brand">
            <a href="#" className="navbar-item">
              <img
                src="/imgs/logo-full.png"
                title="CONDOR LOGISTICS"
                width="195"
              />
            </a>
            <a
              role="button"
              className="navbar-burger has-text-info"
              data-target="mainNavMenu"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu" id="mainNavMenu">
            <div className="navbar-end has-text-info">
              <a href="#" className="navbar-item is-size-5">
                ACCUEIL
              </a>
              <a href="#news" className="navbar-item is-size-7">
                ACTUALITES
              </a>
              <a href="#services" className="navbar-item is-size-7">
                NOS SERVICES
              </a>
              <a
                href="#contact"
                className="navbar-item is-size-7"
                style={{ marginRight: 10 }}
              >
                CONTACTEZ-NOUS
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body container">
        <div className="columns">
          <div className="column left is-3-desktop">
            <h1
              className="title is-size-3-mobile is-2 is-spaced "
              style={{ color: "white" }}
            >
              SPA CONDOR LOGISTICS
            </h1>
            <h2 className="subtitle is-5 " style={{ color: "white" }}>
              <q>
                <b></b>Une filiale du groupe <b>CONDOR</b> et un des principaux
                acteurs algériens dans bla bla bla
              </q>
            </h2>
          </div>
          <div
            className="column right is-8-desktop is-offset-1-desktop"
            style={{ paddingBottom: 50 }}
          >
            <DemoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
