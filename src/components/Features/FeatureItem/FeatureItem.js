import React from 'react';
import PropTypes from 'prop-types';


export default function FeatureItem({ className, text, src, alt }) {
  return (
    <li>
      <div className={className}>
        <img className="mr-5 -mt-1 w-10 h-10" src={require(`${src}`)} alt={alt} />
        <p className="w-56 text-blue-100 tracking-wide text-sm">{text}</p>
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
