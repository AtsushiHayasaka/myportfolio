import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {


  return (
    <footer>
        <div className="container">
        <nav className="menu__nav_pc ">
              <ul className="menu__lists footer__flex">
                <li className="menu__list  menu__list_position">
                  <Link onClick={() => window.scrollTo(0, 0)}  className="menu__link" to="/">
                    Home
                  </Link>
                </li>
                <li className="menu__list menu__list_position">
                  <Link onClick={() => window.scrollTo(0, 0)}  className="menu__link" to="/about">
                    About
                  </Link>
                </li>
                <li className="menu__list menu__list_position">
                  <Link onClick={() => window.scrollTo(0, 0)}  className="menu__link" to="/works">
                    Works
                  </Link>
                </li>
                <li className="menu__list menu__list_position">
                  <Link onClick={() => window.scrollTo(0, 0)}  className="menu__link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
        </div>
      </footer>
  );
}

export default Footer;