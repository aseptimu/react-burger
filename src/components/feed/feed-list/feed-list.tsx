import React from 'react';
import styles from './feed-list.module.css';
import FeedItem from "../feed-item/feed-item";
import {Link, useLocation} from "react-router-dom";
import {useAppSelector} from "../../../services";

const FeedList = () => {
    const location = useLocation();
    const list = useAppSelector(store => store.feed);

    let feed = list?.orders?.map((element) => {
        return (
            <Link
                key={element._id}
                  to={`/feed/${element._id}`}
                state={{ background: location}}
            >
                <li key={element.number}>
                    <FeedItem {...element} isStatusDisplay={false} />
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

export default FeedList;