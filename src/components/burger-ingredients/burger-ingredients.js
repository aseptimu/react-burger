import {useState} from 'react';
import styles from './burger-ingredient.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsGroup from "./ingredients-group/ingredients-group"
import ingredientsPropTypes from "../../utils/prop-types"

function BurgerIngredients({ingredients}) {
    const [currentTab, setCurrentTab] = useState('Булки');

    const handleClick = (value) => {
        setCurrentTab(value);
    }

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

BurgerIngredients.propTypes = {
    ingredients: ingredientsPropTypes
};

export default BurgerIngredients;