import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import heroImage from './assets/watchingtv.jpg';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { showModal } from '../../actions';
import MODAL_IDS from '../../constants/modalIds';

// FIX: image div should be higher, then i'll look more like orig
export const Hero = (props) => {
  const backgroundStyles = {
    backgroundImage: `linear-gradient(90deg,#14181d 0,rgba(20,24,29,.98556487) .97%,rgba(20,24,29,.9451312) 2.07833333%,rgba(20,24,29,.88300656) 3.29666667%,rgba(20,24,29,.80349854) 4.60166667%,rgba(20,24,29,.71091472) 5.96666667%,rgba(20,24,29,.60956268) 7.365%,rgba(20,24,29,.50375) 8.77166667%,rgba(20,24,29,.39778426) 10.16%,rgba(20,24,29,.29597303) 11.505%,rgba(20,24,29,.20262391) 12.78%,rgba(20,24,29,.12204446) 13.95833333%,rgba(20,24,29,.05854227) 15.01666667%,rgba(20,24,29,.01642493) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.01642493) 84.07166667%,rgba(20,24,29,.05854227) 84.98333333%,rgba(20,24,29,.12204446) 86.04166667%,rgba(20,24,29,.20262391) 87.22%,rgba(20,24,29,.29597303) 88.495%,rgba(20,24,29,.39778426) 89.84%,rgba(20,24,29,.50375) 91.22833333%,rgba(20,24,29,.60956268) 92.635%,rgba(20,24,29,.71091472) 94.03333333%,rgba(20,24,29,.80349854) 95.39833333%,rgba(20,24,29,.88300656) 96.70333333%,rgba(20,24,29,.9451312) 97.92166667%,rgba(20,24,29,.98556487) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.98556487) 23.63703704%,rgba(20,24,29,.9451312) 26.1%,rgba(20,24,29,.88300656) 28.80740741%,rgba(20,24,29,.80349854) 31.70740741%,rgba(20,24,29,.71091472) 34.74074074%,rgba(20,24,29,.60956268) 37.84814815%,rgba(20,24,29,.50375) 40.97407407%,rgba(20,24,29,.39778426) 44.05925926%,rgba(20,24,29,.29597303) 47.04814815%,rgba(20,24,29,.20262391) 49.88148148%,rgba(20,24,29,.12204446) 52.5%,rgba(20,24,29,.05854227) 54.85185185%,rgba(20,24,29,.01642493) 56.87777778%,rgba(20,24,29,0) 58.51851852%), url(${heroImage})`
  };

  return (
    <>
      <div className="flex mx-auto justify-center content-center h-128 w-296 bg-center bg-no-repeat -mt-20" style={backgroundStyles} />
      <Container className="flex-col justify-center text-center -mt-16">
        <h1 className="text-4xl font-serif font-bold tracking-tight leading-tight text-white">
          Track stuff you&apos;ve watched.
          <br />
          Save what you want to watch.
          <br />
          Share with your friends what&apos;s good.
        </h1>
        <Button onClick={() => props.showModal(MODAL_IDS.SIGN_UP)} className="btn btn-primary flex justify-around w-48 mx-auto mt-10 tracking-widest font-light px-4 py-1" label="Get Started">
          <ArrowIcon className="bg-white rounded-full p-1 self-center" title="arrow icon" />
        </Button>
      </Container>
    </>
  );
};

export default connect(null, { showModal })(Hero);

Hero.propTypes = {
  showModal: PropTypes.func.isRequired
};
