import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">CVG</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse scores" id="navbarColor03">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <a className="nav-link" href="#">Current Score: {props.score}</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">Top Score: {props.topScore}</a>
        </li>
      </ul>
    </div>
  </nav>
        );

export default Nav;
