import React, {FormEvent} from 'react';
import styles from '../registration.module.css'
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {forgotPasswordRequest} from "../../../utils/api";
import {useForm} from "../../../hooks/hooks";


function ForgotPassword() {
    const {values, handleChange} = useForm({})
    const navigate = useNavigate();

    const resetPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        forgotPasswordRequest(values.email)
            .then((response) => {
                if (!response.error) {
                    localStorage.setItem('resetPassword', 'true');
                    navigate('/reset-password');
                }
            });
    }

    return (
        <>
            <main className={styles.main}>
                <form className={styles.form} onSubmit={resetPassword}>
                    <h1 className={styles.title}>Восстановление пароля</h1>
                    <EmailInput value={values.email || ""} name="email" onChange={handleChange} placeholder="Укажите e-mail"/>
                    <Button htmlType="submit" type="primary" size="medium">
                        Восстановить
                    </Button>
                </form>
                <p className={styles.text}>Вспомнили пароль? <Link className={styles.link} to="/login">Войти</Link></p>
            </main>
        </>
    );
}

export default ForgotPassword;