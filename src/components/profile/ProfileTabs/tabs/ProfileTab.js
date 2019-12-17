import React from 'react';
import PropTypes from 'prop-types';

export default function ProfileTab({ title, children, className }) {
  const center = typeof children === 'string' ? 'justify-center items-center' : '';

  return (
    <div className={`mt-8 ${className}`}>
      <h1 className="text-sm uppercase border-b border-solid border-gray-500 mb-4">{title}</h1>
      <div className={`flex flex-col mb-4 border border-solid border-gray-300 rounded p-8 text-sm ${center}`}>
        {children}
      </div>
    </div>
  );
}

ProfileTab.defaultProps = {
  className: ''
};

ProfileTab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
