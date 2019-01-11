import React from "react";

import "./_header.scss";
import logo from "./logo-study-groups2.png";
import AddGroupButton from "../add-group-button";
import Link from "gatsby-link";

const Header = () => (
  <header className="header">
    <div className="header-content">
      <Link to="/">
        <img className="header-logo" src={logo} alt="logo" />
      </Link>
      <AddGroupButton />
    </div>
  </header>
);

export default Header;
