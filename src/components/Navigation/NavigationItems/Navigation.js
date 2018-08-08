import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink> | <NavLink to="/user">Sign In</NavLink> |{" "}
      <NavLink to="/user/new">Sign Up</NavLink>
      <hr />
    </div>
  );
};

export default Navigation;
