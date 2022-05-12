import React from "react";
import { RocketIcon } from "@primer/octicons-react";

function NavBar({ title }) {
  return (
    <nav className="navbar navbar-dark bg-success">
      <div className="container-fluid justify-content-center">
        <RocketIcon size="medium" fill="#fff" />
        <span className="navbar-brand mx=5 mb-0 h1">{title}</span>
      </div>
    </nav>
  );
}

export default NavBar;
