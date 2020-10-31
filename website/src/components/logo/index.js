import React from 'react';
import { Link } from 'react-router-dom';

import LogoIcon from '../ui/icons/logo';
import styles from './styles.module.scss';

const Logo = () => {
  return (
    <section className={styles.root}>
      <Link to={'/'} className={styles.logo}>
        <LogoIcon/>
      </Link>
    </section>
  );
};

export default Logo;
