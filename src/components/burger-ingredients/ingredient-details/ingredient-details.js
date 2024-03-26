import Modal from "../../modal/modal";
import styles from "./ingredient-details.module.css"
import PropTypes from "prop-types";
import {useContext} from "react";
import {IngredientDetailsContext} from "../../../services/ingredient-details-context";

function IngredientDetails() {
    const [currentIngredient] = useContext(IngredientDetailsContext);

    return (
        <>
            <Modal text={"Детали ингредиента"} onClose={currentIngredient.onClose}>
                <main className={styles.main}>
                    <img className={styles.main__image} src={currentIngredient.image} alt={currentIngredient.name} width={480} height={240} />
                    <h2 className={styles.main__header}>{currentIngredient.name}</h2>
                    <ul className={styles.main__list}>
                        <li className={styles.list__item}>
                            <p className={styles.nutrients}>Калории,ккал</p>
                            <p className={styles.nutrients_amount}>{currentIngredient.calories}</p>
                        </li>
                        <li>
                            <p className={styles.nutrients}>Белки, г</p>
                            <p className={styles.nutrients_amount}>{currentIngredient.proteins}</p>
                        </li>
                        <li>
                            <p className={styles.nutrients}>Жиры, г</p>
                            <p className={styles.nutrients_amount}>{currentIngredient.fat}</p>
                        </li>
                        <li>
                            <p className={styles.nutrients}>Углеводы, г</p>
                            <p className={styles.nutrients_amount}>{currentIngredient.carbohydrates}</p>
                        </li>
                    </ul>
                </main>
            </Modal>
        </>
    );
}

IngredientDetails.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    onClose: PropTypes.func
};
export default IngredientDetails;