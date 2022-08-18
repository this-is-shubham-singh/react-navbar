import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>


          <li>
            <Link to="/services" className="link">
              Services
            </Link>
            <ul>
              <li>
                <Link to="consulting" className="link">Consulting</Link>
              </li>
              <li>
                <Link to="software" className="link">Software</Link>
              </li>
              <li>
                <Link to="marketing" className="link">Marketing</Link>
              </li>
            </ul>
          </li>


          <li>
            <Link to="/phones" className="link">
              Phones
            </Link>
            <ul>
              <li>
                <Link to="/samsung" className="link">Samsung </Link>
              </li>
              <li>
                <Link to="/apple" className="link">Apple </Link>
              </li>
            </ul>
          </li>



          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
