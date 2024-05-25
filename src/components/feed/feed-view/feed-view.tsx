import React from 'react';
import styles from "./feed-view.module.css";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedItemImage from "../feed-item/feed-item-image/feed-item-image";

type TFeedView = {}

const FeedView = () => {
    return (
        <main className={styles.card}>
            <p className={styles.order__number}>#034533</p>
            <p className={styles.order__name}>Black Hole Singularity острый бургер</p>
            <p className={styles.order__status}>Выполнен</p>

            <h2 className={styles.ingredients__title}>Состав:</h2>
            <ul className={styles.ingredients__list}>
                <li className={styles.list_item}>
                    <FeedItemImage src={'https://code.s3.yandex.net/react/code/bun-01.png'} isLastItem={false} />
                    <p className={styles.ingredient_title}>Флюоресцентная булка R2-D3</p>
                    <div className={styles.price}>
                        <p className={styles.order__price}>2 x 20</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </li>
                <li className={styles.list_item}>
                    <FeedItemImage src={'https://code.s3.yandex.net/react/code/bun-01.png'} isLastItem={false} />
                    <p className={styles.ingredient_title}>Флюоресцентная булка R2-D3</p>
                    <div className={styles.price}>
                        <p className={styles.order__price}>2 x 20</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </li>
                <li className={styles.list_item}>
                    <FeedItemImage src={'https://code.s3.yandex.net/react/code/bun-01.png'} isLastItem={false} />
                    <p className={styles.ingredient_title}>Флюоресцентная булка R2-D3</p>
                    <div className={styles.price}>
                        <p className={styles.order__price}>2 x 20</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </li>
                <li className={styles.list_item}>
                    <FeedItemImage src={'https://code.s3.yandex.net/react/code/bun-01.png'} isLastItem={false} />
                    <p className={styles.ingredient_title}>Флюоресцентная булка R2-D3</p>
                    <div className={styles.price}>
                        <p className={styles.order__price}>2 x 20</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </li>
                <li className={styles.list_item}>
                    <FeedItemImage src={'https://code.s3.yandex.net/react/code/bun-01.png'} isLastItem={false} />
                    <p className={styles.ingredient_title}>Флюоресцентная булка R2-D3</p>
                    <div className={styles.price}>
                        <p className={styles.order__price}>2 x 20</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </li>
                <li className={styles.list_item}>
                    <FeedItemImage src={'https://code.s3.yandex.net/react/code/bun-01.png'} isLastItem={false} />
                    <p className={styles.ingredient_title}>Флюоресцентная булка R2-D3</p>
                    <div className={styles.price}>
                        <p className={styles.order__price}>2 x 20</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </li>
            </ul>
            <div className={styles.summary}>
                <FormattedDate className={styles.order__time} date={new Date()}/>
                <div className={styles.price}>
                    <p className={styles.order__price}>520</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </main>
    );
};

export default FeedView;