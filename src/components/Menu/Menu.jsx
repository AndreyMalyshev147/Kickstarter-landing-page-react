import React from 'react';

import './Menu.scss';

export const Menu = ({ setHidden }) => {
  return (
    <>
      <nav className="page__menu menu" id="menu">
        <div className="menu__box">
          <div className="menu__content">
            <div className="menu__closer-wrapper">
              <a
                href="#"
                className="menu__closer"
                onClick={setHidden}
              ></a>
            </div>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#our-story" className="menu__link">
                  OUR STORY
                </a>
              </li>
              <li className="menu__item">
                <a
                  href="https://www.crazybaby.com/"
                  target="blank"
                  className="menu__link"
                >
                  ABOUT US
                </a>
              </li>
              <li className="menu__item">
                <a href="#technology" className="menu__link">
                  TECHNOLOGY
                </a>
              </li>
              <li className="menu__item">
                <a href="#features" className="menu__link">
                  FEATURES
                </a>
              </li>
              <li className="menu__item">
                <a href="#get-in-touch" className="menu__link">
                  GET IN TOUCH
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu__spec-box">
          <a href="#specs" className="menu__specs">
            SPECS
          </a>
          <a href="#buy" className="menu__buy">
            Buy
          </a>
          <div className="menu__language">
            <span className="menu__language menu__language--en">EN</span>
            <span className="menu__language menu__language--slash">/</span>
            <span className="menu__language menu__language--ua">UA</span>
          </div>
        </div>
      </nav>
    </>
  )
}