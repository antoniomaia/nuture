import React from "react";
import logo from "./logo.png";

import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <section className={styles.root}>
      <img src={logo} className={styles.logo} alt="logo" />
    </section>
  );
};

export default Logo;
