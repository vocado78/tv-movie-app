import React from 'react';

import Container from '../Container/Container';
import TopNav from '../TopNav/TopNav';


export default function Header() {
  const backgroundStyles = {
    backgroundColor: 'rgba(0,0,0,0.25)'
  };
  return (
    <header className="h-16 relative z-10" style={backgroundStyles}>
      <Container className="h-full items-center justify-between">
        <div className="mr-20 px-3 py-1 text-gray-400">LOGO</div>
        <TopNav isLoggedIn={false} />
      </Container>
    </header>
  );
}
