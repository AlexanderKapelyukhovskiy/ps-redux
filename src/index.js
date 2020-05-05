import React from "react";
import { render } from "react-dom";
import HomePage from "./components/home/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Router>
    <HomePage />
  </Router>,
  document.getElementById("app")
);
