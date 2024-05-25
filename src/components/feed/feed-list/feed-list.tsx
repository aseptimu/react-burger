import React from 'react';
import styles from './feed-list.module.css';
import FeedItem, {TFeedItem} from "../feed-item/feed-item";

const FeedList = () => {
    const today = new Date();
    const list: ReadonlyArray<TFeedItem> = [
        {
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
            price: 480
        },
        {
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
            //TODO: key
            <li>
                <FeedItem {...element} />
            </li>
        )
    });

    return (
        <ul className={styles.feed__list}>
            {feed}
        </ul>
    );
};

export default FeedList;