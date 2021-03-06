import React from "react";
import { Header, Avatar, Skin, Tshirt, Button } from "./index";

export const Window = () => {
  return (
    <div className="window">
      <Header />
      <Avatar />
      <hr className="dash" />
      <Skin />
      <Tshirt />
      <Button />
    </div>
  );
};
