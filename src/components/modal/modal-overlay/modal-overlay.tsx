import styles from './modal-overlay.module.css'
import PropTypes from "prop-types";

function ModalOverlay({onClick}: {onClick: () => void}) {
    return (
        <div className={styles.overlay} onClick={onClick}>
        </div>
    )
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;