import React from "react";
import "../../styles/home.css";
import { About } from "../component/about";
import { Header } from "../component/header";
import { Project } from "../component/project";
import { SkillOne } from "../component/skillOne";
import { Contact } from "../component/contact";
import { Nav } from "../component/nav";
import { Navbar } from "../component/navbar";

export const Home = () => (
  <div className="row ">
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
    <div className="container-fluid">
      <Header />
    </div>
    <div className="container-fluid about">
      <About />
    </div>
    <div className="container-fluid project">
      <Project />
    </div>
    <div className="container-fluid skillHome">
      <SkillOne />
    </div>
    <div className="container-fluid contact">
      <Contact />
    </div>
  </div>
);
