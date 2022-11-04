import React from "react";
import "../../styles/header.css";
import rigoImage from "../../img/perfil.jpg";
import { HeaderText } from "./headerText";

export const Header = () => (
  <div className="container-fluid">
    <div className="bg_color">
      <div className="imgHead">
        <HeaderText />
      </div>
    </div>
    <div className="wave w1" style={{ height: "150px", overflow: "hidden" }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "#fffdf7" }}
        ></path>
      </svg>
    </div>
    <div className="wave w2" style={{ height: "150px", overflow: "hidden" }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "#fffdf7" }}
        ></path>
      </svg>
    </div>
    <div className="wave w3" style={{ height: "150px", overflow: "hidden" }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: " #fffdf7" }}
        ></path>
      </svg>
    </div>
  </div>
);
