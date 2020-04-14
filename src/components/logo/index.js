import React from 'react';
import { Link } from 'react-router-dom';

import logoB from './logo.png';

import styles from './styles.module.scss';

const Logo = () => {
  return (
    <section className={styles.root}>
      <Link to={'/'}>
        <img src={logoB} className={styles.logo} alt="logo" />
      </Link>
    </section>
  );
};

export default Logo;
