import React from 'react';
import styles from './personal-account.module.css';
import {NavLink} from "react-router-dom";
import {userLogout} from "../../services/user-slice";
import {useAppDispatch} from "../../services";
import Profile from "./profile/profile";
import Orders from "./orders/orders";

function PersonalAccount({isOrder}: {isOrder?: boolean}) {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        const token = localStorage.getItem('refreshToken')
        dispatch(userLogout(token)).then(() => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        });
    }

    return (
        <main className={styles.main}>
            <div className={styles.navigation}>
                <ul className={styles.navigation_list}>
                    <li><NavLink
                        className={({isActive}) => (`${styles.navigation_list_item} ${!isActive && styles.navigation_item_inactive}`)}
                        end
                        to={'/profile'}>Профиль</NavLink></li>
                    <li><NavLink
                        className={({isActive}) => (`${styles.navigation_list_item} ${!isActive && styles.navigation_item_inactive}`)}
                        to={'/profile/orders'}>История заказов</NavLink></li>
                    <li><NavLink
                        className={({isActive}) => (`${styles.navigation_list_item} ${!isActive && styles.navigation_item_inactive}`)}
                        to={'/login'} onClick={handleLogout}>Выход</NavLink></li>
                </ul>
                <p className={styles.description}>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <section className={styles.order_or_profile}>
                {!isOrder ? <Profile /> : <Orders />}
            </section>
        </main>
    );
}

export default PersonalAccount;