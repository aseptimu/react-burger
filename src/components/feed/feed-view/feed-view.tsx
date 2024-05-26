import React from 'react';
import styles from "./feed-view.module.css";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedItemImage from "../feed-item/feed-item-image/feed-item-image";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../services";

const FeedView = () => {
    const {number} = useParams();
    const {ingredients: allIngredients} = useAppSelector(store => store.ingredients);
    const {orders} = useAppSelector(store => store.feed);

    const order = orders?.find((order) => order._id === number);

    const orderIngredients = order?.ingredients.map((id) => (
        allIngredients?.find((ingredient) => ingredient._id === id)
    ));

    const price = orderIngredients?.reduce((acc, curr) => acc + curr!.price, 0)

    let statusDisplayableName = '';
    switch (order?.status) {
        case 'done':
            statusDisplayableName = 'Выполнен'
            break;
        case 'cancel'://TODO:
            statusDisplayableName = 'Отменён'
            break;
        case 'pending'://TODO:
            statusDisplayableName = 'Готовится'
    }
//TODO: price
    const ingredients = orderIngredients?.map((ingredient) => (
        <li className={styles.list_item}>
            <FeedItemImage src={ingredient?.image} isLastItem={false} />
            <p className={styles.ingredient_title}>{ingredient?.name}</p>
            <div className={styles.price}>
                <p className={styles.order__price}>{ingredient?.price}2 x 20</p>
                <CurrencyIcon type="primary"/>
            </div>
        </li>
    ))

    return (
        <main className={styles.card}>
            <p className={styles.order__number}>{'#' + order?.number}</p>
            <p className={styles.order__name}>{order?.name}</p>
            <p className={styles.order__status}>{statusDisplayableName}</p>

            <h2 className={styles.ingredients__title}>Состав:</h2>
            <ul className={styles.ingredients__list}>
                {ingredients}
            </ul>
            <div className={styles.summary}>
                <FormattedDate className={styles.order__time} date={new Date(order!.updatedAt)}/>
                <div className={styles.price}>
                    <p className={styles.order__price}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </main>
    );
};

export default FeedView;