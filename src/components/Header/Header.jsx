import React from 'react';

import './Header.scss';
import './Logo.scss';
import './SpecBox.scss';

import { Menu } from '../Menu/Menu';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

import productPng from '../../images/product.png';

export const Header = () => {
  const setHidden = () => {
    console.log(document.body.style.overflow);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    };
  };

  return (
    <>
      <header className="header">
        <HeaderMenu setHidden={setHidden} />
        <div className="header__content">
          <div className="header__photo-box">
            <img
              src={productPng}
              alt=""
              className="header__photo"
            />
          </div>
          <div className="header__text-box">
            <h1 className="header__title">
              Futuristic
              <br />
              Wireless
              <br />
              Speaker
            </h1>
            <p className="header__description">
              Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.
            </p>
          </div>
        </div>
        <div className="header__menu-links">
          <ul className="header__list">
            <li className="header__item">
              <a href="#our-story" className="header__link">
                OUR STORY
              </a>
            </li>
            <li className="header__item">
              <a
                href="https://www.crazybaby.com/"
                target="blank"
                className="header__link"
              >
                ABOUT US
              </a>
            </li>
            <li className="header__item">
              <a href="#technology" className="header__link">
                TECHNOLOGY
              </a>
            </li>
            <li className="header__item">
              <a href="#features" className="header__link">
                FEATURES
              </a>
            </li>
            <li className="header__item">
              <a href="#get-in-touch" className="header__link">
                GET IN TOUCH
              </a>
            </li>
          </ul>
        </div>
        <Menu setHidden={setHidden} />
      </header>
    </>
  );
};
