import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom"

import SinglePage from "./SinglePages";

const About = (props) => {
  const { pathname } = useLocation();
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}
export default About