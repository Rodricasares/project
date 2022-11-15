import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Task } from "./pages/task";
import { TaskOne } from "./pages/taskOne";
import { TaskTwo } from "./pages/taskTwo";
import { TaskThree} from "./pages/taskThree";
import { TaskFour} from "./pages/taskFour";
import { TaskFive} from "./pages/taskFive";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Task />} path="/task" />
            <Route element={<TaskOne />} path="/taskOne" />
            <Route element={<TaskTwo />} path="/taskTwo" />
            <Route element={<TaskThree />} path="/taskThree" />
            <Route element={<TaskFour />} path="/taskFour" />
            <Route element={<TaskFive />} path="/taskFive" />

            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1> Not found! </h1>} />
          </Routes>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
