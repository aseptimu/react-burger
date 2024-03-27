import {useContext, useEffect, useReducer, useState} from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.css';
import OrderDetails from "./order-details/order-details";
import Modal from "../modal/modal";
import {IngredientsContext} from "../../services/ingredients-context";
import {BASE_URL} from "../../utils/constants";
import {request} from "../../utils/network-operations";

const constructorInitialState = {
    bun: null,
    ingredients: [],
    total: 0
}

function constructorReducer(state, action) {
    switch (action.type) {
        case 'setBun':
            return {...state, bun: action.value};
        case 'setIngredient':
            return {...state, ingredients: [...state.ingredients].push(action.value)}
        case 'removeIngredient':
            return {...state, ingredients: [...state.ingredients].filter((element) => element._id !== action.value._id)}
        /*TODO: выпилить когда данные будут передаваться из #BurgerIngredients*/
        case 'setIngredients':
            return {...state, ingredients: action.value}
        case 'setTotal':
            return {...state, total: action.value}
        default:
            throw new Error("Incorrect operation type for burger constructor reducer");
    }
}

function orderReducer(state, action) {
    switch (action.type) {
        case 'setData':
            return {...state, number: action.value}
        default:
            throw new Error("Incorrect operation type for order details");
    }
}

function BurgerConstructor() {
    const ingredients = useContext(IngredientsContext);
    const [orderData, dispatchOrderData] = useReducer(orderReducer, {});
    const [activeModal, setActiveModal] = useState(false);

    const [constructorData, constructorDispatch] = useReducer(constructorReducer, constructorInitialState);

    useEffect(() => {
            constructorDispatch({type: 'setBun', value: ingredients?.find(ingredient => ingredient.type === 'bun')});
            constructorDispatch({
                type: 'setIngredients',
                value: ingredients?.filter(ingredient => ingredient.type !== 'bun')
            });
        },
        [ingredients]
    )

    useEffect(() => {
        constructorDispatch({
            type: 'setTotal',
            value: constructorData.ingredients?.reduce((acc, curr) => acc + curr.price, 0) + (constructorData.bun ? constructorData.bun.price * 2 : 0)
        })
    }, [constructorData.bun, constructorData.ingredients])

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
        <section className={`mt-25 ${styles.constructor__section}`}>
            {constructorData.bun ? (
                <div className={`pl-8 pb-4 pr-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${constructorData.bun.name} (верх)`}
                        price={constructorData.bun.price}
                        thumbnail={constructorData.bun.image_mobile}
                        extraClass={styles.element}/>
                </div>
            ) : (
                <p className="pl-8 pt-4 pr-4 text text_type_main-default">Выберите булки</p>
            )}
            <ul className={`pl-4 pr-2 ${styles.constructor__list}`}>
                {constructorData.ingredients?.length ? (
                    constructorData.ingredients.map((element) => (
                        <li key={element._id} className={`${styles.constructor__list_item_middle}`}>
                            <DragIcon type="primary"/>
                            <ConstructorElement
                                text={element.name}
                                price={element.price}
                                thumbnail={element.image_mobile}
                                extraClass={styles.element}/>

                        </li>
                    ))
                ) : (
                    <li className="pl-8 pr-2 text text_type_main-default">Выберите начинки</li>
                )}
            </ul>
            {constructorData.bun ? (
                <div className={`pl-8 pt-4 pr-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${constructorData.bun.name} (низ)`}
                        price={constructorData.bun.price}
                        thumbnail={constructorData.bun.image_mobile}
                        extraClass={styles.element}/>
                </div>
            ) : (
                <p className="pl-8 pt-4 pr-4 text text_type_main-default">Выберите булки</p>
            )}
            <div className={`mt-10 ${styles.total}`}>
                <div className={styles.amount}>
                    <p className={`text text_type_digits-medium`}>{constructorData.total || 0}</p>
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
