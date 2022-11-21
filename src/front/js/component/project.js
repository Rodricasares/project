import React from "react";
import rigoImage from "../../img/project.jpg";
import travel from "../../img/travel.png";
import login from "../../img/login.png";
import throne from "../../img/throne.png";
import wars from "../../img/wars.png";
import gallery from "../../img/gallery.png";
import portfolio from "../../img/portfolio.png";

import { Link, NavLink } from "react-router-dom";
import "../../styles/home.css";

export const Project = () => (
  <div className="project container ">
    <div className="row ">
      <div className="col text-secondary">
        <div className="row mt-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="currentColor"
            className="bi bi-journal-code icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
            />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          </svg>
        </div>
        <h1 className="title fw-bold mb-5">Proyectos</h1>

        {/*******CARDS LINE ONE**********/}

        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">

            {/*CARD_1 */}

            <div className="col">

              <Link to="/task" >
                <div
                  className="card shadow-lg  mb-5 bg-body rounded-4"
                  style={{ width: "auto", height: "250px" }} >
                  <div className="overflow">
                    <img className="card-img-top proj" src={travel} />

                    <div class="card-img-overlay">
                      <h4 className="card-title text-light float-start">
                        <span class="badge bg-warning rounded-pill">Travel 360º</span>
                      </h4></div>
                  </div>

                </div>

              </Link>

            </div>
            {/* CARD2  */}

            <div className="col">
              <Link to="/taskOne">

                <div className="card shadow-lg  mb-5 bg-body rounded-4"
                  style={{ width: "auto", height: "250px" }}            >
                  <div className="overflow">
                    <img className="card-img-top proj" src={login} />

                    <div class="card-img-overlay">
                      <h4 className="card-title text-light float-start ">
                        <span class="badge bg-warning rounded-pill">Authentication With Flask React.js</span>
                      </h4></div>

                  </div>

                </div>
              </Link>
            </div>

            {/*CARD3*/}

            <div className="col">

              <Link to="/taskTwo">
                <div
                  className="card shadow-lg  mb-5 bg-body rounded-4"
                  style={{ width: "auto", height: "250px" }}            >
                  <div className="overflow">
                    <img className="card-img-top proj" src={throne} />
                    <div class="card-img-overlay">
                      <h4 className="card-title text-light float-start ">
                        <span class="badge bg-warning rounded-pill">Game of throners API</span>
                      </h4></div>


                  </div>

                </div>

              </Link>

            </div>
          </div>



        </div>


        {/*********************************************CARDS LINE TWO***************************/}


        {/* CARD4  */}
        <div class="container text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">


            <div className="col">

              <Link to="/taskThree">
                <div
                  className="card shadow-lg  mb-5 bg-body rounded-4"
                  style={{ width: "auto", height: "250px" }}            >
                  <div className="overflow">
                    <img className="card-img-top proj" src={wars} />
                    <div class="card-img-overlay">
                      <h4 className="card-title text-light float-start ">
                        <span class="badge bg-warning rounded-pill">Star Wars</span>
                      </h4></div>
                  </div>

                </div>

              </Link>

            </div>


            {/* CARD5 */}

            <div className="col">
              <Link to="/taskFour">
                <div
                  className="card shadow-lg  mb-5 bg-body rounded-4"
                  style={{ width: "auto", height: "250px" }}            >
                  <div className="overflow">
                    <img className="card-img-top proj" src={gallery} />
                    <div class="card-img-overlay">
                      <h4 className="card-title text-light float-start ">
                        <span class="badge bg-warning rounded-pill">Gallery Pictures</span>
                      </h4></div>
                  </div>

                </div>

              </Link>
            </div>

            {/*CARD6*/}

            <div className="col">
              <Link to="/taskFive">
                <div
                  className="card shadow-lg  mb-5 bg-body rounded-4"
                  style={{ width: "auto", height: "250px" }}            >
                  <div className="overflow">
                    <img className="card-img-top proj" src={portfolio} />
                    <div class="card-img-overlay">
                      <h4 className="card-title text-light float-start ">
                        <span class="badge bg-warning rounded-pill">Portfolio</span>
                      </h4></div>
                  </div>

                </div>

              </Link>
            </div>


          </div>
        </div>














      </div>

    </div>
  </div>

);
