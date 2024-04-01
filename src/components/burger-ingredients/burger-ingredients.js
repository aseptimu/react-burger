import {useRef, useState} from 'react';
import styles from './burger-ingredient.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsGroup from "./ingredients-group/ingredients-group"
import {useSelector} from "react-redux";

function BurgerIngredients() {
    const {ingredients} = useSelector(store => store.ingredients);
    const [currentTab, setCurrentTab] = useState('Булки');

    const handleClick = (value) => {
        setCurrentTab(value);
    }
    const ingredientRefs = {
        bun: useRef(null),
        sauce: useRef(null),
        main: useRef(null)
    }


    const handleScroll = (e) => {

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
            <section className={styles.ingredients__section} onScroll={handleScroll}>
                <IngredientsGroup allIngredients={ingredients} type={'bun'} name={"Булки"} ref={ingredientRefs.bun}/>
                <IngredientsGroup allIngredients={ingredients} type={'sauce'} name={"Соусы"} ref={ingredientRefs.sauce}/>
                <IngredientsGroup allIngredients={ingredients} type={'main'} name={"Начинки"} ref={ingredientRefs.main}/>
            </section>
        </section>
    )
}

export default BurgerIngredients;