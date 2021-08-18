import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {

  return (
    <header className='header_position header_size '>
        <div className="container header_flex">
          <div className="logo header_logo">
            <p className="header__logo_font ">ATSUSHI HAYASAKA</p>
          </div>
          <div className="menu header__menu">
            <nav className="menu__nav_pc nav_pc">
              <ul className="menu__lists menu__lists_flex">
                <li className="menu__list menu__list_position">
                  <Link className="menu__link" to="/">
                    Home
                  </Link>
                </li>
                <li className="menu__list menu__list_position">
                  <Link className="menu__link" to="/about">
                    About
                  </Link>
                </li>
                <li className="menu__list menu__list_position">
                  <Link className="menu__link" to="/works">
                    Works
                  </Link>
                </li>
                <li className="menu__list menu__list_position">
                  <Link className="menu__link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header;