import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/skill.css";
import rigoImage from "../../img/travel.png";

import { Context } from "../store/appContext";

export const Task = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="jumbotron">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Architects+Daughter&family=Oswald&family=Spline+Sans+Mono:wght@300&display=swap"
        rel="stylesheet"
      />
      <h1 className="title  fw-bold m-3">TRAVEL 360º</h1>
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="d-flex justify-content-between jbtText">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas "Letraset", las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
            <img
              className="img-fluid rounded-5 ms-5"
              src={rigoImage}
              style={{ width: "50%", height: "auto" }}
            />{" "}
          </div>
        </div>
      </div>
      <div className="col-md-6 offset-md-3 mt-5">
        {" "}
        <a
          className="btn btn-outline-warning text-center"
          href="https://shrouded-tor-74296.herokuapp.com/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-globe"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
          </svg>
          WebSite
        </a>{" "}
        <a
          className="btn btn-outline-dark text-center"
          href="https://github.com/Rodricasares/Final-Project-4Geeks-Academy"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>{" "}
      </div>

      <div className="col-md-6 offset-md-3  mt-5 line"></div>

      <div className="col-md-6 offset-md-3 ">
        <div class="row align-items-start ">
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
