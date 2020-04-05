import React from "react";
import "./styles.css";

const Hero = ({ jumpTo }) => {
  return (
    <section className="hero">
      <h1 className="headline">How big is your carbon footprint?</h1>
      <p className="sub-heading">
        Understand your CO2 emissions and live a more sustainable life. Take
        your first step with our environmental footprint calculator.
      </p>
      <div className="cta-container">
        <button className="start" onClick={jumpTo}>
          Start
        </button>
      </div>
    </section>
  );
};

export default Hero;
