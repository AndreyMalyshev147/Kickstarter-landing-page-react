import React, { useState, useEffect, useRef } from 'react';

import './Booklet.scss';

import { bookletData } from './bookletData';
import { BookletCards } from '../BookletCards/BookletCards';

export const Booklet = () => {
  const totalBooklets = 3;

  const [currentBooklet, setCurrentBooklet] = useState(0);
  const ref = useRef(null);

  const prevBooklet = () => {
    if (currentBooklet === 0) {
      return;
    } else {
      setCurrentBooklet(currentBooklet - 1);
    };
  };
  
  const nextBooklet = () => {
    if (currentBooklet >= totalBooklets) {
      return;
    } else {
      setCurrentBooklet(currentBooklet + 1)
    };
  };

  useEffect(() => {
    ref.current.style.transform = `translateX(-${currentBooklet}00%)`
  }, [currentBooklet])

  return (
    <>
      <section className="booklet">
        <div className="booklet__wrapper">
          <div className={`booklet__card`} ref={ref}>
            {bookletData.map((item) => (
              <BookletCards key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="booklet__toggler">
          <button
            type="button"
            className="booklet__button booklet__button--prev"
            onClick={prevBooklet}
          ></button>
          <button
            type="button"
            className="booklet__button booklet__button--next"
            onClick={nextBooklet}
          ></button>
        </div>
        <div className="booklet__toggler-number">
          <div className="booklet__toggler-number-box">
            <span className="booklet__toggler-number-count booklet__toggler-number-count--0">
              0
            </span>
            <span className="booklet__toggler-number-count booklet__toggler-number-count--1">
              {currentBooklet + 1}
            </span>
            <span className="booklet__toggler-number-count booklet__toggler-number-count--slash">
              /
            </span>
            <span className="booklet__toggler-number-count booklet__toggler-number-count--04">
              04
            </span>
          </div>
        </div>
        <div className="booklet__video-box">
          <iframe
            className="booklet__video"
            src="https://www.youtube.com/embed/VjVSYsMzmEU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
         ></iframe>
        </div>
      </section>
    </>
  );
};
