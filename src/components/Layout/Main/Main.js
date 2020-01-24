import React from 'react';
import PropTypes from 'prop-types';


export default function Main({ children }) {
  const mainBackground = {
    backgroundColor: '#14181c',
    backgroundImage: 'linear-gradient(180deg, #1d242c, #13171c)'
  };

  return (
    <div className="py-8" style={mainBackground}>
      {children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired
};
