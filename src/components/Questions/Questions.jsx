import React from 'react';

import './Questions.scss';

export const Questions = () => {
  return (
    <>
      <section className="questions" id="get-in-touch">
        <div className="questions__box">
          <h2 className="questions__title">
            DO YOU HAVE ANY QUESTIONS?
          </h2>
          <form
            action=""
            method="GET"
            className="questions__forms"
          >
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="questions__email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message..."
              className="questions__message"
              required
           ></textarea>
            <button className="questions__link">
              SEND
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
