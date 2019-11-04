import React from 'react';

import Container from '../Container/Container';
import TopNav from '../TopNav/TopNav';


export default function Header() {
  return (
    <header className="h-16 bg-gray-200">
      <Container className="h-full items-center">
        <div className="mr-20 px-3 py-1">LOGO</div>
        <TopNav isLoggedIn={false} />
      </Container>
    </header>
  );
}
