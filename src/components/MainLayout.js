import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Header/>
      <div style={{ minWidth: "1024px", maxWidth: "1024px" }}>{children}</div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
