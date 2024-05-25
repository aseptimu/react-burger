import React from 'react';
import FeedItem, {TFeedItem} from "../../../components/feed/feed-item/feed-item";
import {Link, useLocation} from "react-router-dom";
import styles from "../../../components/feed/feed-list/feed-list.module.css";

const Orders = () => {
    const location = useLocation();

    const today = new Date();
    const list: ReadonlyArray<TFeedItem> = [
        {
            _id: '1',
            number: '#034535',
            orderTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes() - 1,
                0,
            ),
            title: 'Death Star Starship Main бургер',
            ordersImages: [
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-02.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
            ],
            price: 480,
            status: 'Выполнен',
        },
        {
            _id: '7',
            number: '#034535',
            orderTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes() - 1,
                0,
            ),
            title: 'Death Star Starship Main бургер',
            ordersImages: [
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-02.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),

            ],
            price: 480,
            status: 'Готовится'
        },
        {
            _id: '6',
            number: '#034535',
            orderTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes() - 1,
                0,
            ),
            title: 'Death Star Starship Main бургер',
            ordersImages: [
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-02.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
            ],
            price: 480
        },
        {
            _id: '5',
            number: '#034535',
            orderTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes() - 1,
                0,
            ),
            title: 'Death Star Starship Main бургер',
            ordersImages: [
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-02.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
            ],
            price: 480
        },
        {
            _id: '4',
            number: '#034535',
            orderTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes() - 1,
                0,
            ),
            title: 'Death Star Starship Main бургер',
            ordersImages: [
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-02.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
            ],
            price: 480
        },
        {
            _id: '3',
            number: '#034535',
            orderTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes() - 1,
                0,
            ),
            title: 'Death Star Starship Main бургер',
            ordersImages: [
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-02.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
            ],
            price: 480
        },
        {
            _id: '2',
            number: '#034535',
            orderTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes() - 1,
                0,
            ),
            title: 'Death Star Starship Main бургер',
            ordersImages: [
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-02.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
                new URL('https://code.s3.yandex.net/react/code/bun-01.png'),
            ],
            price: 480
        },
    ]

    let feed = list.map((element) => {
        return (
            <Link
                key={element._id}
                to={`/profile/orders/${element._id}`}
                state={{background: location}}
            >
                <li key={element._id}>
                    <FeedItem {...element} />
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