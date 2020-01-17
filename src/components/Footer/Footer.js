import React from 'react';
import Container from '../Container/Container';


export default function Footer() {
  return (
    <footer className="py-8 bg-gray-800 text-gray-600 text-xs">
      <Container className="flex items-center justify-center py-4">
        <p>
          Made with&nbsp;
          <span role="img" aria-label="mug of tea">&#127861;</span>
          by vocado78.
        </p>
        <p>
          &nbsp;Photo by JESHOOTS.COM on&nbsp;
          <a className="underline" href="https://unsplash.com/photos/PpYOQgsZDM4">Unsplash</a>
          .
        </p>
      </Container>
    </footer>
  );
}
