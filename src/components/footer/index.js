import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo';
import Social from '../social';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />

      <ul className={styles.links}>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/terms-conditions'}>Terms & Conditions</Link>
        </li>
        <li>
          <Link to={'/privacy-policy'}>Privacy Policy </Link>
        </li>
        <li>
          <Link to={'/cookie-policy'}>Cookie Policy </Link>
        </li>
        <li>
          <a href="mailto:hello@ecological.earth">Contact</a>
        </li>
      </ul>
      <Social />
      <p className={styles.copyright}>
        <small>Ecological.Earth © 2020 All Rights Reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
