import React from "react";

import Header from "../../components/header";

import "./styles.css";

const Layout = ({ children }) => {
  return (
    <div className="background">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
