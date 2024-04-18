import React, {useRef, useState} from 'react';
import AppHeader from "../../components/app-header/app-header";
import styles from './profile.module.css';
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {EDIT_ICON} from "../constants";

function Profile() {
    const [isNameDisabled, setIsNameDisabled] = useState(true);
    const [isEmailDisabled, setIsEmailDisabled] = useState(true);
    const [isPasswordDisabled, setIsPasswordDisabled] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nameInputRef = useRef(null)
    const emailInputRef = useRef(null)
    const passwordInputRef = useRef(null)

    const onNameChange = () => {

    }
    const onEmailChange = () => {

    }
    const onPasswordChange = () => {

    }


    const onNameIconClick = () => {
        setIsNameDisabled(!isNameDisabled);
        nameInputRef.current.focus();
    }

    const onEmailIconClick = () => {

    }

    const onPasswordIconClick = () => {

    }


    return (
        <>
            <AppHeader/>
            <main className={styles.main}>
                <div className={styles.navigation}>
                    <ul className={styles.navigation_list}>
                        <li className={styles.navigation_list_item}><Link to={'/profile'}>Профиль</Link></li>
                        <li className={`${styles.navigation_list_item} ${styles.navigation_item_inactive}`}><Link to={'/profile/orders'}>История заказов</Link></li>
                        <li className={`${styles.navigation_list_item} ${styles.navigation_item_inactive}`}><Link to={'/exit'}>Выход</Link></li>
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
                        onIconClick={onNameIconClick}
                        ref={nameInputRef}
                        disabled={isNameDisabled}
                    />
                    <Input
                        value={email}
                        type="email"
                        onChange={onEmailChange}
                        placeholder="Логин"
                        icon={EDIT_ICON}
                        onIconClick={onEmailIconClick}
                        ref={emailInputRef}
                        disabled={isEmailDisabled}
                    />
                    <Input
                        value={password}
                        type="password"
                        onChange={onPasswordChange}
                        placeholder="Пароль"
                        icon={EDIT_ICON}
                        onIconClick={onPasswordIconClick}
                        ref={passwordInputRef}
                        disabled={isPasswordDisabled}
                    />
                </section>
            </main>
        </>
    );
}

export default Profile;