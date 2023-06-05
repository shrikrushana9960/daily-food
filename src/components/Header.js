import React from "react";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        boxShadow: " 0 2px 4px rgba(0, 0, 0, 0.2)",
        flexDirection: "row",
        display: "flex",
      }}
    >
      <p style={{ fontWeight: "bold", marginLeft: 20 }}>Busy Chef</p>
      <div
        style={{ marginLeft: "auto", flexDirection: "row", display: "flex" }}
      >
        <p style={{ fontWeight: "bold", marginRight: 20 }}>Resturants</p>
        <p style={{ fontWeight: "bold", marginRight: 20 }}>Privacy policy</p>
      </div>
    </div>
  );
};

export default Header;
