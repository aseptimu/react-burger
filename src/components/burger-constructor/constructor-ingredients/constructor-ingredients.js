import React from 'react';
import constructorStyles from "../burger-constructor.module.css";
import styles from "./constructor-ingredients.module.css"
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function ConstructorIngredients({ingredients}) {
    return (
        ingredients?.length ? (
                ingredients.map((element) => (
                    <li key={element._id} className={`${styles.constructor__list_item_middle}`}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            text={element.name}
                            price={element.price}
                            thumbnail={element.image_mobile}
                            extraClass={constructorStyles.element}/>

                    </li>
                ))
            ) : (
                <li className={`${styles.ingredients__list_item}`}>Выберите начинки</li>
            )
    );
}

export default ConstructorIngredients;