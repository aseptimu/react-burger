import React from 'react';
import styles from './feed-item.module.css'
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedItemImage from "./feed-item-image/feed-item-image";
import {TOrders} from "../../../services/feed-slice";
import {useAppSelector} from "../../../services";

const MAX_DISPLAYABLE_ITEMS = 6;

const FeedItem = ({number, updatedAt, status, ingredients, isStatusDisplay}: TOrders & {isStatusDisplay: boolean}) => {
    const {ingredients: allIngredients} = useAppSelector(store => store.ingredients);

    const orderIngredients = ingredients?.map((id) => (
        allIngredients?.find((ingredient) => ingredient._id === id)
    ));
    const displayItems = orderIngredients.slice(0, MAX_DISPLAYABLE_ITEMS);
    const totalElements = orderIngredients.length || 0;

    const price = orderIngredients.reduce((acc, curr) => acc + curr!.price, 0)

    let statusDisplayableName = '';
    switch (status) {
        case 'done':
            statusDisplayableName = 'Выполнен'
            break;
        case 'created':
            statusDisplayableName = 'Создан'
            break;
        case 'pending':
            statusDisplayableName = 'Готовится'
    }

    const orderListItems = displayItems?.map((ingredient, i) => {
        const isLastItem = displayItems?.length >= MAX_DISPLAYABLE_ITEMS && i === 0;
        return (
            <li key={i} className={styles.list__item}
            >
                <FeedItemImage src={ingredient?.image} isLastItem={isLastItem}
                               removedItemsCount={totalElements - MAX_DISPLAYABLE_ITEMS + 1}/>
            </li>
        );
    })

    return (
        <section className={styles.card}>
            <div className={styles.order__info}>
                <p className={styles.order__number}>{'#' + number}</p>
                <FormattedDate className={styles.order__time} date={new Date(updatedAt)}/>
            </div>
            <p className={styles.order__title}>{}</p>
            {isStatusDisplay &&
                <p className={`${styles.status} ${status === 'done' ? styles.status_ready : ''}`}>{statusDisplayableName}</p>}
            <div className={styles.total}>
                <ul className={styles.order__list}>{orderListItems}</ul>
                <div className={styles.price}>
                    <p className={styles.order__price}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </section>
    );
};

export default FeedItem;