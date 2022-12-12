import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <Link to="">
         <button className="empty-btn">
            <h2 className="site-title">Devmountain Eatery</h2>
         </button>
      </Link>
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
