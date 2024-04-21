import React, {useEffect, useState} from 'react';
import styles from './profile.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {EDIT_ICON} from "../constants";
import {useSelector} from "react-redux";

function Profile() {
    const user = useSelector(store => store.user);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");

    const [isEdited, setIsEdited] = useState(false);

    useEffect(() => {
        const isEditedFields = user.name !== name || user.email !== email || password !== '';
        setIsEdited(isEditedFields);
    }, [name, email, password, user.name, user.email]);

    const onNameChange = (e) => setName(e.target.value);
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    const setDefaultState = () => {
        setName(user.name);
        setEmail(user.email);
        setPassword('');
    };

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
                            to={'/exit'}>Выход</NavLink></li>
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
                            <Button htmlType="button" type="primary" size="medium">
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