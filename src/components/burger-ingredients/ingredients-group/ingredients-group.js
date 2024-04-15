import styles from "./ingredients-group.module.css";
import React, {forwardRef} from "react";
import IngredientItem from "../ingredient-item/ingredient-item";
import PropTypes from "prop-types";
import ingredientsPropTypes from "../../../utils/prop-types";


const IngredientsGroup = forwardRef(({allIngredients, type, name, counters}, ref) => {
    const ingredients = allIngredients?.filter(element => element.type === type).map(element => {
        return (
            <li key={element._id} className={styles.card} draggable={true}>
                <IngredientItem key={element._id} {...element} counters={counters}/>
            </li>
        )
    });

    return (
        <>
            <h2 className='mt-10' ref={ref}>{name}</h2>
            <ul className={styles.cards_list}>
                {ingredients ? ingredients : (<p>Ингредиенты отсутствуют</p>)}
            </ul>
        </>
    );
});

IngredientsGroup.propTypes = {
    allIngredients: ingredientsPropTypes,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    counters: PropTypes.object.isRequired
};

export default IngredientsGroup;