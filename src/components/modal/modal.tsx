import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css';
import {FC, useEffect} from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./modal-overlay/modal-overlay";

type TModalType = {
    text?: string;
    onClose: () => void;
    children: React.ReactNode;
}

const modalRoot = document.getElementById("react-modals")!;
const Modal: FC<TModalType> = ({text, onClose, children}) => {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                onClose();
            }
        }
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return ReactDOM.createPortal((
        <>
            <ModalOverlay onClick={onClose}/>
            <div className={styles.modal}>
                <header className={styles.header}>
                    <h2 className={styles.header__title}>{text}</h2>
                    <CloseIcon type="primary" onClick={onClose}/>
                </header>
                {children}
            </div>
        </>
    ), modalRoot);
}

export default Modal;