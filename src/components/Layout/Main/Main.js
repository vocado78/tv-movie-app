import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container/Container';


export default function Main({ children }) {
  const mainBackground = {
    backgroundColor: '#14181c',
    backgroundImage: 'linear-gradient(180deg, #1d242c, #13171c)'
  };

  return (
    <div className="py-8" style={mainBackground}>
      <Container className="flex-col">
        {children}
      </Container>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired
};

// HOME:
// Header
// Hero
// Main content with features
// Footer

// Other screens:
// Header
// Main: this is where the screen goes
// Footer
