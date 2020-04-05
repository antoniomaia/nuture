import React, { useRef } from "react";
import "./styles.css";

import Hero from "../../components/hero";
import Explanation from "../../components/explanation";
import Understand from "../../components/understand";
import { jumpTo } from "../../utils";

const Home = () => {
  const understandRef = useRef(null);

  return (
    <>
      <Hero jumpTo={jumpTo(understandRef)} />
      <section ref={understandRef}>
        <Explanation />
        <Understand />
      </section>
    </>
  );
};

export default Home;
