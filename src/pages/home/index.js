import React from "react";
import "./styles.css";

import Hero from "../../components/hero";
import Explanation from "../../components/explanation";
import Understand from "../../components/understand";
import Usp from "../../components/usp";

const Home = () => {
  return (
    <>
      <Hero />
      {/*  <Explanation />
      <Understand />*/}
      <Usp />
    </>
  );
};

export default Home;
