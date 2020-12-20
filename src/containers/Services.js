import React from "react";

function Services() {
  return (
    <section
      id="services"
      className="section has-background-primary ls-hero-icons"
    >
      <div className="container ">
        <div className="columns ls-space-bottom">
          <div className="column is-8 is-offset-2">
            <div className="ls-section-content has-text-centered">
              <h3 className="title has-text-white">NOS SERVICES</h3>
              <p className="content has-text-white is-size-5">
                UN SERVICE DE QUALITÉ VOUS PERMETTANT DE DÉVELOPPER UN AVANTAGE
                COMPÉTITIF.
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-multiline is-mobile">
          <div className="column is-one-two-desktop is-half-tablet is-half-mobile ls-icon-snippet has-text-centered has-text-white">
            <div className="ls-icon">
              <span className="icon">
                <i aria-hidden="true" className="fas fa-3x fa-truck"></i>
              </span>
            </div>
            <h5 className="title has-text-wight-bold is-5 has-text-white">
              Transport public de marchandis
            </h5>
            <div className="content">
              <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
            </div>
          </div>
          <div className="column is-one-two-desktop is-half-tablet is-half-mobile ls-icon-snippet has-text-centered has-text-white">
            <div className="ls-icon">
              <span className="icon">
                <i aria-hidden="true" className="fas fa-3x fa-car-side"></i>
              </span>
            </div>
            <h5 className="title has-text-wight-bold is-5 has-text-white">
              Location de tous les types de voitures & engins
            </h5>
            <div className="content">
              <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla.</p>
            </div>
          </div>
          <div className="column is-one-two-desktop is-half-tablet is-half-mobile ls-icon-snippet has-text-centered has-text-white">
            <div className="ls-icon">
              <span className="icon">
                <i aria-hidden="true" className="fas fa-3x fa-bus"></i>
              </span>
            </div>
            <h5 className="title has-text-wight-bold is-5 has-text-white">
              Transport de personel
            </h5>
            <div className="content">
              <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla.</p>
            </div>
          </div>
          <div className="column is-one-two-desktop is-half-tablet is-half-mobile ls-icon-snippet has-text-centered has-text-white">
            <div className="ls-icon">
              <span className="icon">
                <i aria-hidden="true" className="fas fa-3x fa-cog"></i>
              </span>
            </div>
            <h5 className="title has-text-wight-bold is-5 has-text-white">
              La maintenance des materiel roulant & engins
            </h5>
            <div className="content">
              <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
