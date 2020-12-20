import React from "react";

function Features() {
  return (
    <section className="section ls-features-cards">
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginBottom: 60,
        }}
      >
        <div style={{ padding: 5, margin: 5 }}>
          <img width={128} height={128} src="imgs/condor.png" />
        </div>
        <div style={{ padding: 5, margin: 5 }}>
          <img width={128} height={128} src="imgs/travocovia.jfif" />
        </div>
        <div style={{ padding: 5, margin: 5 }}>
          <img width={128} height={128} src="imgs/cristor.png" />
        </div>
        <div style={{ padding: 5, margin: 5 }}>
          <img width={128} height={128} src="imgs/batigec.jpg" />
        </div>
        <div style={{ padding: 5, margin: 5 }}>
          <img width={128} height={128} src="imgs/khadamaty.png" />
        </div>
        <div style={{ padding: 5, margin: 5 }}>
          <img width={128} height={128} src="imgs/gerbior.jfif" />
        </div>
        <div style={{ padding: 5, margin: 5 }}>
          <img width={128} height={128} src="imgs/condorimmo.png" />
        </div>
      </div>

      <div  id="news" className="container">
        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop">
            <div className="ls-section-content has-text-centered">
              <h3 className="title has-text-dark">ACTUALITES</h3>
              <p className="content has-text-grey is-size-5"></p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-third">
            <article className="card">
              <div className="card-content">
                <figure className="image " style={{ paddingBottom: 10 }}>
                  <img src="/imgs/news2.png" title="Semi-remourques" />
                </figure>
                <div className="media-content has-text-centered">
                  <h3 className="title is-5 has-text-weight-bold">
                    <a
                      href="#"
                      className="has-text-dark"
                      title="Semi-remourques"
                    >
                      Semi-remourques
                    </a>
                  </h3>
                  <p className="is-size-6">
                    Bla bla bla bla bla bla bla bla bla bla bla bla.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="card">
              <div className="card-content">
                <figure className="image " style={{ paddingBottom: 10 }}>
                  <img
                    src="/imgs/news1.png"
                    title="Manutention de marchandises"
                  />
                </figure>
                <div className="media-content has-text-centered">
                  <h3 className="title is-5 has-text-weight-bold">
                    <a href="#" className="has-text-dark" title="">
                      Manutention de marchandises
                    </a>
                  </h3>
                  <p className="is-size-6">
                    Bla bla bla bla bla bla bla bla bla bla bla bla.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="card">
              <div className="card-content">
                <figure className="image " style={{ paddingBottom: 10 }}>
                  <img src="/imgs/news3.png" title="Atelier mecanique" />
                </figure>
                <div className="media-content has-text-centered">
                  <h3 className="title is-5 has-text-weight-bold">
                    <a
                      href="#"
                      className="has-text-dark"
                      title="Atelier mecanique"
                    >
                      Atelier mecanique
                    </a>
                  </h3>
                  <p className="is-size-6">
                    Bla bla bla bla bla bla bla bla bla bla bla bla.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
