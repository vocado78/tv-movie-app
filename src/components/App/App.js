import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../../index.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import SignupForm from '../SignupForm/SignupForm';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/signup/" exact component={SignupForm} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
