import styles from "./ingredients-group.module.css";
import React from "react";
import IngredientItem from "../ingredient-item/ingredient-item";
import PropTypes from "prop-types";


function IngredientsGroup({allIngredients, type, name}) {
    const ingredients = allIngredients?.filter(element => element.type === type).map(element => {
        return (
            <li key={element._id} className={styles.card}>
                <IngredientItem key={element._id} {...element}/>
            </li>
        )
    });

    IngredientsGroup.propTypes = {
        allIngredients: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            proteins: PropTypes.number.isRequired,
            fat: PropTypes.number.isRequired,
            carbohydrates: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            image_mobile: PropTypes.string.isRequired,
            image_large: PropTypes.string.isRequired,
            __v: PropTypes.number.isRequired
        })).isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    };

    return (
        <>
            <h2 id={type} className='mt-10'>{name}</h2>
            <ul className={styles.cards_list}>
                {ingredients ? ingredients : (<p>Ингредиенты отсутствуют</p>)}
            </ul>
        </>
    )
}

export default IngredientsGroup;