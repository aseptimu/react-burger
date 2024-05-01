import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './profile.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {EDIT_ICON} from "../constants";
import {updateUser, userLogout} from "../../services/user-slice";
import {useAppDispatch, useAppSelector} from "../../services";

function Profile() {
    const user = useAppSelector(store => store.user);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");

    const [isEdited, setIsEdited] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const isEditedFields = user.name !== name || user.email !== email || password !== '';
        setIsEdited(isEditedFields);
    }, [name, email, password, user.name, user.email]);

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const setDefaultState = () => {
        setName(user.name);
        setEmail(user.email);
        setPassword('');
    };

    const handleChangeUserData = () => {
        dispatch(updateUser({email, password, name}));
    }

    const handleLogout = () => {
        const token = localStorage.getItem('refreshToken')
        dispatch(userLogout(token)).then(() => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
        });
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.navigation}>
                    <ul className={styles.navigation_list}>
                        <li><NavLink
                            className={({isActive}) => (`${styles.navigation_list_item} ${!isActive && styles.navigation_item_inactive}`)}
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
                <section className={styles.personal_data}>
                    <Input
                        value={name}
                        type="text"
                        onChange={onNameChange}
                        placeholder="Имя"
                        icon={EDIT_ICON}
                    />
                    <Input
                        value={email}
                        type="email"
                        onChange={onEmailChange}
                        placeholder="Логин"
                        icon={EDIT_ICON}
                    />
                    <Input
                        value={password}
                        type="password"
                        onChange={onPasswordChange}
                        placeholder="Пароль"
                        icon={EDIT_ICON}
                    />
                    {
                        isEdited && <div>
                            <Button htmlType="button" type="secondary" size="medium" onClick={setDefaultState}>
                                Отмена
                            </Button>
                            <Button htmlType="button" type="primary" size="medium" onClick={handleChangeUserData}>
                                Сохранить
                            </Button>
                        </div>
                    }
                </section>
            </main>
        </>
    );
}

export default Profile;