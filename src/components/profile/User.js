import React from 'react';
import PropTypes from 'prop-types';

export default function User({ src, username, children }) {
  return (
    <div className="flex">
      <div className="w-24 h-24 mr-4 rounded-full">
        <img src={src} alt="User avatar" />
      </div>
      <div className="flex flex-col">
        <h1 title={username}>{username}</h1>
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
