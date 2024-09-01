import React from "react";
import NavLink from "./nav-links";
import Navsearch from "./nav-search";

const Navbar = () => {
  console.log(`navbar rendered`);
  return (
    <div>
      <NavLink />
      <Navsearch />
    </div>
  );
};

export default Navbar;
