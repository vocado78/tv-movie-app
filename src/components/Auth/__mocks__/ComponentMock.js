import React from 'react';

const Heading = () => <h1>I am a heading.</h1>;

const Body = () => <p>I am the body text.</p>;

export default function ComponentMock() {
  return (
    <div>
      <Heading />
      <Body />
    </div>
  );
}
