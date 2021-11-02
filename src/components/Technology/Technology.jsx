import React from 'react';

import './Technology.scss';

import techologyColumnPng from '../../images/technology-column.png';

export const Technology = () => {
  return (
    <>
      <section className="technology" id="technology">
        <div className="technology__box">
          <h2 className="technology__title">
            technology
          </h2>
        </div>
        <div className="technology__box-img">
          <img
            src={techologyColumnPng}
            alt="technology-column"
            className="technology__img"
          />
        </div>
      </section>
    </>
  );
};
