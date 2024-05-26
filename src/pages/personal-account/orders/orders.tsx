import React from 'react';
import FeedItem from "../../../components/feed/feed-item/feed-item";
import {Link, useLocation} from "react-router-dom";
import styles from "../../../components/feed/feed-list/feed-list.module.css";
import {useAppSelector} from "../../../services";

const Orders = () => {
    const location = useLocation();
    const list = useAppSelector(store => store.feed);

    let feed = list?.orders?.map((element) => {
        return (
            <Link
                key={element._id}
                to={`/profile/orders/${element._id}`}
                state={{background: location}}
            >
                <li key={element._id}>
                    <FeedItem {...element} isStatusDisplay={true} />
                </li>
            </Link>
        )
    });

    return (
        <ul className={styles.feed__list}>
            {feed}
        </ul>
    );
};

export default Orders;