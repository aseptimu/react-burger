import React from 'react'
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.css'

class BurgerConstructor extends React.Component {
    render() {
        const data =     {
            "_id":"60666c42cc7b410027a1a9b1",
            "name":"Краторная булка N-200i",
            "type":"bun",
            "proteins":80,
            "fat":24,
            "carbohydrates":53,
            "calories":420,
            "price":1255,
            "image":"https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v":0
        }
        return (
            <section className={`mt-25 ${styles.constructor__section}`}>
                <ul className={`${styles.constructor__list}`}>
                    <li className={`pl-8`}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={data.image_mobile}
                        />
                    </li>
                    <li className={`${styles.constructor__list_item_middle}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.image_mobile}
                        />
                    </li>
                    <li className={`${styles.constructor__list_item_middle}`}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.image_mobile}
                        />
                    </li>
                    <li className={`${styles.constructor__list_item_middle}`}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.image_mobile}
                        />
                    </li>
                    <li className={`${styles.constructor__list_item_middle}`}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.image_mobile}
                        />
                    </li>
                    <li className={`${styles.constructor__list_item_middle}`}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.image_mobile}
                        />
                    </li>
                    <li className={`pl-8`}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={data.image_mobile}
                        />
                    </li>
                </ul>
                <div className={`mt-10 ${styles.total}`}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <p className={`text text_type_digits-medium`}>610</p>
                        <CurrencyIcon type="primary"  />
                    </div>
                    <Button htmlType="button" type="primary" size="medium" >
                        Оформить заказ
                    </Button>

                </div>
            </section>
        )
    }
}

export default BurgerConstructor;