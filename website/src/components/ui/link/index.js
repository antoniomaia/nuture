import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const LinkEcological = ({ children, to, external }) => {
  if (external) {
    return (
      <div className={styles.root}>
        <a className={styles.button} href={to}>
          {children}
        </a>
      </div>
    );
  }
  return (
    <div className={styles.root}>
      <Link className={styles.button} to={to}>
        {children}
      </Link>
    </div>
  );
};

export default LinkEcological;
