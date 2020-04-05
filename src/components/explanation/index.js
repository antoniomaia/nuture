import React from "react";
import styles from "./styles.module.scss";

const Explanation = () => {
  return (
    <article className={styles.root}>
      <h4 className={styles.title}>
        What is a Carbon Footprint?{" "}
        <span role="img" aria-label="footsteps">
          👣
        </span>
      </h4>
      <p className={styles.description}>
        When talking about climate change, <em>footprint</em> is a metaphor for
        the total impact that something has. And <em>carbon</em> is a shorthand
        for all the different greenhouse gases that contribue to global warming.
        <br />
        <br />
        The term <em>carbon footprint</em>, therefore, is a shorthand to
        describe the best estimate that we can get of the full climate change
        impact of something. That something could be anything – an activity, an
        item, a lifestyle, a company, a country or even the whole world.
      </p>
    </article>
  );
};

export default Explanation;
