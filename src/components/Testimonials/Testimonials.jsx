import React from 'react';

import './Testimonials.scss';

import quotesSvg from '../../images/quotes.svg';
import garretMartinJpg from '../../images/garret-martin.jpg';

export const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div className="testimonials__box">
          <img
            src={quotesSvg}
            alt="quotes"
            className="testimonials__img"
          />
          <p className="testimonials__citation">
            “It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.”
          </p>
          <img
            src={garretMartinJpg}
            alt="Garrett Martin"
            className="testimonials__photo"
          />
          <p className="testimonials__name">
            Garrett Martin
          </p>
          <p className="testimonials__position">
            Creative Director
          </p>
        </div>
      </section>
    </>
  );
};
