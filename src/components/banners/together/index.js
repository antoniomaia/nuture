import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const Together = () => {
  return (
    <article className={styles.together}>
      <h1>Facing Climate Change Together</h1>
      <p>
        While we don’t have all the answers, we are building tools to help you
        get started.
      </p>
      <Link className={styles.button} to={'/articles'}>
        Learn more
      </Link>
    </article>
  );
};

export default Together;
