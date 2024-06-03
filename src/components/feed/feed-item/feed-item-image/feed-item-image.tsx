import React from 'react';
import styles from "./feed-item-image.module.css";

type TFeedItemImage = {
    readonly src?: string;
    readonly isLastItem: boolean;
    readonly removedItemsCount?: number;
}
const FeedItemImage = ({src, isLastItem, removedItemsCount}: TFeedItemImage) => {

    return (
        <div data-count={isLastItem ? '+' + removedItemsCount : ''}
            className={`${styles.order__list_item} ${isLastItem ? styles.order__list_item_last : ''}`}
        >
            <img draggable={false} src={src} alt={'ingredient small image'}/>
        </div>
    );
};

export default FeedItemImage;