import React, { useRef } from "react";
import "./styles.css";

import Hero from "../../components/hero";
import Understand from "../../components/understand";
import { jumpTo } from "../../utils";

const Home = () => {
  const understandRef = useRef(null);

  return (
    <>
      <Hero jumpTo={jumpTo(understandRef)} />
      <section ref={understandRef}>
        <Understand />
      </section>
    </>
  );
};

export default Home;
