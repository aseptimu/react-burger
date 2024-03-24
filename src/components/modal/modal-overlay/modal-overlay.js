import styles from './modal-overlay.module.css'
import PropTypes from "prop-types";

function ModalOverlay({onClick}) {
    ModalOverlay.propTypes = {
        onClick: PropTypes.func.isRequired,
    };
    return (
        <div className={styles.overlay} onClick={onClick}>
        </div>
    )
}

export default ModalOverlay;