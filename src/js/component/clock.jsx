import React from "react";

const Clock = ({ contador }) => {
  const digits = {
    primerDigito: Math.floor((contador / 1) % 10),
    segundoDigito: Math.floor((contador / 10) % 10),
    tercerDigito: Math.floor((contador / 100) % 10),
    cuartoDigito: Math.floor((contador / 1000) % 10),
    quintoDigito: Math.floor((contador / 10000) % 10),
    sextoDigito: Math.floor((contador / 100000) % 10),
  };

  return (
    <main className="container-fluid bg-image vh-100 m-0 p-0 d-flex justify-content-center align-items-center">
      <div className="container bg-trans d-flex justify-content-center gap-3 py-5">
        <div className="clock-digit">{digits.sextoDigito}</div>
        <div className=" clock-digit">{digits.quintoDigito}</div>
        <div className=" clock-digit clock-divider">:</div>
        <div className=" clock-digit">{digits.cuartoDigito}</div>
        <div className=" clock-digit">{digits.tercerDigito}</div>
        <div className=" clock-digit clock-divider">:</div>
        <div className=" clock-digit">{digits.segundoDigito}</div>
        <div className=" clock-digit">{digits.primerDigito}</div>
      </div>
    </main>
  );
};

export default Clock;
