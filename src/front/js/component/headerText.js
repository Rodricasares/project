import React from "react";
import cv from "../../img/cvRodrigo.jpg";
import "../../styles/headerText.css";
import Typical from "react-typical";

export const HeaderText = () => (
  <div className="headerText">
    {/* Botones linkedin & github */}
    
    {/* Titulo header */}
    <div className="row">
      <h1 className="headOne col-md-6 offset-md-3">Rodrigo Cantudo</h1>
      <p className="headTwo col-md-6 offset-md-3">
        I'm a Developer
        <Typical
          className="typical"
          loop={Infinity}
          wrapper="b"
          steps={[
            " Full",
            1000,
            " Stack",
            1000,
            " ReactJs",
            ,
            1000,
            " Python/Flask",
            1000,
          ]}
        />
      </p>
    </div>
  </div>
);
