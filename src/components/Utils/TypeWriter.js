import React from "react";
import Typewriter from "typewriter-effect";
import "./Utils.css"

function TypeWriter() {
  return (
    <Typewriter 
      options = {{
        strings: [
          "Developer",
          "Web Developer",
          "Data Scientist Student",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;