import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import heroImage from './assets/watchingtv.jpg';
import Container from '../Container/Container';
import { showModal } from '../../actions';
import MODAL_IDS from '../Modal/modalIds';


const Hero = (props) => {
  const backgroundStyles = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`
  };

  return (
    <div className="flex justify-center content-center h-168 bg-center bg-no-repeat -mt-16" style={backgroundStyles}>
      <Container className="flex-col justify-center text-center">
        <h1 className="text-4xl font-bold leading-tight text-gray-400">
          Save shows and movies you want to watch.
          <br />
          Track what you have watched.
          <br />
          Share with your friends what is worth watching.
        </h1>
        <Link onClick={() => props.showModal(MODAL_IDS.SIGN_UP)} to="/" className="flex justify-around w-48 mx-auto mt-10 py-1 border-b border-transparent hover:border-white">
          <p className="uppercase tracking-wide text-xl text-white">Get started</p>
          <ArrowIcon className="bg-white rounded-full p-1 self-center" title="arrow icon" />
        </Link>
      </Container>
    </div>
  );
};

export default connect(null, { showModal })(Hero);

Hero.propTypes = {
  showModal: PropTypes.func.isRequired
};
