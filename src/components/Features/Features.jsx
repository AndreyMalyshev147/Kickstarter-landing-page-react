import React, { useState, useEffect, useRef }  from 'react';

import './Features.scss';

import featuresColumnJpg from '../../images/features-column.jpg';

import { featuresData } from './featuresData';
import { FeatureList } from '../FeatureList/FeatureList';

export const Features = () => {
  const totalFeatures = 2;

  const [currentFeature, setCurrentFeature] = useState(0);
  const ref = useRef(null);

  const prevFeature = () => {
    if (currentFeature === 0) {
      return;
    } else {
      setCurrentFeature(currentFeature - 1);
    };
  };
  
  const nextFeature = () => {
    if (currentFeature >= totalFeatures) {
      return;
    } else {
      setCurrentFeature(currentFeature + 1)
    };
  };

  useEffect(() => {
    ref.current.style.transform = `translateX(-${currentFeature}00%)`
  }, [currentFeature])
  
  return (
    <>
      <section className="features" id="features">
        <h2 className="features__title">
          Features
        </h2>
        <div className="features__wrapper">
          <div className="features__box" ref={ref}>
            <FeatureList featuresData={featuresData} />
          </div>
        </div>
        <div className="features__toggler">
          <button
            type="button"
            className="features__button features__button--prev"
            onClick={prevFeature}
          ></button>
          <button
            type="button"
            className="features__button features__button--next"
            onClick={nextFeature}
          ></button>
        </div>
        <div className="features__toggler-number">
          <div className="features__toggler-number-box">
            <span className="features__toggler-number-count features__toggler-number-count--0">
              0
            </span>
            <span className="features__toggler-number-count features__toggler-number-count--1">
              {currentFeature + 1}
            </span>
            <span className="features__toggler-number-count features__toggler-number-count--slash">
              /
            </span>
            <span className="features__toggler-number-count features__toggler-number-count--03">
              03
            </span>
          </div>
        </div>
        <div className="features__background"></div>
        <div className="features__box-img">
          <img
            src={featuresColumnJpg}
            alt="CrazyBaby"
            className="features__img"
          />
        </div>
      </section>
    </>
  );
};
