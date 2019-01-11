import React from "react";

import "./_header.scss";
import logo from "./logo-study-groups2.png";
import AddGroupButton from "../add-group-button";

const Header = () => (
  <header className="header">
    <div className="header-content">
      <img className="header-logo" src={logo} alt="logo" />
      <AddGroupButton />
    </div>
  </header>
);

export default Header;
