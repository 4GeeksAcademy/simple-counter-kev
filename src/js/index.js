//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Clock from "./component/clock.jsx";

let contador = 0;

setInterval(() => {
  contador++;
  ReactDOM.render(
    <Clock contador={contador} />,
    document.querySelector("#app")
  );
}, 1000);
