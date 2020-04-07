import React from "react";
import "./styles.css";

import Hero from "../../components/hero";
import Explanation from "../../components/explanation";
import Understand from "../../components/understand";
import Usp from "../../components/usp";
import TogetherBanner from "../../components/banners/together";

const Home = () => {
  return (
    <>
      <Hero />
      <TogetherBanner />
      <Usp />
    </>
  );
};

export default Home;
