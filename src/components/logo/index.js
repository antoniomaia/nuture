import React from "react";
import { Link } from "react-router-dom";

import logo from "./logo.png";

import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <section className={styles.root}>
      <Link to={"/"}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
    </section>
  );
};

export default Logo;
