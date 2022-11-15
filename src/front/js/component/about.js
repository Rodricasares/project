import React from "react";
import "../../styles/home.css";
import profile from "../../img/perfil.jpg";

export const About = () => (
  <div className="about container ">
    <div className="row ">
      <div className="col text-secondary">
        <div className="row mt-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="currentColor"
            className="bi bi-person icon"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
        </div>
        <h1 className="title  fw-bold mb-3">Perfil</h1>

        <div className="container">
          <div className="row">
            <div className="col-sm-8 textAbout">
              Soy un Desarrollador Full-Stack en React.js y Python/Flask con
              experiencia en sistemas, redes e instalaciones electricista.
              También tengo experiencia laboral en puestos de cara al público,
              tanto en inglés como en español. Mi deseo es seguir creciendo como
              desarrollador y como persona mediante el trabajo en equipo y
              afrontando retos que permitan superar me cada día.
            </div>
            <div className="col-sm-4">
              <img
                className="img-fluid rounded rounded-circle border border-warning perfil mt-3 "
                src={profile}
                alt="Bootstrap"
                style={{ width: "auto", height: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
