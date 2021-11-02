import React from 'react';

import './AboutUs.scss';

import futureDesignPng from '../../images/future-design.png';

export const AboutUs = () => {
  return (
    <>
      <section className="about-us" id="our-story">
        <h2 className="about-us__title">
          DESIGNED FOR
          <br />
          THE FUTURE
        </h2>
        <img
          src={futureDesignPng}
          alt="future design"
          className="about-us__img"
        />
        <p className="about-us__text">
          In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.
        </p>
        <a
          href="https://www.crazybaby.com/"
          target="blank"
          className="about-us__link"
        >
          See more about us
        </a>
      </section>
    </>
  );
};
