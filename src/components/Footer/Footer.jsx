import React from 'react';

import './Footer.scss';
import './Logo.scss';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__box">
          <a href="#" className="footer__arrow-up"></a>
          <a href="#" className="logo logo--footer"></a>
          <div className="footer__link-box">
            <a
              href="https://m.facebook.com/"
              target="blank"
              className="footer__link footer__link--facebook"
          ></a>
            <a
              href="https://twitter.com/"
              target="blank"
              className="footer__link footer__link--twitter"
          ></a>
            <a
              href="https://www.instagram.com/"
              target="blank"
              className="footer__link footer__link--instagram"
          ></a>
          </div>
          <p className="footer__terms">
            © 2019 All rights reserved. Terms of Use &amp; Privacy Policy
          </p>
        </div>
      </footer>
    </>
  );
};
