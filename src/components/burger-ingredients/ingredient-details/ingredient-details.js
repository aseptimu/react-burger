import styles from "./ingredient-details.module.css"
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

function IngredientDetails() {
    const {id} = useParams();
    const ingredients = useSelector(store => store.ingredients)

    const currentIngredient = ingredients.ingredients.find((ingredient) => ingredient._id === id);

    return (
            <main className={styles.main}>
                <img className={styles.main__image} src={currentIngredient?.image} alt={currentIngredient?.name} width={480} height={240} />
                <h2 className={styles.main__header}>{currentIngredient?.name}</h2>
                <ul className={styles.main__list}>
                    <li className={styles.list__item}>
                        <p className={styles.nutrients}>Калории,ккал</p>
                        <p className={styles.nutrients_amount}>{currentIngredient?.calories}</p>
                    </li>
                    <li>
                        <p className={styles.nutrients}>Белки, г</p>
                        <p className={styles.nutrients_amount}>{currentIngredient?.proteins}</p>
                    </li>
                    <li>
                        <p className={styles.nutrients}>Жиры, г</p>
                        <p className={styles.nutrients_amount}>{currentIngredient?.fat}</p>
                    </li>
                    <li>
                        <p className={styles.nutrients}>Углеводы, г</p>
                        <p className={styles.nutrients_amount}>{currentIngredient?.carbohydrates}</p>
                    </li>
                </ul>
            </main>
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