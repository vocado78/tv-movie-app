import React from 'react';


export default function Hero() {
  // fix path to image, image in public to work with stories
  const backgroundStyles = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/watchingtv.jpg')"
  };

  return (
    <div className="flex justify-center content-center h-168 bg-center bg-no-repeat" style={backgroundStyles}>
      <div className="flex flex-col justify-center text-center w-240 text-white">
        <h1 className="text-4xl font-bold">Find your next favourite tv-show or movie.</h1>
        <p className="text-xl pt-4">
          Save shows and movies you want to watch. Track what you have watched.
          <br />
          Share with your friends what is worth watching.
        </p>
        <button type="button">Click me</button>
      </div>
    </div>
  );
}

// Photo by JESHOOTS.COM on Unsplash: https://unsplash.com/photos/PpYOQgsZDM4
