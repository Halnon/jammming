import React from 'react';
import Styles from './Modal.module.css';

export default function Modal({ message, onClose }) {
  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modalContent}>
        <h2>{message}</h2>
        <button onClick={onClose} className={Styles.closeButton}>Close</button>
      </div>
    </div>
  );
}
