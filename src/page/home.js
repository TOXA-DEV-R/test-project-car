/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <ul className="link-list">
          <li className="link-item">
            <Link to="/models">Modellari</Link>
          </li>
        </ul>
      </div>
      <main className="home"></main>;
    </>
  );
};

export default Home;
