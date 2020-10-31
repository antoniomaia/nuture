import React from 'react';

import styles from './styles.module.scss';
import Link from '../../ui/link';

const System = () => {
  return (
    <article className={styles.root}>
      <h3>
        Be part of the <span>worldwide</span> network of{' '}
        <span>carbon neutrals</span>
      </h3>
      <Link to={'/get-started'}>Go Carbon Neutral</Link>
    </article>
  );
};

export default System;
