import React from 'react';


export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center h-32 bg-gray-200 text-gray-500 text-sm">
      <p>
        Made with&nbsp;
        <span role="img" aria-label="mug of tea">&#127861;</span>
        by vocado78.
      </p>
      <p>
        Photo by JESHOOTS.COM on&nbsp;
        <a className="underline" href="https://unsplash.com/photos/PpYOQgsZDM4">Unsplash.</a>
      </p>
    </footer>
  );
}
