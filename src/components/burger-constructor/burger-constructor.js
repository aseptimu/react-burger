import {useEffect, useReducer, useState} from 'react';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.css';
import OrderDetails from "./order-details/order-details";
import Modal from "../modal/modal";
import {BASE_URL} from "../../utils/constants";
import {request} from "../../utils/network-operations";
import {useDispatch, useSelector} from "react-redux";
import ConstructorBun from "./constructor-bun/constructor-bun";
import ConstructorIngredients from "./constructor-ingredients/constructor-ingredients";
import {setBun, setIngredients, setTotal} from "../../services/constructor-slice";

function orderReducer(state, action) {
    switch (action.type) {
        case 'setData':
            return {...state, number: action.value}
        default:
            throw new Error("Incorrect operation type for order details");
    }
}

function BurgerConstructor() {
    const ingredients = useSelector(state => state.ingredients.ingredients)

    const dispatch =  useDispatch();
    const constructor = useSelector(state => state.burgerConstructor.ingredients);

    const [orderData, dispatchOrderData] = useReducer(orderReducer, {});
    const [activeModal, setActiveModal] = useState(false);

    useEffect(() => {
        dispatch(setBun(ingredients?.find(ingredient => ingredient.type === 'bun')));
        dispatch(setIngredients(ingredients?.filter(ingredient => ingredient.type !== 'bun')))
        },
        [ingredients]
    )

    useEffect(() => {
        dispatch(setTotal(constructor?.reduce((acc, curr) => acc + curr.price, 0) + (constructor.bun ? constructor.bun.price * 2 : 0)))
    }, [constructor.bun, constructor.ingredients])

    function orderCheckout() {
        dispatchOrderData({type: 'setData', value: null});
        request(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                ingredients: ingredients?.map((element) => element._id)
            })
        }).then(data => {
                dispatchOrderData({type: 'setData', value: data.order?.number});
            })
            .catch(error => console.error(error));
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
                    <OrderDetails number={orderData.number} onClose={closeModal}></OrderDetails>
                </Modal>
            }
        </section>
    );
}

export default BurgerConstructor;
