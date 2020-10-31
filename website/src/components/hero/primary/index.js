import React from 'react';
import cx from 'classnames';

import Link from '../../ui/link';
import styles from './styles.module.scss';

const Primary = () => {
  return (
    <section className={styles.hero_container}>
      <div className={cx(styles.root, styles.hero)}>
        <ul>
          <li>Measure</li>
          <li>Reduce</li>
          <li>Offset</li>
          <li>Share</li>
        </ul>
        <h1 className={styles.headline}>
          your company <br />
          carbon footprint
        </h1>
        <p className={styles.sub_heading}>
          All the tools you need to become a certified carbon neutral business
          are here, start taking climate action now!
        </p>
        <Link to={'/get-started'}>Get a quote</Link>
      </div>
    </section>
  );
};

export default Primary;
