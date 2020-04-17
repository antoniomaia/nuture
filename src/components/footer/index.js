import React from 'react';

import Logo from '../logo';
import Social from '../social';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />

      
      <div class="">
        <Social />
      </div>

      <ul className={styles.links}>
        <li>
          <Link to={'/about'}>About Us</Link>
        </li>
        <li>
          <Link to={'/terms-conditions'}>Terms & Conditions</Link>
        </li>
        <li>
          <Link to={'/privacy-policy'}>Privacy Policy</Link>
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
