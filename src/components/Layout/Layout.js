import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Container from './Container/Container';


export default function Layout({ children, className }) {
  return (
    <>
      <Header />
      <Main>
        <Container className={`flex-col ${className}`}>
          {children}
        </Container>
      </Main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  className: ''
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
