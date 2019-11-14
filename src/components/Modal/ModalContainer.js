/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Modal from './Modal';

// connect to store (clicking signup and login links will dispatch showModal action to update state)
// in MODALS, ensure keys correspond to modal ids (this.props.modalId)
// on closing modal, restore focus back to element that triggered modal

// const MODALS = {
//   SIGNUP: '',
//   LOGIN: ''
// };
const appRoot = document.getElementById('root');

class ModalContainer extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { isVisible: true };

  onMount = () => {
    appRoot.setAttribute('aria-hidden', 'true');
  }

  onUnmount = () => {
    appRoot.removeAttribute('aria-hidden');
  }

  showModal = () => {
    this.setState({ isVisible: true });
  }

  closeModal = () => {
    // restore focus to element that opened modal, manual test
    // const trigger = Array.from(document.querySelectorAll('a')).find((item) => item.pathname === '/signup/');
    this.setState({ isVisible: false });
    // this.props.hideModal();
  }

  onKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  render() {
    // const CurrentModal = this.props.modalId ? MODALS[this.props.modalId] : null;
    const { isVisible } = this.state;

    return (
      <React.Fragment>
        {isVisible
        && (
        <Modal
          title="Testing"
          closeModal={this.closeModal}
          onKeyDown={this.onKeyDown}
          onMount={this.onMount}
          onUnmount={this.onUnmount}
        >
          <p>Quis est id est adipisicing occaecat ex sunt.</p>
        </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default ModalContainer;
