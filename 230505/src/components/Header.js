import React from "react";
import logo from "../logo.svg";
const Header = () => {
  return (
    <>
      <img src={logo} alt="Logo" class="logo"></img>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Update</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
