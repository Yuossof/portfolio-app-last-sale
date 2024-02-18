import React from "react";
// import Hero from "./components/hero/Hero";
// import MainContact from "./components/main/mainCont";
// import Footer from "./components/footer/Footer";
// import MainCont from "./components/main/mainCont";

import Hero from "../components/hero/Hero";
import MainCont from "../components/main/mainCont";
import MainContact from "../components/Contact_Us/ContactUs";
import Footer from "../components/footer/Footer";
import Rateme from "../components/rateSec/rateme";
import '../index.css'

const Home = () => {
  return (
    <div>
      <div className="container-of-sections" >
        <Hero />
        <div className="divider"></div>
        <MainCont />
        <div className="divider"></div>
        <MainContact />
        <div className="divider"></div>
        <Rateme />
        <div style={{ marginTop: "100px" }} className="divider"></div>
        <Footer />
        <div className="divider"></div>


      </div>
    </div>
  );
};

export default Home;
