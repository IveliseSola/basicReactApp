import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
<div className="jumbotron">
  <h1 className="display-3">Clicky Disney Villains Game</h1>
  <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
  {/* <hr className="my-4"> */}
  <p> Message: {props.children} </p>
</div>
);

export default Jumbotron;