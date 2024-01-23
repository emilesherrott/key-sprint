import React from "react";
import { Link } from "react-router-dom"

import { HomeBodyAnimation } from "../../components";

import "./HomePage.css";

const HomePage = () => {

  return (
    <>
      <HomeBodyAnimation />
      <div id="pages-homepage-links">
      {/* <Link to="/solo" className="pages-homepage-link">Solo</Link>
      <Link to="/challenge"  className="pages-homepage-link">Competitive</Link> */}
      </div>
    </>
  );
};

export default HomePage;
