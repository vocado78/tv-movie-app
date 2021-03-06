import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../../index.css';
import ROUTES from '../../constants/routes';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen/ResetPasswordScreen';
import FilmsScreen from '../../screens/FilmsScreen/FilmsScreen';
import ModalContainer from '../ModalContainer/ModalContainer';
import { withAuthentication } from '../Auth';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ModalContainer />
        <Route path={ROUTES.HOME} exact component={HomeScreen} />
        <Route path={ROUTES.PROFILE} component={ProfileScreen} />
        <Route path={ROUTES.RESET_PASSWORD} component={ResetPasswordScreen} />
        <Route path={ROUTES.FILMS} component={FilmsScreen} />
      </BrowserRouter>
    </div>
  );
};

export default withAuthentication(App);
