import React from 'react';
import FeedList from "./feed-list/feed-list";
import FeedInfo from "./feed-info/feed-info";
import styles from './feed.module.css';

const Feed = () => {
    return (
        <main className={styles.feed__main}>
            <h1 className={styles.feed__heading}>Лента заказов</h1>
            <section className={styles.feed_section}>
                <FeedList />
                <FeedInfo />
            </section>
        </main>
    );
};

export default Feed;