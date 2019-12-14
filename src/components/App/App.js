import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../../index.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import ResetPasswordScreen from '../../screens/ResetPassword/ResetPasswordScreen';
import ModalContainer from '../Modal/ModalContainer';
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
