import React from "react";

const Header = ({ blogName="Underreacted"}) => {
  return (
    <header>
      <h1>{blogName}</h1>
    </header>
  );
};

export default Header;
