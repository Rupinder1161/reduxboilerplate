import React, { Component } from "react";
import Cart from "./Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
// import { Link } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";

function Navbar(props) {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Jagtari</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to={"/Cart/"}>ADD YOUR MENU</Link>

        <Badge
          className="cool"
          badgeContent={cart.length}
          color="secondary"
          showZero
        >
          <Link to={"/Cart/"}>
            <ShoppingCartIcon />
          </Link>
        </Badge>
      </div>
    </div>
  );
}

export default Navbar;
