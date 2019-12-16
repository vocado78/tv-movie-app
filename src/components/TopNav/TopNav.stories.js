import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import TopNav from './TopNav';
import FirebaseContext from '../Firebase/FirebaseContext';
import FirebaseMock from '../Auth/__mocks__/FirebaseMock';


export default {
  component: TopNav,
  title: 'TopNav',
  decorators: [(story) => <FirebaseContext.Provider value={new FirebaseMock()}><MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter></FirebaseContext.Provider>]
};

export const loggedOut = () => <TopNav showModal={() => {}} isLoggedIn={null} />;
export const loggedIn = () => <TopNav showModal={() => {}} isLoggedIn={{ authUser: { uid: '' } }} />;
