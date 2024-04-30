import {useMemo, useRef, useState} from 'react';
import styles from './burger-ingredient.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsGroup from "./ingredients-group/ingredients-group"
import {useSelector} from "react-redux";
import {useAppSelector} from "../../services";
import {TIngredient} from "../../utils/types";

function BurgerIngredients() {
    const {ingredients} = useAppSelector(store => store.ingredients);
    const burgerConstructor = useAppSelector(store => store.burgerConstructor);
    const [currentTab, setActiveTab] = useState('bun');
    const containerRef = useRef(null);
    const ingredientRefs = {
        bun: useRef(null),
        sauce: useRef(null),
        main: useRef(null)
    }

    const ingredientsCounter = useMemo(() => {
        const {bun, ingredients} = burgerConstructor;
        const counters: {[key: string]: number} = {};
        ingredients.forEach((ingredient: TIngredient) => {
            if (!counters[ingredient._id]) counters[ingredient._id] = 0;
            counters[ingredient._id]++;
        })
        if (bun) counters[bun._id] = 2;
        return counters;
    }, [burgerConstructor])


    const handleClick = (value) => {
        setActiveTab(value);
        const ref = ingredientRefs[value];
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const handleScroll = () => {
        const distances = Object.entries(ingredientRefs).map(([key, ref]) => {
            const ingredientRect = ref.current.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            let isInBound = true;
            let distance = ingredientRect.top - containerRect.top;
            if (ingredientRect.bottom < containerRect.top) {
                distance = containerRect.top - ingredientRect.bottom;
            }
            if (containerRect.bottom < ingredientRect.top) {
                isInBound = false;
            }

            return {key, distance: Math.abs(distance), isInBound: isInBound}
        })

        const closestHeading = distances.reduce((acc, curr) => curr.distance < acc.distance && curr.isInBound ? curr : acc, distances[0])
        setActiveTab(closestHeading.key);
    }

    return (
        <section>
            <h1 className={styles.main__header}>Соберите бургер</h1>
            <div className={styles.ingredients__wrapper}>
                <Tab value="Булки" active={currentTab === 'bun'} onClick={() => handleClick("bun")}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={currentTab === 'sauce'} onClick={() => handleClick("sauce")}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={currentTab === 'main'} onClick={() => handleClick("main")}>
                    Начинки
                </Tab>
            </div>
            <section className={styles.ingredients__section} ref={containerRef} onScroll={handleScroll}>
                <IngredientsGroup allIngredients={ingredients} counters={ingredientsCounter} type={'bun'} name={"Булки"} ref={ingredientRefs.bun}/>
                <IngredientsGroup allIngredients={ingredients} counters={ingredientsCounter} type={'sauce'} name={"Соусы"} ref={ingredientRefs.sauce}/>
                <IngredientsGroup allIngredients={ingredients} counters={ingredientsCounter} type={'main'} name={"Начинки"} ref={ingredientRefs.main}/>
            </section>
        </section>
    )
}

export default BurgerIngredients;