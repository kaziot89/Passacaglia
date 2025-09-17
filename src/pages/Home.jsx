import React from "react";
import Banner_HP_web from "../components/Banner_HP_web";
import Menu_Web from "../components/Menu_web";
import Logo_web from "../components/Logo_web";
import Footer from "../components/Footer_web"

const Home = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Banner_HP_web />
      <Footer/>
    </div>
  );
};

export default Home;
