import React from "react";
import { Link } from "react-router-dom";

import logoB from "./logo.png";
import logoW from "./logo-white.png";

import styles from "./styles.module.scss";

const Logo = ({ type = "white" }) => {
  return (
    <section className={styles.root}>
      <Link to={"/"}>
        <img
          src={type === "white" ? logoW : logoB}
          className={styles.logo}
          alt="logo"
        />
      </Link>
    </section>
  );
};

export default Logo;
