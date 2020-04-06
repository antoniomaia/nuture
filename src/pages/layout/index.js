import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
