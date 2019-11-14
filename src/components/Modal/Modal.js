/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';


export default class Modal extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  componentWillUnmount() {
    this.props.onUnmount();
  }

  render() {
    const { closeModal, onKeyDown, title, children } = this.props;

    return ReactDOM.createPortal(
      <FocusTrap>
        <div
          onClick={closeModal}
          onKeyDown={onKeyDown}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg p-6 bg-white rounded"
            role="dialog"
            tabIndex="-1"
            aria-labelledby="modal-title"
          >
            <button
              onClick={closeModal}
              className="float-right text-3xl -mt-4 hover:text-gray-500"
              type="button"
              aria-label={`Close ${title} dialog`}
            >
              &times;
            </button>
            <h2 className="text-xl mb-3" id="modal-title">{title}</h2>
            {children}
          </div>
        </div>
      </FocusTrap>,
      document.getElementById('modal')
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired
};
