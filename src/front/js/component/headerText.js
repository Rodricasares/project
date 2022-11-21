import React from "react";
import "../../styles/headerText.css";
import Typical from "react-typical";

export const HeaderText = () => (
  <div className="headerText">
    {/* Botones linkedin & github */}
    
    {/* Titulo header */}
    <div className="row">
      <h1 className="headOne col-md-6 offset-md-3">Rodrigo Cantudo</h1>
      <p className="headTwo col-md-6 offset-md-3">
        I'm a  <Typical
          className="typical"
          loop={Infinity}
          wrapper="b"
          steps={[
            " Full",
            1300,
            " Stack",
            1300,
            " ReactJs",
            ,
            1300,
            " Python/Flask",
            1300,
          ]}
        /> developer
       
      </p>
    </div>
  </div>
);
