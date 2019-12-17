import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../../index.css';
import ROUTES from '../../constants/routes';
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
        <Route path={ROUTES.HOME} exact component={HomeScreen} />
        <Route path={ROUTES.PROFILE} component={ProfileScreen} />
        <Route path={ROUTES.RESET_PASSWORD} component={ResetPasswordScreen} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default withAuthentication(App);
