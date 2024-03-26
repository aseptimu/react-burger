import {useContext, useReducer, useState} from 'react';
import styles from './burger-ingredient.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsGroup from "./ingredients-group/ingredients-group"
import {IngredientsContext} from "../../services/ingredients-context";
import {IngredientDetailsContext} from "../../services/ingredient-details-context";

function burgerIngredientReducer(state, action) {
    switch(action.type) {
        case 'set':
            return {...action.value};
        case 'clear':
            return {};
        default:
            throw new Error("Incorrect operation type for burger ingredient")
    }
}

function BurgerIngredients() {
    const ingredients = useContext(IngredientsContext);
    const [currentTab, setCurrentTab] = useState('Булки');
    const currentIngredient = useReducer(burgerIngredientReducer, {})

    const handleClick = (value) => {
        setCurrentTab(value);
    }

    return (
        <section>
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
                <IngredientDetailsContext.Provider value={currentIngredient}>
                    <IngredientsGroup allIngredients={ingredients} type={'bun'} name={"Булки"}/>
                    <IngredientsGroup allIngredients={ingredients} type={'sauce'} name={"Соусы"}/>
                    <IngredientsGroup allIngredients={ingredients} type={'main'} name={"Начинки"}/>
                </IngredientDetailsContext.Provider>
            </section>
        </section>
    )
}

export default BurgerIngredients;