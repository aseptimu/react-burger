import styles from './modal-overlay.module.css'

function ModalOverlay({onClick}: {onClick: () => void}) {
    return (
        <div className={styles.overlay} onClick={onClick}>
        </div>
    )
}

export default ModalOverlay;