import React from 'react';
import styles from './feed-info.module.css';
import {useAppSelector} from "../../../services";
import {TOrders} from "../../../services/feed-slice";

function chunkArray(array: TOrders[]) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += 10) {
        chunkedArr.push(array.slice(i, i + 10));
    }
    return chunkedArr;
}

const FeedInfo = () => {
    const feed = useAppSelector(store => store.feed);

    const done = feed?.orders?.filter((ingredient) => ingredient.status === 'done');
    const pending = feed?.orders?.filter((ingredient) => ingredient.status === 'pending');

    const doneList = done && chunkArray(done).map((group) => (
        <ul className={styles.orders_number}>
            {group.map(item => (
                <li key={item._id}>{item.number}</li>
            ))}
        </ul>
    ))

    const pendingList = pending && chunkArray(pending).map((group) => (
        <ul className={styles.orders_number}>
            {group.map(item => (
                <li>{item.number}</li>
            ))}
        </ul>
    ))

    return (
        <section className={styles.feed_info__seciton}>
            <div className={styles.orders_ready}>
                <h2 className={styles.info__title}>Готовы</h2>
                <div className={styles.orders_number_wrapper}>
                    {doneList}
                </div>
            </div>
            <div className={styles.orders_in_progress}>
                <h2 className={styles.info__title}>В работе:</h2>
                <ul className={styles.orders_number_progress}>
                    {pendingList}
                </ul>
            </div>
            <div className={styles.orders_total}>
                <h2 className={styles.info__title}>
                    Выполнено за все время:
                </h2>
                <p className={styles.orders_total_number}>
                    {feed.total}
                </p>
            </div>
            <div className={styles.orders_today}>
                <h2 className={styles.info__title}>
                    Выполнено за сегодня:
                </h2>
                <p className={styles.orders_total_number}>
                    {feed.totalToday}
                </p>
            </div>
        </section>
    );
};

export default FeedInfo;