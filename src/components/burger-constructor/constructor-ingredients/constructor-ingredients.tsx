import React, {ReactElement, useCallback} from 'react';
import ConstructorIngredient from "./constructor-ingredient/constructor-ingredient";
import {moveIngredient} from "../../../services/constructor-slice";
import styles from "./constructor-ingredients.module.css"
import {useAppDispatch} from "../../../services";
import {TIngredients} from "../../../utils/types";

function ConstructorIngredients({ingredients}: TIngredients): ReactElement | null {
    const dispatch = useAppDispatch();
    const handleMoveIngredient = useCallback((dragIndex: number, hoverIndex: number) => {
        dispatch(moveIngredient({dragIndex, hoverIndex}));
    }, [dispatch]);

    if (!ingredients.length) {
        return <>
            <li>
                <ConstructorIngredient element={undefined} index={undefined} handleMoveIngredient={undefined}/>
            </li>
        </>;
    }

    return (
        <>
            {ingredients.map((element, index) => (
                <li key={element.nanoid} draggable={true} className={styles.constructor__list_item}>
                    <ConstructorIngredient element={element} index={index} handleMoveIngredient={handleMoveIngredient}/>
                </li>
            ))}
        </>
    );
}

export default ConstructorIngredients;
