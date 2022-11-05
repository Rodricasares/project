import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/skill.css";
import rigoImage from "../../img/travel.png";

import { Context } from "../store/appContext";

export const Task = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="jumbotron">
      <h1 className="title  fw-bold m-3">TRAVEL 360º</h1>
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="d-flex justify-content-between">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta)
            <img
              className="img-fluid rounded-5 ms-5"
              src={rigoImage}
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="col-md-6 offset-md-3  mt-5 line"></div>

      <div className="col-md-6 offset-md-3 ">
        <div class="row align-items-center">
          <div class="col">
            {" "}
            <p className="fw-bold mt-3">
              <strong>Autores</strong>
            </p>
            <p class="fw-normal">Jose Luis Medina</p>
            <p class="fw-normal">Rodrigo Cantudo</p>
          </div>
          <div class="col">
            {" "}
            <p className="fw-bold mt-3">
              <strong>Librerías</strong>
            </p>
            <p class="fw-normal">JWT with Flask</p>
            <p class="fw-normal">Cloudinary</p>
          </div>
          <div class="col">
            {" "}
            <p className="fw-bold mt-3">
              <strong>Código</strong>
            </p>
            <p class="fw-normal">React.Js</p>
            <p class="fw-normal">Python/Flask</p>
            <p class="fw-normal">Bootstrap</p>
            <p class="fw-normal">Css</p>
          </div>
          <div class="col">
            {" "}
            <p className="fw-bold mt-3">
              <strong>Herramientas</strong>
            </p>
            <p class="fw-normal">Trello</p>
            <p class="fw-normal">Figma</p>
            <p class="fw-normal">GitHub</p>
            <p class="fw-normal">Gitpod</p>
            <p class="fw-normal">Heroku</p>
          </div>
        </div>
      </div>

      <Link to="/">
        <button className="btn btn-dark m-5">Back home</button>
      </Link>
    </div>
  );
};
