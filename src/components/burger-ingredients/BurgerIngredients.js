import React from 'react';
import styles from './burger-ingredient.module.css'
import BurgerElement from "./burger-element/BurgerElement";

class BurgerIngredients extends React.Component {
    render() {
        return (
            <>
                <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
                <ul className={`mt-5 mb-10 ${styles.menu__list}`}>
                    <li>
                        <a href="#">Булки</a>
                    </li>
                    <li>
                        <a href="#">Соусы</a>
                    </li>
                    <li>
                        <a href="#">Начинки</a>
                    </li>
                </ul>
                <h2 className='mt-10'>Булки</h2>
                <BurgerElement />
                <h2 className=''>Соусы</h2>
                <h2 className=''>Начинки</h2>
            </>
        )
    }
}

export default BurgerIngredients;