import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
