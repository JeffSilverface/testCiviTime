import React from "react";
import Man from "../assets/man.svg";
import Woman from "../assets/woman.svg";

export const Avatar = () => {
  return (
    <div className="avatars">
      <p>Lequel de ces 2 avatars préférez-vous ?</p>
      <div>
        <img className="avatar-picture" src={Man} alt="Avatar Masculin" />
        <img className="avatar-picture" src={Woman} alt="Avatar Féminin" />
      </div>
    </div>
  );
};
