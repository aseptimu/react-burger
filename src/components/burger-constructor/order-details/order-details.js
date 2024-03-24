import Modal from "../../modal/modal";

import styles from "./order-details.module.css"
import logo from "../../../images/done.svg"
import PropTypes from "prop-types";


function OrderDetails({onClose}) {
    OrderDetails.propTypes = {
        onClose: PropTypes.func.isRequired,
    };
    return (
        <>
            <Modal onClose={onClose}>
                <div className={styles.modal}>
                    <h2 className={styles.order_id_title}>034536</h2>
                    <p className={styles.order_id_description}>идентификатор заказа</p>
                    <img src={logo} alt={"done status icon"}/>
                    <p className={styles.order_preparation_status}>Ваш заказ начали готовить<br/><span
                        className={styles.order_waiting_instructions}>Дождитесь готовности на орбитальной станции</span>
                    </p>
                </div>
            </Modal>

        </>
    )
}

export default OrderDetails;