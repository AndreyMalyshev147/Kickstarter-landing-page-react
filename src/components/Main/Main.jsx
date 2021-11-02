import React from 'react';

import { Booklet } from '../Booklet/Booklet';
import { AboutUs } from '../AboutUs/AboutUs';
import { Technology } from '../Technology/Technology';
import { Testimonials } from '../Testimonials/Testimonials';
import { Features } from '../Features/Features';
import { Questions } from '../Questions/Questions';

export const Main = () => {
  return (
    <>
      <main className="main-box">
        <Booklet />
        <AboutUs />
        <Technology />
        <Testimonials />
        <Features />
        <Questions />
      </main>
    </>
  );
};
