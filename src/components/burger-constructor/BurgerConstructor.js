import React from 'react'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

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
            <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <ul className={`mt-25`}>
                    <li className={`pl-8`}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={data.image_mobile}
                        />
                    </li>
                    <li>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.image_mobile}
                        />
                    </li>
                    <li className={`pl-8 pt-4 pb-4`}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={data.image_mobile}
                        />
                    </li>
                </ul>
            </section>
        )
    }
}

export default BurgerConstructor;