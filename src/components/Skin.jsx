import React from "react";
import Face from "../assets/skin.svg";
import ClearSkin from "../assets/color-FCD7B8.svg";
import TannedSkin from "../assets/color-FCCC84.svg";
import SunBurnedSkin from "../assets/color-E0A39A.svg";
import DarkSkin from "../assets/color-533724.svg";

export const Skin = () => {
  return (
    <div>
      <img src={Face} alt="Visage" />
      <img src={ClearSkin} alt="Peau Claire" />
      <img src={TannedSkin} alt="Peau Bronzée" />
      <img src={SunBurnedSkin} alt="Peau Coup De Soleil" />
      <img src={DarkSkin} alt="Peau Sombre" />
    </div>
  );
};
