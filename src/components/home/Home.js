import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Home = () => (
  <div className="home">
    <div className="container">
      <h2 className="home__title">Application navigation</h2>
      <nav className="home__nav">
        <ul className="home__list">
          <li className="home__item">
            <Link className="home__link" to="/users">
              Users
            </Link>
          </li>
          <li className="home__item">
            <Link className="home__link" to="/posts">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Home;
