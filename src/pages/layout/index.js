import React from "react";
import Footer from "../../components/footer";

import "./styles.css";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
