import React from "react";
import "./header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="logo">SPA</h1>
        <ul className="nav-menus">
          <Link to="/">
            <li>Accordion</li>
          </Link>
          <Link to="/search-article">
            <li>Search Articles</li>
          </Link>
          <Link to="/drop-down">
          <li>DropDown</li>
          </Link>
          <Link to="/language-translate">
          <li>Language Translate</li>
          </Link>
          <li>Liked</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
