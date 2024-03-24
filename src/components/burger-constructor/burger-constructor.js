import React from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.css';
import OrderDetails from "./order-details/order-details";
import PropTypes from "prop-types";

function BurgerConstructor({ingredients}) {
    const [activeModal, setActiveModal] = React.useState(false);
    const bun = ingredients?.find(ingredient => ingredient.type === 'bun');
    const fillings = ingredients?.filter(ingredient => ingredient.type !== 'bun');

    const total = fillings?.reduce((acc, curr) => acc + curr.price, 0) + (bun ? bun.price * 2 : 0);

    function openModal() {
        setActiveModal(true);
    }

    function closeModal() {
        setActiveModal(false);
    }

    const ingredientPropTypes = PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired
    });
    const ingredientsPropTypes = PropTypes.arrayOf(ingredientPropTypes).isRequired;

    BurgerConstructor.propTypes = {
        ingredients: ingredientsPropTypes
    };

    return (
        <section className={`mt-25 ${styles.constructor__section}`}>
            {bun ? (
                <div className={`pl-8 pb-4 pr-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                        extraClass={styles.element}/>
                </div>
            ) : (
                <p className="pl-8 pt-4 pr-4 text text_type_main-default">Выберите булки</p>
            )}
            <ul className={`pl-8 pr-2 ${styles.constructor__list}`}>
                {fillings?.length ? (
                    fillings.map((element) => (
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
                    <p className="pl-8 pr-2 text text_type_main-default">Выберите начинки</p>
                )}
            </ul>
            {bun ? (
                <div className={`pl-8 pt-4 pr-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                        extraClass={styles.element}/>
                </div>
            ) : (
                <p className="pl-8 pt-4 pr-4 text text_type_main-default">Выберите булки</p>
            )}
            <div className={`mt-10 ${styles.total}`}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <p className={`text text_type_digits-medium`}>{total || 0}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
            {activeModal && <OrderDetails onClose={closeModal}></OrderDetails>}
        </section>
    );
}

export default BurgerConstructor;
