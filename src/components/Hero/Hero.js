import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from './assets/arrow.svg';

export default function Hero() {
  // fix path to image, image in public to work with stories
  const backgroundStyles = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/watchingtv.jpg')"
  };

  return (
    <div className="flex justify-center content-center h-168 bg-center bg-no-repeat" style={backgroundStyles}>
      <div className="flex flex-col justify-center text-center w-240">
        <h1 className="text-4xl font-bold leading-tight text-gray-300">
          Save shows and movies you want to watch.
          <br />
          Track what you have watched.
          <br />
          Share with your friends what is worth watching.
        </h1>
        <Link to="/signup" className="flex justify-around w-48 mx-auto mt-10 py-1 border-b border-transparent hover:border-white">
          <p className="uppercase tracking-wide text-xl text-white">Get started</p>
          <ArrowIcon className="bg-white rounded-full p-1 self-center" />
        </Link>
      </div>
    </div>
  );
}

// Photo by JESHOOTS.COM on Unsplash: https://unsplash.com/photos/PpYOQgsZDM4
// className="p-2 w-4 bg-gray-500 rounded-full ml-2 text-white"
