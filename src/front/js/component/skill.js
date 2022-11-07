import React from "react";
import images from "../../js/component/images";
import "../../styles/skill.css";
import { motion } from "framer-motion";

export const Skill = () => (
  <div className=" skill container ">
    <div className="row  text-secondary">
      <div className="col text-secondary">
        <div className="row mt-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="currentColor"
            className="bi bi-tools icon"
            viewBox="0 0 16 16"
          >
            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
          </svg>
        </div>
        <h1 className="title-skill fw-bold mb-5">Habilidades</h1>
        <div className="row mb-5">
          <motion.div className="slider-container  rounded-pill">
            <motion.div
              className="slider m-1"
              drag="x"
              dragConstraints={{ right: 0, left: -2400 }}
            >
              {images.map((image, index) => (
                <motion.div className="item" key={index}>
                  <img src={image} alt="" className="rounded " />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);
