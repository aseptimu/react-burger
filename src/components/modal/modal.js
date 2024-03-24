import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css';
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");
function Modal({text, onClose, children}) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    Modal.propTypes = {
        text: PropTypes.string,
        onClose: PropTypes.func.isRequired,
        children: PropTypes.node
    };

    return ReactDOM.createPortal((
        <div className={styles.modal}>
            <header className={styles.header}>
                <h2 className={styles.header__title}>{text}</h2>
                <CloseIcon type="primary" onClick={onClose}/>
            </header>
            {children}
        </div>
    ), modalRoot);
}

export default Modal;