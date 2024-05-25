import React from 'react';
import styles from './feed-item.module.css'
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";

export type TFeedItem = {
    readonly number?: string;
    readonly orderTime: Date;
    readonly title?: string;
    ordersImages?: ReadonlyArray<URL>;
    readonly price?: number;
}

const MAX_DISPLAYABLE_ITEMS = 6;

const FeedItem = ({number, title, orderTime, ordersImages, price}: TFeedItem) => {
    const displayItems = ordersImages?.slice(0, MAX_DISPLAYABLE_ITEMS);

    const orderListItems = displayItems?.map((url, i) => {
        const isLastItem = displayItems?.length >= MAX_DISPLAYABLE_ITEMS && i === 0;
        return (
            // TODO: key
            <li data-count={isLastItem && ordersImages ? '+' + (ordersImages.length - MAX_DISPLAYABLE_ITEMS + 1) : ''}
                className={`${styles.order__list_item} ${isLastItem ? styles.order__list_item_last : ''}`}
            >
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
                <div className={styles.price}>
                    <p className={styles.order__price}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </section>
    );
};

export default FeedItem;