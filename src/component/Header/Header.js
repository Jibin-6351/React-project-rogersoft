import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2 className="heading">ShoppingCart</h2>
      <input type="text" className="inp" placeholder="Search" />
    </header>
  );
}
export default Header;
