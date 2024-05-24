import React from 'react';
import FeedItem, {TFeedFeedItem} from "../feed-item/feed-item";

const FeedList = () => {
    const today = new Date();
    const list: ReadonlyArray<TFeedFeedItem> = [
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
        }
    ]

    let feed = list.map((element) => {
        return (
            <li>
                <FeedItem {...element} />
            </li>
        )
    });

    return (
        <ul>
            {feed}
        </ul>
    );
};

export default FeedList;