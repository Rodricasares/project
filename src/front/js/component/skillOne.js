import React from "react";
import { } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/skill.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-solid-svg-icons';

import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

import { DiPython } from 'react-icons/di'
import { SiFlask } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiPostman } from 'react-icons/si'

export const SkillOne = () => (
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




                <div className="container mt-5">
                    <div class="row">


                        <main >


                            <div className="col boxSkill">
                                <h1 class="habilidad">Front-end</h1>
                                <div className="icon0" >
                                    <svg height='80' width='80' >
                                        <circle cx='40' cy='40' r='35' stroke='grey' stroke-width='4' fill='none' ></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        Css
                                    </span>
                                    <FontAwesomeIcon icon={faCss3Alt} className="icon2" />
                                </div>

                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='grey' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        Html
                                    </span>
                                    <FontAwesomeIcon icon={faHtml5} className="icon2" />
                                </div>

                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='grey' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        JavaScript
                                    </span>
                                    <FontAwesomeIcon icon={faJs} className="icon2" />
                                </div>

                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='grey' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        React.Js
                                    </span>
                                    <FontAwesomeIcon icon={faReact} className="icon2" />
                                </div>

                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='grey' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        Boopstrap
                                    </span>
                                    <FontAwesomeIcon icon={faBootstrap} className="icon2" />
                                </div>

                            </div>



                            <div className="col boxSkill ">

                                <h1 class="habilidad">Back-end</h1>
                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='grey' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        Python
                                    </span>
                                    <DiPython className="icon2" />
                                </div>


                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='grey' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        Flask
                                    </span>

                                    <SiFlask className="icon2" />
                                </div>
                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='grey' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        Mysql
                                    </span>
                                    <SiMysql className="icon2" />
                                </div>

                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='gray' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        Postman
                                    </span>
                                    <SiPostman className="icon2" />
                                </div>

                            </div>

                            <div className="col boxSkill ">

                                <h1 class="habilidad">Tools</h1>

                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='gray' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        Figma
                                    </span>
                                    <FontAwesomeIcon icon={faFigma} className="icon2" />
                                </div>
                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='gray' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        Gitpod
                                    </span>
                                    <FontAwesomeIcon icon={faGit} className="icon2" />
                                </div>
                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='gray' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        GitHub
                                    </span>
                                    <FontAwesomeIcon icon={faGithub} className="icon2" />
                                </div>
                                <div className="icon0">
                                    <svg height='80' width='80'>
                                        <circle cx='40' cy='40' r='35' stroke='gray' stroke-width='4' fill='none'></circle>
                                    </svg>
                                    <span className="tooltipText">
                                        Wordpress
                                    </span>
                                    <FontAwesomeIcon icon={faWordpress} className="icon2" />
                                </div>

                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>

);
