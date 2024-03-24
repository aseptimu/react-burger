import React from 'react';
import styles from './burger-ingredient.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsGroup from "./ingredients-group/ingredients-group"
import PropTypes from 'prop-types';

function BurgerIngredients({ingredients}) {
    const [currentTab, setCurrentTab] = React.useState('Булки');

    const handleClick = (value) => {
        setCurrentTab(value);
    }

    const ingredientPropTypes = PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired
    });
    const ingredientsPropTypes = PropTypes.arrayOf(ingredientPropTypes).isRequired;

    BurgerIngredients.propTypes = {
        ingredients: ingredientsPropTypes
    };

    return (
        <section className={"mr-10"}>
            <h1 className={styles.main__header}>Соберите бургер</h1>
            <div className={styles.ingredients__wrapper}>
                <Tab value="Булки" active={currentTab === 'Булки'} onClick={() => handleClick("Булки")}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={currentTab === 'Соусы'} onClick={() => handleClick("Соусы")}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={currentTab === 'Начинки'} onClick={() => handleClick("Начинки")}>
                    Начинки
                </Tab>
            </div>
            <section className={styles.ingredients__section}>
                <IngredientsGroup allIngredients={ingredients} type={'bun'} name={"Булки"}/>
                <IngredientsGroup allIngredients={ingredients} type={'sauce'} name={"Соусы"}/>
                <IngredientsGroup allIngredients={ingredients} type={'main'} name={"Начинки"}/>
            </section>
        </section>
    )
}

export default BurgerIngredients;