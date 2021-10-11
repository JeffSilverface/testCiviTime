import React from "react";
import Clothes from "../assets/t-shirt.svg";
import Green from "../assets/color-88C10F.svg";

export const Tshirt = () => {
  return (
    <div>
      <img src={Clothes} alt="Vêtements" />
      <img src={Green} alt="Vert" />
      <span className="E0A39A color" />
      <span className="FCCC84 color" />
      <span className="533724 color" />
    </div>
  );
};
