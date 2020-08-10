import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
export default function Navbar() {
  return (
    <header>
      <div className="rectangle">
        <div className="logo-area">
          <span className="cart-image"></span>
          <span className="logo">eSHOP.com</span>
        </div>
        <NavLink to="/" id="active" className="link">
          {" "}
          Products
        </NavLink>
        <NavLink
          to="/my-orders"
          className="link"
          activeClassName="active"
          style={{ left: "1449px" }}
        >
          My Orders
        </NavLink>
        <NavLink to="/add-product" className="link" style={{ left: "1606px" }}>
          Add Product
        </NavLink>
        <Cart />
      </div>
    </header>
  );
}
