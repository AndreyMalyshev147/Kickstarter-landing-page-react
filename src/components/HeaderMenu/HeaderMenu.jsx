import React from 'react';

export const HeaderMenu = ({ setHidden }) => {
  return (
    <>
      <div className="header__menu">
        <a href="#" className="logo logo--header"></a>
        <a
          href="#menu"
          className="header__menu header__menu--menu-opener"
          onClick={setHidden}
        ></a>
        <div className="spec-box">
          <a href="#" className="spec-box__specs">
            SPECS
          </a>
          <div className="spec-box__container">
            <span className="spec-box__language spec-box__language--en">EN</span>
            <span className="spec-box__language spec-box__language--slash">/</span>
            <span className="spec-box__language spec-box__language--ua">UA</span>
          </div>
          <a href="#" className="spec-box__buy">
            Buy
          </a>
        </div>
      </div>
    </>
  );
};
