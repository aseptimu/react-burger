import React, {useEffect, useState} from 'react';
import styles from "./feed-view.module.css";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedItemImage from "../feed-item/feed-item-image/feed-item-image";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../services";
import {TIngredient} from "../../../utils/types";
import {fetchIngredientRequest} from "../../../utils/api";
import {TOrders} from "../../../services/feed-slice";

const FeedView = () => {
    const [order, setOrder] = useState<TOrders | undefined | null>(null)
    const {number} = useParams();
    const {ingredients: allIngredients} = useAppSelector(store => store.ingredients);
    const {orders: allOrders} = useAppSelector(store => store.feed);


    useEffect(() => {
        const foundOrder = allOrders?.find((order) => order._id === number);
        if (foundOrder === undefined) {
            fetchIngredientRequest(number).then((element) => {
                setOrder(element[0]);
            })
        } else {
            setOrder(foundOrder);
        }
    }, []);

    const orderIngredients = order?.ingredients.map((id) => (
        allIngredients?.find((ingredient) => ingredient._id === id)
    ));

    const price = orderIngredients?.reduce((acc, curr) => acc + curr!.price, 0)

    let statusDisplayableName = '';
    switch (order?.status) {
        case 'done':
            statusDisplayableName = 'Выполнен'
            break;
        case 'created':
            statusDisplayableName = 'Создан'
            break;
        case 'pending':
            statusDisplayableName = 'Готовится'
    }

    const reducedIngredients = orderIngredients?.reduce((acc, curr) => {
        const key = curr!._id
        if (!(key in acc)) {
            acc[key] = {...curr!, counter: 0};
        }
        acc[key].counter += 1;
        return acc;
    }, {} as Record<string, TIngredient & {counter: number}>)


    const ingredients = reducedIngredients && Object.values(reducedIngredients).map((ingredient) => (
        <li key={ingredient._id} className={styles.list_item}>
            <div className={styles.ingredient_info}>
                <FeedItemImage src={ingredient?.image} isLastItem={false} />
                <p className={styles.ingredient_title}>{ingredient?.name}</p>
            </div>
            <div className={styles.price}>
                <p className={styles.order__price}>{`${ingredient.counter} x ${ingredient.price}`}</p>
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
                <FormattedDate className={styles.order__time} date={new Date(order ? order.updatedAt : '')}/>
                <div className={styles.price}>
                    <p className={styles.order__price}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </main>
    );
};

export default FeedView;