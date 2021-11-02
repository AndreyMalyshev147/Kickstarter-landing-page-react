import React from 'react';

export const BookletCards = ({ id, title, text }) => {
  return (
    <>
      <div className={`booklet__box booklet__box--${id}`} key={id} >
        <div className={`booklet__img booklet__img--${id}`}></div>
        <h3 className={`booklet__title booklet__title--${id}`}>
          {title}
        </h3>
        <p className="booklet__text">
          {text}
        </p>
      </div>
    </>
  );
};
