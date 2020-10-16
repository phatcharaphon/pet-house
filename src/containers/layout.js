import React from "react";
import HeaderContainer from "./header";
import Footer from "./footer";

const layout = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      {children}
      <Footer />
    </>
  );
};

export default layout;
