import React from 'react';
import styles from './feed-item.module.css'
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";

export type TFeedFeedItem = {
    readonly number?: string;
    readonly orderTime: Date;
    readonly title?: string;
    ordersImages?: ReadonlyArray<URL>;
    readonly price?: number;
}
const FeedItem = ({number, title, orderTime, ordersImages, price}: TFeedFeedItem) => {
    const orderListItems = ordersImages?.map((url) => {
        return (
            <li className={styles.order__list_item}>
                <img draggable={false} src={url.toString()} alt={'ingredient small image'}/>
            </li>
        );
    })


    return (
        <section className={styles.card}>
            <div className={styles.order__info}>
                <p className={styles.order__number}>{number}</p>
                <FormattedDate className={styles.order__time} date={orderTime}/>
            </div>
            <p className={styles.order__title}>{title}</p>
            <div className={styles.total}>
                <ul className={styles.order__list}>{orderListItems}</ul>
                <p className={styles.order__price}>{price}</p>
                <CurrencyIcon type="primary"/>
            </div>
        </section>
    );
};

export default FeedItem;