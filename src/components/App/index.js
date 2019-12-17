import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../../index.css';
import Header from '../Header';
import Footer from '../Footer';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import { ModalContainer } from '../Modal';
import { withAuthentication } from '../Auth';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ModalContainer />
        <Header />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/reset-password" component={ResetPasswordScreen} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default withAuthentication(App);
