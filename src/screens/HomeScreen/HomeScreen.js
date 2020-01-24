import React from 'react';

import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
// import Container from '../../components/Layout/Container/Container';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';


export default function HomeScreen() {
  return (
    <>
      <Header />
      <div className="bg-lb-home-black">
        <Hero />
        <Features />
      </div>
      <Footer />
    </>
  );
}
