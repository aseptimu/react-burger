import {useMemo, useState} from 'react';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.css';
import OrderDetails from "./order-details/order-details";
import Modal from "../modal/modal";
import ConstructorBun from "./constructor-bun/constructor-bun";
import ConstructorIngredients from "./constructor-ingredients/constructor-ingredients";
import {orderCheckout} from "../../services/order-details-slice";
import {clearConstructor} from "../../services/constructor-slice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../services";

function BurgerConstructor() {
    const ingredients = useAppSelector(state => state.ingredients.ingredients)
    const constructor = useAppSelector(state => state.burgerConstructor);
    const dispatch =  useAppDispatch();

    const isAuthorized = useAppSelector(store => store.user.isAuthorized);

    const navigate = useNavigate();

    const [activeModal, setActiveModal] = useState(false);


    const total = useMemo(() => (
        constructor.ingredients?.reduce((acc, curr) => acc + curr.price, 0) + (constructor.bun ? constructor.bun.price * 2 : 0)
    ), [constructor.bun, constructor.ingredients])

    function onOrderCheckout() {
        if (!isAuthorized) {
            navigate('/login');
        } else {
            dispatch(orderCheckout(ingredients?.map((element) => element._id)))
                .then(response => {
                    if (response.payload.number) {
                        dispatch(clearConstructor())
                    }
                })
            setActiveModal(true);
        }
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
                    <p className={`${styles.amount}`}>{total || 0}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button disabled={!constructor.bun} htmlType="button" type="primary" size="medium" onClick={onOrderCheckout}>
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
