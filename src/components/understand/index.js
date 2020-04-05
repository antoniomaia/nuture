import React from "react";
import "./styles.css";
import StepperContainer from "../stepper/container";

const Understand = () => {
  return (
    <section className="container">
      <article className="understand">
        <h3 className="understand-title">
          Understand your environmental impact{" "}
          <span role="img" aria-label="books">
            📚
          </span>
        </h3>
        <p className="understand-paragraph">
          We need to get to know your green habits. Start by answering some
          questions.
        </p>
      </article>
      <StepperContainer />
    </section>
  );
};

export default Understand;
