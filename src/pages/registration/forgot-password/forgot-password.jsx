import React, {useState} from 'react';
import styles from '../registration.module.css'
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../../components/app-header/app-header";
import {Link} from "react-router-dom";


function ForgotPassword() {
    const [email, setEmail] = useState("");
    const onEmailChange = e => {
        setEmail(e.target.value);
    }

    return (
        <>
            <AppHeader />
            <main className={styles.main}>
                <form className={styles.form}>
                    <h1 className={styles.title}>Восстановление пароля</h1>
                    <EmailInput value={email} onChange={onEmailChange} placeholder="Укажите e-mail"/>
                    <Button htmlType="button" type="primary" size="medium">
                        Восстановить
                    </Button>
                </form>
                <p className={styles.text}>Вспомнили пароль? <Link className={styles.link} to="/login">Войти</Link></p>
            </main>
        </>
    );
}

export default ForgotPassword;