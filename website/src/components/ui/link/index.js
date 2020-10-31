import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const LinkEcological = ({ children, to }) => {
  return (
    <div className={styles.root}>
      <Link className={styles.button} to={to}>
        {children}
      </Link>
    </div>
  );
};

export default LinkEcological;
