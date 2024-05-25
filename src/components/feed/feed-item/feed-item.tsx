import React from 'react';
import styles from './feed-item.module.css'
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedItemImage from "./feed-item-image/feed-item-image";

export type TFeedItem = {
    readonly _id: string;
    readonly number?: string;
    readonly orderTime: Date;
    readonly title?: string;
    ordersImages?: ReadonlyArray<URL>;
    readonly price?: number;
    readonly status?: string
}

const MAX_DISPLAYABLE_ITEMS = 6;

const FeedItem = ({number, title, orderTime, ordersImages, price, status}: TFeedItem) => {
    const displayItems = ordersImages?.slice(0, MAX_DISPLAYABLE_ITEMS);
    const totalElements = ordersImages?.length || 0;

    const orderListItems = displayItems?.map((url, i) => {
        const isLastItem = displayItems?.length >= MAX_DISPLAYABLE_ITEMS && i === 0;
        return (
            // TODO: key
            <li key={i} className={styles.list__item}
            >
                <FeedItemImage src={url.toString()} isLastItem={isLastItem} removedItemsCount={totalElements - MAX_DISPLAYABLE_ITEMS + 1}/>
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
            {status && <p className={`${styles.status} ${status === 'Выполнен' ? styles.status_ready : ''}`}>{status}</p>}
            <div className={styles.total}>
                <ul className={styles.order__list}>{orderListItems}</ul>
                <div className={styles.price}>
                    <p className={styles.order__price}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </section>
    );
};

export default FeedItem;