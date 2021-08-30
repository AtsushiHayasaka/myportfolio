import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {

  const OnDrawerButton = () => {
    const hamburger = document.getElementById('js_hamburger');
    hamburger.getAttribute('aria-expanded') == 'false' 
    ? hamburger.setAttribute('aria-expanded', 'true') 
    : hamburger.setAttribute('aria-expanded', 'false')
    console.log(hamburger.getAttribute('aria-expanded'));
    const header = document.querySelector('header')
    header.classList.toggle('is-drawerActive');
  };

  const onClickNav = () => {
    window.scrollTo(0, 0);
    const hamburger = document.getElementById('js_hamburger');
    hamburger.getAttribute('aria-expanded') == 'false' 
    ? hamburger.setAttribute('aria-expanded', 'true') 
    : hamburger.setAttribute('aria-expanded', 'false')
    
    const header = document.querySelector('header')
    header.classList.toggle('is-drawerActive');
  }

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
                  <NavLink onClick={() => window.scrollTo(0, 0)}  className="menu__link menu__home" activeClassName="current" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li className="menu__list menu__list_position">
                  <NavLink onClick={() => window.scrollTo(0, 0)}  className="menu__link menu__about" activeClassName="current"  to="/about">
                    About
                  </NavLink>
                </li>
                <li className="menu__list menu__list_position">
                  <NavLink onClick={() => window.scrollTo(0, 0)}  className="menu__link menu__works" activeClassName="current"  to="/works">
                    Works
                  </NavLink>
                </li>
                <li className="menu__list menu__list_position">
                  <NavLink onClick={() => window.scrollTo(0, 0)}  className="menu__link menu__contact" activeClassName="current"  to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>


            {/* drawer */}
            <div className="drawer drawer-menu sp-only">
              <button type="button" id="js_hamburger" onClick={OnDrawerButton} className="hamburger menu-button" aria-controls="js-glabal-menu" aria-expanded="false" area-label="メニューを開閉する">
                <span className="hamburger__line">
                </span>
              </button>
              <div className="sp-global-menu" id="js-global-menu" area-hidden="true">
                <nav className="menu__nav_sp nav_sp">
                  <ul className="menu__lists">
                    <li className="menu__list list-sp_position list-sp_font">
                      <NavLink onClick={onClickNav}  className="menu__link menu__home" activeClassName="current" exact to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="menu__list list-sp_position list-sp_font">
                      <NavLink onClick={onClickNav}  className="menu__link menu__about" activeClassName="current"  to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="menu__list list-sp_position list-sp_font">
                      <NavLink onClick={onClickNav}  className="menu__link menu__works" activeClassName="current"  to="/works">
                        Works
                      </NavLink>
                    </li>
                    <li className="menu__list list-sp_position list-sp_font">
                      <NavLink onClick={onClickNav}  className="menu__link menu__contact" activeClassName="current"  to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="drawer-background">.drawer-background</div>
              </div>
            </div>
      
          </div>
        </div>
      </header>
  )
}

export default Header;