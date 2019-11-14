import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../../index.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ModalContainer from '../Modal/ModalContainer';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ModalContainer />
        <Header />
        <Route path="/" exact component={HomeScreen} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
