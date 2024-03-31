import React from 'react';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-bun.module.css";
import constructorStyles from "../burger-constructor.module.css";

function ConstructorBun({bun, type}) {
    return (
        bun ? (
            <div className={`${styles.constructor__bun}`}>
                <ConstructorElement
                    type={type}
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image_mobile}
                    extraClass={constructorStyles.element}/>
            </div>
        ) : (
            <p className={`${styles.constructor__bun_empty}`}>Выберите булки</p>
        )
    );
}

export default ConstructorBun;