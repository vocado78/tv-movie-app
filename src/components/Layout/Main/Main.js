import React from 'react';
import PropTypes from 'prop-types';


export default function Main({ children }) {
  return (
    <div className="main-background">
      {children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired
};
