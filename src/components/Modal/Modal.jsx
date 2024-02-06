import { useEffect } from "react";
import { createPortal } from "react-dom"
import css from 'components/Modal/modal.module.css'

const modalRoot = document.querySelector('#modal-root')

const Modal = ({ onClose, largeImageURL }) => {


  useEffect(() => {
    const closeModal = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', closeModal)

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [onClose]);

  const backdropClose = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  }

  return createPortal(<div className={css.Overlay} onClick={backdropClose}>
    <div className={css.Modal}>
      <img src={largeImageURL} alt="test" />
    </div>
  </div>,
    modalRoot,
  );
}

export default Modal;