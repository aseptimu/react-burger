import Modal from "../../modal/modal";
import styles from "./ingredient-details.module.css"
import PropTypes from "prop-types";

function IngredientDetails({image, name, calories, proteins, fat, carbohydrates, onClose}) {
    IngredientDetails.propTypes = {
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        onClose: PropTypes.func.isRequired
    };
    return (
        <>
            <Modal text={"Детали ингредиента"} onClose={onClose}>
                <main className={styles.main}>
                    <img className={styles.main__image} src={image} alt={name} width={480} height={240} />
                    <h2 className={styles.main__header}>{name}</h2>
                    <ul className={styles.main__list}>
                        <li className={styles.list__item}>
                            <p className={styles.nutrients}>Калории,ккал</p>
                            <p className={styles.nutrients_amount}>{calories}</p>
                        </li>
                        <li>
                            <p className={styles.nutrients}>Белки, г</p>
                            <p className={styles.nutrients_amount}>{proteins}</p>
                        </li>
                        <li>
                            <p className={styles.nutrients}>Жиры, г</p>
                            <p className={styles.nutrients_amount}>{fat}</p>
                        </li>
                        <li>
                            <p className={styles.nutrients}>Углеводы, г</p>
                            <p className={styles.nutrients_amount}>{carbohydrates}</p>
                        </li>
                    </ul>
                </main>
            </Modal>
        </>
    );
}

export default IngredientDetails;