import React from 'react';
import styles from './feed-info.module.css';

const FeedInfo = () => {
    return (
        <section className={styles.feed_info__seciton}>
            <div className={styles.orders_ready}>
                <h2 className={styles.info__title}>Готовы</h2>
                <ul className={styles.orders_number}>
                    <li>034533</li>
                    <li>034532</li>
                    <li>034530</li>
                    <li>034527</li>
                    <li>034525</li>
                </ul>
            </div>
            <div className={styles.orders_in_progress}>
                <h2 className={styles.info__title}>В работе:</h2>
                <ul className={styles.orders_number_progress}>
                    <li>034538</li>
                    <li>034541</li>
                    <li>034542</li>
                </ul>
            </div>
            <div className={styles.orders_total}>
                <h2 className={styles.info__title}>
                    Выполнено за все время:
                </h2>
                <p className={styles.orders_total_number}>
                    28 752
                </p>
            </div>
            <div className={styles.orders_today}>
                <h2 className={styles.info__title}>
                    Выполнено за сегодня:
                </h2>
                <p className={styles.orders_total_number}>
                    138
                </p>
            </div>
        </section>
    );
};

export default FeedInfo;