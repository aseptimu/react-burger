import styles from "./order-details.module.css"
import logo from "../../../images/done.svg"


function OrderDetails({number}) {
    return (
        <>
            <div className={styles.modal}>
                <h2 className={styles.order_id_title}>{number}</h2>
                <p className={styles.order_id_description}>идентификатор заказа</p>
                <img src={logo} alt={"done status icon"}/>
                <p className={styles.order_preparation_status}>Ваш заказ начали готовить<br/><span
                    className={styles.order_waiting_instructions}>Дождитесь готовности на орбитальной станции</span>
                </p>
            </div>
        </>
    )
}

export default OrderDetails;