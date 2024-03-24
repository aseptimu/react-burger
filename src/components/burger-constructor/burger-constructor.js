import {useMemo, useState} from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.css';
import OrderDetails from "./order-details/order-details";
import ingredientsPropTypes from "../../utils/prop-types";
import Modal from "../modal/modal";

function BurgerConstructor({ingredients}) {
    const [activeModal, setActiveModal] = useState(false);
    const bun = useMemo(() => (ingredients?.find(ingredient => ingredient.type === 'bun')), [ingredients]);
    const fillings = useMemo(() => (ingredients?.filter(ingredient => ingredient.type !== 'bun')), [ingredients]);

    const total = useMemo(() => (fillings?.reduce((acc, curr) => acc + curr.price, 0) + (bun ? bun.price * 2 : 0))
        , [fillings, bun]);

    function openModal() {
        setActiveModal(true);
    }

    function closeModal() {
        setActiveModal(false);
    }

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
                    <li className="pl-8 pr-2 text text_type_main-default">Выберите начинки</li>
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
                <div className={styles.amount}>
                    <p className={`text text_type_digits-medium`}>{total || 0}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
            {activeModal &&
                <Modal onClose={closeModal}>
                    <OrderDetails onClose={closeModal}></OrderDetails>
                </Modal>
            }
        </section>
    );
}

BurgerConstructor.propTypes = {
    ingredients: ingredientsPropTypes
};

export default BurgerConstructor;
