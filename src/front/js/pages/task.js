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
      <div class="row mt-5">
        <div class="col-md-6 offset-md-3">
          <div class="d-flex justify-content-between">
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

      <Link to="/">
        <button className="btn btn-dark m-5">Back home</button>
      </Link>
    </div>
  );
};
