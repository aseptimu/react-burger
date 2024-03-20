import React from 'react';
import styles from './burger-ingredient.module.css'
import BurgerElement from "./burger-element/BurgerElement";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerIngredients extends React.Component {
    render() {
        const {ingredients} = this.props;
        const buns = ingredients.filter(element => element.type === 'bun').map(element => {
            return <BurgerElement key={element._id} name={element.name} image={element.image} price={element.price} count={element.__v}/>
        })
        const mains = ingredients.filter(element => element.type === 'main').map(element => {
            return <BurgerElement key={element._id} name={element.name} image={element.image} price={element.price} count={element.__v}/>
        })
        const sauces = ingredients.filter(element => element.type === 'sauce').map(element => {
            return <BurgerElement key={element._id} name={element.name} image={element.image} price={element.price} count={element.__v}/>
        })

        return (
            <section className={"mr-10"}>
                <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
                <div className={`${styles.ingredients__wrapper}`}>
                    <Tab value="Булки" active={true} onClick={null}>
                        Булки
                    </Tab>
                    <Tab value="Соусы" active={false} onClick={null}>
                        Соусы
                    </Tab>
                    <Tab value="Начинки" active={false} onClick={null}>
                        Начинки
                    </Tab>
                </div>
                <section className={`${styles.ingredients__section} text text_type_main-default`}>
                    <h2 className='mt-10'>Булки</h2>
                    <ul id={"buns"} className={`${styles.cards} pt-6 pl-4 pr-4 pb-10`}>
                        {buns}
                    </ul>
                    <h2 className=''>Соусы</h2>
                    <ul id={"sauces"} className={`${styles.cards} pt-6 pl-4 pr-4 pb-10`}>
                        {sauces}
                    </ul>
                    <h2 className=''>Начинки</h2>
                    <ul id={"mains"} className={`${styles.cards} pt-6 pl-4 pr-4 pb-10`}>
                        {mains}
                    </ul>
                </section>
            </section>
        )
    }
}

export default BurgerIngredients;