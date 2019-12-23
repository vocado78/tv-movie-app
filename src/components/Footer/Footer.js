import React from 'react';
import Container from '../Container/Container';


export default function Footer() {
  return (
    <footer className="h-32 text-gray-500 text-sm">
      <Container className="flex-col items-center justify-center h-full border-t border-solid border-gray-300">
        <p>
          Made with&nbsp;
          <span role="img" aria-label="mug of tea">&#127861;</span>
          by vocado78.
        </p>
        <p>
          Photo by JESHOOTS.COM on&nbsp;
          <a className="underline" href="https://unsplash.com/photos/PpYOQgsZDM4">Unsplash.</a>
        </p>
      </Container>
    </footer>
  );
}
