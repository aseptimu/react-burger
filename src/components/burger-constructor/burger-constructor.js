import {useEffect, useState} from 'react';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.css';
import OrderDetails from "./order-details/order-details";
import Modal from "../modal/modal";
import {useDispatch, useSelector} from "react-redux";
import ConstructorBun from "./constructor-bun/constructor-bun";
import ConstructorIngredients from "./constructor-ingredients/constructor-ingredients";
import {setBun, setIngredients, setTotal} from "../../services/constructor-slice";
import {checkoutRequest} from "../../services/order-details-slice";

function BurgerConstructor() {
    const ingredients = useSelector(state => state.ingredients.ingredients)
    const constructor = useSelector(state => state.burgerConstructor);

    const dispatch =  useDispatch();

    const [activeModal, setActiveModal] = useState(false);

    useEffect(() => {
        dispatch(setBun(ingredients?.find(ingredient => ingredient.type === 'bun')));
        dispatch(setIngredients(ingredients?.filter(ingredient => ingredient.type !== 'bun')))
        },
        [ingredients, dispatch]
    )

    useEffect(() => {
        dispatch(setTotal(constructor.ingredients?.reduce((acc, curr) => acc + curr.price, 0) + (constructor.bun ? constructor.bun.price * 2 : 0)))
    }, [constructor.bun, constructor.ingredients, dispatch])

    function orderCheckout() {
        dispatch(checkoutRequest(ingredients?.map((element) => element._id)))
        setActiveModal(true);
    }

    function closeModal() {
        setActiveModal(false);
    }

    return (
        <section className={`${styles.constructor__section}`}>
            <ConstructorBun bun={constructor.bun} type={"top"}/>
            <ul className={`${styles.constructor__list}`}>
                <ConstructorIngredients ingredients={constructor.ingredients}/>
            </ul>
            <ConstructorBun bun={constructor.bun} type={"bottom"}/>
            <div className={`${styles.total}`}>
                <div className={styles.price}>
                    <p className={`${styles.amount}`}>{constructor.total || 0}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="medium" onClick={orderCheckout}>
                    Оформить заказ
                </Button>
            </div>
            {activeModal &&
                <Modal onClose={closeModal}>
                    <OrderDetails />
                </Modal>
            }
        </section>
    );
}

export default BurgerConstructor;
