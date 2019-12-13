import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { showModal, hideModal } from '../../actions';
import Signup from '../Signup/Signup';


const appRoot = document.getElementById('root');
const modalConfig = {
  SIGN_UP: Signup,
  LOG_IN: ''
};

class ModalContainer extends Component {
  onMount = () => {
    appRoot.setAttribute('aria-hidden', 'true');
  }

  onUnmount = () => {
    appRoot.removeAttribute('aria-hidden');
  }

  closeModal = () => {
    this.props.hideModal();
  }

  onKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  render() {
    const CurrentModal = this.props.modal ? modalConfig[this.props.modal] : null;

    return (
      <>
        {
          CurrentModal
          && (
            <CurrentModal
              closeModal={this.closeModal}
              onKeyDown={this.onKeyDown}
              onMount={this.onMount}
              onUnmount={this.onUnmount}
            />
          )
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(
  mapStateToProps,
  { showModal, hideModal }
)(ModalContainer);

ModalContainer.propTypes = {
  modal: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired
};
