import React from "react";

import "./_header.scss";
import logo from "./logo-study-groups2.png";
import AddListing from "../add-listing";

const Header = () => (
  <header className="header">
    <div className="header-content">
      <img className="header-logo" src={logo} alt="logo" />
      <AddListing />
    </div>
  </header>
);

export default Header;
