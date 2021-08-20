import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {

  return (
    <footer>
        <div className="container footer">
          <nav>
            <ul className='footer__lists footer__lists_flex'>
              <li className="menu__list menu__list_position">
                <Link className="footer__link menu__link" to="/">
                  Home
                </Link>
              </li>
              <li className="menu__list menu__list_position">
                <Link className="footer__link menu__link" to="/about">
                  About
                </Link>
              </li>
              <li className="menu__list menu__list_position">
                <Link className="footer__link menu__link" to="/works">
                  Works
                </Link>
              </li>
              <li className="menu__list menu__list_position">
                <Link className="footer__link menu__link" to="/contact">
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