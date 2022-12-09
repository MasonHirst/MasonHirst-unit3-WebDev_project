import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <h2 className="site-title">Devmountain Eatery</h2>
      <nav>
          <Link to="" >
            <button className="header-btn">Home</button>
          </Link>

          <Link to="/newRecipe" >
            <button className="header-btn">Add Recipe</button>
          </Link>
      </nav>
    </header>
  );
};

export default Header;
