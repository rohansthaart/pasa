import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Store
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              Account
            </a>
          </li>
          <li className="dropdown nav-item">
            <a href="#" className="nav-link">
              Departments
            </a>
            <div class="dropdown-content">
              <a href="#">Clothing</a>
              <a href="#">Shoes</a>
              <a href="#">Shoes</a>
              <a href="#">Gadgets</a>
              <a href="#">Funiture and decor</a>
              <a href="#">Accessories</a>
              <a href="#">Entertainment</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search" />
        </form>
      </div>
    </nav>
  );
}

export default Header;

{
  /*<div classNameName="header">
      <ul>
        <li>
          <a href="#logo">LOGO</a>
        </li>

        <li>
          <form action="/">
            <input type="text" placeholder="Search" name="search" />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </li>

        <li>Login</li>
        <li>Cart</li>
      </ul>
  </div>*/
}
