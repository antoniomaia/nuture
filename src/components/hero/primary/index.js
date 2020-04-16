import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const Primary = () => {
  return (
    <section className={cx(styles.root, styles.hero)}>
      <h1 className={styles.headline}>How big is your carbon footprint?</h1>
      <p className={styles.sub_heading}>
        Understand your CO2 emissions and live a more sustainable life. Take
        your first step with our environmental footprint calculator.
      </p>
      <div className={styles.cta_container}>
        <Link className={styles.button} to={'/calculator'}>
          Start
        </Link>
      </div>
    </section>
  );
};

export default Primary;
