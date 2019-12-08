import React from 'react';
import PropTypes from 'prop-types';

export default function User({ src, username, children }) {
  return (
    <div className="flex">
      <div className="w-32 h-32 mr-5 rounded-full border border-solid border-gray-500">
        <img className="w-32 h-32 rounded-full" src={src} alt="User avatar" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-lg font-bold mb-3" title={username}>{username}</h1>
        {children}
      </div>
    </div>
  );
}

User.defaultProps = {
  children: null
};

User.propTypes = {
  src: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  children: PropTypes.node
};
