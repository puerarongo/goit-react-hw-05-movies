import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal__root');

const Modal = ({ image, switchFunc }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyboard);

    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  });

  const handleKeyboard = e => {
    if (e.code === 'Escape') {
      switchFunc();
    }
  };

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      switchFunc();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleClick}>
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
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  switchFunc: PropTypes.func.isRequired,
};

export default Modal;
