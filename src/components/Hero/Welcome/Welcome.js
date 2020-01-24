import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import Button from '../../Button/Button';
import { showModal } from '../../../actions';
import MODAL_IDS from '../../../constants/modalIds';
import Heading from './Heading/Heading';

const Welcome = (props) => {
  return (
    <div className="flex w-240 my-0 mx-auto flex-col justify-end text-center pb-8">
      <Heading />
      <Button onClick={() => props.showModal(MODAL_IDS.SIGN_UP)} className="btn btn-primary flex justify-around w-48 mx-auto mt-10 tracking-widest font-light px-4 py-1" label="Get Started">
        <ArrowIcon className="bg-white rounded-full p-1 self-center" title="arrow icon" />
      </Button>
    </div>
  );
};

export default connect(null, { showModal })(Welcome);

Welcome.propTypes = {
  showModal: PropTypes.func.isRequired
};
