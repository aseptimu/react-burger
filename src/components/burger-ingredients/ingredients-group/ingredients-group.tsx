import styles from "./ingredients-group.module.css";
import React, {forwardRef} from "react";
import IngredientItem from "../ingredient-item/ingredient-item";
import {TIngredient} from "../../../utils/types";

export type Counters = {
    [key: string]: number;
};

type TIngredientGroup = {
    allIngredients: Array<TIngredient>;
    type: string;
    typeName: string;
    counters: Counters;
}

const IngredientsGroup = forwardRef<HTMLHeadingElement, TIngredientGroup>(({allIngredients, type, typeName, counters}, ref) => {
    const ingredients = allIngredients?.filter(element => element.type === type).map(element => {
        return (
            <li key={element._id} className={styles.card} draggable={true}>
                <IngredientItem key={element._id} {...element} counters={counters}/>
            </li>
        )
    });

    return (
        <>
            <h2 className='mt-10' ref={ref}>{typeName}</h2>
            <ul className={styles.cards_list}>
                {ingredients ? ingredients : (<p>Ингредиенты отсутствуют</p>)}
            </ul>
        </>
    );
});

export default IngredientsGroup;