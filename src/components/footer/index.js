import React from 'react';

import Logo from '../logo';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <ul className={styles.links}>
        <li>
          <Link to={'/about'}>about</Link>
        </li>
        <li>
          <Link to={'/terms-conditions'}>Terms Conditions</Link>
        </li>
        <li>early access</li>
        <li>feedback</li>
      </ul>
      <p className={styles.copyright}>
        <small>Ecological.Earth © 2020 All Rights Reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
