import React, {useRef, useState} from 'react';
import styles from '../registration.module.css'
import {Button, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../../components/app-header/app-header";
import {Link} from "react-router-dom";
import {HIDE_ICON, SHOW_ICON} from "../../constants";


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordIcon, setPasswordIcon] = useState(SHOW_ICON)
    const passwordInputRef = useRef(null)
    const onEmailChange = e => {
        setEmail(e.target.value);
    }
    const onPasswordChange = e => {
        setPassword(e.target.value)
    }

    const showPassword = () => {
        const type = passwordInputRef.current.type
        if (type === 'text') {
            passwordInputRef.current.type = 'password';
            setPasswordIcon(SHOW_ICON);
        } else {
            passwordInputRef.current.type = 'text';
            setPasswordIcon(HIDE_ICON);
        }
    }


    return (
        <>
            <AppHeader />
            <main className={styles.main}>
                <form className={styles.form}>
                    <h1 className={styles.title}>Вход</h1>
                    <EmailInput value={email} onChange={onEmailChange} placeholder="E-mail"/>
                    <Input
                        value={password}
                        type="password"
                        onChange={onPasswordChange}
                        placeholder="Пароль"
                        icon={passwordIcon}
                        onIconClick={showPassword}
                        ref={passwordInputRef}
                    />
                    <Button htmlType="button" type="primary" size="medium">
                        Войти
                    </Button>
                </form>
                <p className={styles.text}>Вы — новый пользователь? <Link className={styles.link} to="/register">Зарегистрироваться</Link></p>
                <p className={styles.text}>Забыли пароль? <Link className={styles.link} to="/forgot-password">Восстановить пароль</Link></p>
            </main>
        </>
    );
}

export default SignIn;