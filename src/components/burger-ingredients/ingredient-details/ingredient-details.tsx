import styles from "./ingredient-details.module.css"
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../services";

function IngredientDetails() {
    const {id} = useParams();
    const ingredients = useAppSelector(store => store.ingredients)

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

export default IngredientDetails;