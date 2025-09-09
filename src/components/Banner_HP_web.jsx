import React from "react";
import bannerImg from "../Pictures/Banner_HP_background.png";

const Banner_HP_web = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "1440px",
        height: "750px",
        margin: "auto",
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay 1: #4A727B 40% */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(74, 114, 123, 0.4)",
        }}
      />

      {/* Overlay 2: biały 50% */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          //   backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      />
    </div>
  );
};

export default Banner_HP_web;
