import React, {useCallback} from 'react';
import ConstructorIngredient from "./constructor-ingredient/constructor-ingredient";
import {moveIngredient} from "../../../services/constructor-slice";
import {useDispatch} from "react-redux";
import styles from "./constructor-ingredients.module.css"

function ConstructorIngredients({ingredients}) {
    const dispatch = useDispatch()
    const handleMoveIngredient = useCallback((dragIndex, hoverIndex) => {
        dispatch(moveIngredient({dragIndex, hoverIndex}));
    }, [dispatch])
    return (
        ingredients?.length ? (
                ingredients.map((element, index) => (
                    <li key={element.nanoid} draggable={true} className={styles.constructor__list_item}>
                        <ConstructorIngredient element={element} index={index} handleMoveIngredient={handleMoveIngredient}></ConstructorIngredient>
                    </li>
                ))
            ) : (
                <li>
                    <ConstructorIngredient  />
                </li>
            )
    );
}

export default ConstructorIngredients;