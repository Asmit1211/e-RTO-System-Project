import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gra p-4">
      <ul className="flex space-x-6 cursor-pointer text-white">
        <li>Home</li>
        <li>About</li>
        <li>login</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
