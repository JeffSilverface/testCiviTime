import React from "react";
import Clothes from "../assets/t-shirt.svg";
import Grey from "../assets/color-B2C7C7.svg";
import Green from "../assets/color-88C10F.svg";
import Red from "../assets/color-FF1414.svg";
import Striped from "../assets/color-striped.svg";

export const Tshirt = () => {
  return (
    <div className="colors-pickup">
      <img className="sketches" src={Clothes} alt="Vêtements" />
      <img className="color-spots" src={Grey} alt="Gris" />
      <img className="color-spots" src={Green} alt="Vert" />
      <img className="color-spots" src={Red} alt="Rouge" />
      <img className="color-spots" src={Striped} alt="Rayé" />
    </div>
  );
};
