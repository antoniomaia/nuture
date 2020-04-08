import React from "react";

import Logo from "../logo";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <ul className={styles.links}>
        <li>about</li>
        <li>early access</li>
        <li>feedback</li>
      </ul>
      <p className={styles.copyright}>
        <small>UNLEASH.earth © 2020 All Rights Reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
