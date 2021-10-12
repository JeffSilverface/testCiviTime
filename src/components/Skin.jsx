import React from "react";
import Face from "../assets/skin.svg";
import ClearSkin from "../assets/color-FCD7B8.svg";
import TannedSkin from "../assets/color-FCCC84.svg";
import SunBurnedSkin from "../assets/color-E0A39A.svg";
import DarkSkin from "../assets/color-533724.svg";

export const Skin = () => {
  return (
    <div className="colors-pickup">
      <img className="sketches" src={Face} alt="Visage" />
      <img className="color-spots" src={ClearSkin} alt="Peau Claire" />
      <img
        className="color-spots"
        src={SunBurnedSkin}
        alt="Peau Coup De Soleil"
      />
      <img className="color-spots" src={TannedSkin} alt="Peau Bronzée" />
      <img className="color-spots" src={DarkSkin} alt="Peau Sombre" />
    </div>
  );
};
