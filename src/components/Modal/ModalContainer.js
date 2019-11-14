import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from './Modal';
import { showModal, hideModal } from '../../actions';


const appRoot = document.getElementById('root');

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
  // TODO: create signup and login specific modals to render as CurrentModal or maybe just use a prop
  // for modal content, and pass signup/login form as prop? avoid prop drilling

  render() {
    const CurrentModal = this.props.modal ? Modal : null;

    return (
      <>
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

ModalContainer.defaultProps = {
  modal: null
};

ModalContainer.propTypes = {
  modal: PropTypes.string,
  hideModal: PropTypes.func.isRequired
};
