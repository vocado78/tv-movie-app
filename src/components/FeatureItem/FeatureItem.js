import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

// div className: "flex w-1/3 mb-3 rounded shadow"
export default function FeatureItem({ className, text, src, alt }) {
  return (
    <li>
      <div className={className}>
        <img className="mr-5 -mt-1 w-10 h-10" src={src} alt={alt} />
        <p className="w-56 text-gray-700 text-sm">{text}</p>
      </div>
    </li>
  );
}

FeatureItem.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
