import React from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.css";

const Layout = ({ children }) => {
  return (
    <div className="background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
