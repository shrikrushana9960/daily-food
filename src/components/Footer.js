import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 100,
        margin: 50,
      }}
    >
      All right reserved by Busy Chef ©{new Date().getFullYear()}
    </div>
  );
};

export default Footer;
