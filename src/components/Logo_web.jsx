import React from "react";
import logo from "../Pictures/Logo_banner.png";

const Logo_web = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "188px",
        height: "208px",
        marginLeft: "36px",
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        zIndex: "10",
      }}
    ></div>
  );
};
export default Logo_web;
