import React from 'react';
import styles from './feed-list-item.module.css'

export type TFeedListItem = {
    readonly number?: number;
    readonly orderTime?: string;
    readonly title?: string;
    ordersImages?: ReadonlyArray<string>;
    readonly price?: number;
}
const FeedListItem = ({number, title, orderTime, ordersImages, price}: TFeedListItem) => {
    const orderListItem = ordersImages?.map((element) => {
        return (
            <li className={styles.order__list_item}>
                <img draggable={false} src={element} alt={'ingredient small image'}/>
            </li>
        );
    })


    return (
        <>
            <div className={styles.order__info}>
                <p className={styles.order__number}>{number}</p>
                <p className={styles.order__time}>{orderTime}</p>
            </div>
            <p className={styles.order__title}></p>
            <div>
                <ul className={styles.order__list}>{orderListItem}</ul>
                <p className={styles.order__price}>{price}</p>
            </div>
        </>
    );
};

export default FeedListItem;