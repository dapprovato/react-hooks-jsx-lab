import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">About
      <h2>About Me</h2>
      <p>Hello! I'm learning React!</p>
      <img alt="I made this" src={image}/>
  </div>;
}

export default About;
