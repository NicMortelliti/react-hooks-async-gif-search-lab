import React from "react";

function NavBar({ color, title }) {
  const colors = {
    black: "navbar-inverse",
    white: "navbar-default",
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">{title}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
