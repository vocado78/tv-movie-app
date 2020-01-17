import React from 'react';

import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Container from '../../components/Container/Container';


export default function HomeScreen() {
  return (
    <div>
      <Hero />
      <Container>
        <Features />
      </Container>
    </div>
  );
}
