import React from "react";
import "./styles.css";

import Hero from "../../components/hero";
import Explanation from "../../components/explanation";
import Understand from "../../components/understand";

const Home = () => {
  return (
    <>
      <Hero />
      <Explanation />
      <Understand />
    </>
  );
};

export default Home;
