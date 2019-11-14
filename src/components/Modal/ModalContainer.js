/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from './Modal';
import { showModal, hideModal } from '../../actions';

// connect to store (clicking signup and login links will dispatch showModal action to update state)
// in MODALS, ensure keys correspond to modal ids (this.props.modalId)
// on closing modal, restore focus back to element that triggered modal

// const MODALS = {
//   SIGNUP: '',
//   LOGIN: ''
// };
const appRoot = document.getElementById('root');

class ModalContainer extends Component {
  onMount = () => {
    appRoot.setAttribute('aria-hidden', 'true');
  }

  onUnmount = () => {
    appRoot.removeAttribute('aria-hidden');
  }

  closeModal = () => {
    // restore focus to element that opened modal, manual test
    // const trigger = Array.from(document.querySelectorAll('a')).find((item) => item.pathname === '/signup/');
    this.props.hideModal();
  }

  onKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  render() {
    const CurrentModal = this.props.modal ? Modal : null;

    return (
      <React.Fragment>
        {
          CurrentModal
          && (
            <CurrentModal
              title="Testing"
              closeModal={this.closeModal}
              onKeyDown={this.onKeyDown}
              onMount={this.onMount}
              onUnmount={this.onUnmount}
            >
              <p>Quis est id est adipisicing occaecat ex sunt.</p>
            </CurrentModal>
          )
        }
      </React.Fragment>
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
