import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import TopNav from './TopNav';
import FirebaseContext from '../../../Firebase/FirebaseContext';


const firebaseMock = {
  doSignOut: () => {}
};

export default {
  component: TopNav,
  title: 'TopNav',
  decorators: [(story) => <FirebaseContext.Provider value={firebaseMock}><MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter></FirebaseContext.Provider>]
};

export const loggedOut = () => <TopNav showModal={() => {}} isLoggedIn={null} />;
export const loggedIn = () => <TopNav showModal={() => {}} isLoggedIn={{ authUser: { uid: '' } }} />;
