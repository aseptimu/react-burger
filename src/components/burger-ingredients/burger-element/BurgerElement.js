import React from 'react';
import styles from './burger-element.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerElement extends React.Component {

    render() {
        const {name, image, price, count} = this.props;

        return (
            <li className={`${styles.card}`}>
                {count !== 0 && <Counter count={count} size="default" extraClass="m-1"/>}
                <img src={image} alt={name}/>
                <div className={styles.price}>
                    <p className={"text text_type_digits-default"}>{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={"text text_type_main-default"}>{name}</p>
            </li>
        )
    }
}

export default BurgerElement;