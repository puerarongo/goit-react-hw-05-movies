import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal__root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyboard);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyboard);
  }

  handleKeyboard = e => {
    if (e.code === 'Escape') {
      this.props.switch();
    }
  };

  handleClick = e => {
    if (e.currentTarget === e.target) {
      this.props.switch();
    }
  };

  render() {
    const { image } = this.props;

    return createPortal(
      <div className={styles.overlay} onClick={this.handleClick}>
        <div className={styles.modal}>
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={'poster'}
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  switch: PropTypes.func.isRequired,
};

export default Modal;
