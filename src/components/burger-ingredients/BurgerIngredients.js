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
            <>
                <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
                <div style={{ display: 'flex' }}>
                    <Tab value="one" active={true} onClick={null}>
                        Булки
                    </Tab>
                    <Tab value="two" active={false} onClick={null}>
                        Соусы
                    </Tab>
                    <Tab value="three" active={false} onClick={null}>
                        Начинки
                    </Tab>
                </div>
                <h2 className='mt-10'>Булки</h2>
                <ul className={styles.cards}>
                    {buns}
                </ul>
                <h2 className=''>Соусы</h2>
                <ul className={styles.cards}>
                    {sauces}
                </ul>
                <h2 className=''>Начинки</h2>
                <ul className={styles.cards}>
                    {mains}
                </ul>
            </>
        )
    }
}

export default BurgerIngredients;