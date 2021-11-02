import React from 'react';

export const FeatureList = ({ featuresData }) => {
  return (
    <>
      {featuresData.map(feature => (
        <div className={`features__box-list features__box-list--${feature.id}`}>
          <h3 className="features__subtitle">
            {feature.subtitle}
          </h3>
          <ul className="features__list">
            {feature.list.map(featureItem => (
              <li className="features__item" key={featureItem.itemId}>
                {featureItem.item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
