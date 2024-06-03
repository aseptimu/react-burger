import React, {useEffect} from 'react';
import FeedList from "./feed-list/feed-list";
import FeedInfo from "./feed-info/feed-info";
import styles from './feed.module.css';
import {useAppDispatch} from "../../services";
import {feedWsConnect, feedWsDisconnect} from "../../services/middleware/actions";
import {FEED_WEBSOCKET_URL} from "../../utils/constants";

const Feed = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(feedWsConnect({url: FEED_WEBSOCKET_URL}));
        return () => {
            dispatch(feedWsDisconnect());
        }
    }, [])

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