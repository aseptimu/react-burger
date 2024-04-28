import React, {useEffect, useRef, useState} from 'react';
import styles from '../registration.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {HIDE_ICON, SHOW_ICON} from "../../constants";
import {resetPasswordRequest} from "../../../utils/api";
import {useForm} from "../../../hooks/hooks";


function ResetPassword() {
    const {values, handleChange} = useForm({});
    const [passwordIcon, setPasswordIcon] = useState(SHOW_ICON);
    const passwordInputRef = useRef(null);

    const navigate = useNavigate();

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

    const resetPassword = (e) => {
        e.preventDefault();
        resetPasswordRequest(values.password, values.code).then((response) => {
            if (!response.error) {
                localStorage.removeItem('resetPassword')
                navigate('/');
            }
        });
    }

    useEffect(() => {
        const isResetPassword = localStorage.getItem('resetPassword')
        if (!isResetPassword) {
            navigate('/');
        }
    }, [])

    return (
        <>
            <main className={styles.main}>
                <form className={styles.form} onSubmit={resetPassword}>
                    <h1 className={styles.title}>Восстановление пароля</h1>
                    <Input
                        value={values.password || ""}
                        name="password"
                        type="password"
                        onChange={handleChange}
                        placeholder="Введите новый пароль"
                        icon={passwordIcon}
                        onIconClick={showPassword}
                        ref={passwordInputRef}
                    />
                    <Input value={values.code || ""} name="code" onChange={handleChange} placeholder="Введите код из письма"/>
                    <Button htmlType="submit" type="primary" size="medium">
                        Сохранить
                    </Button>
                </form>
                <p className={styles.text}>Вспомнили пароль? <Link className={styles.link} to="/login">Войти</Link></p>
            </main>
        </>
    );
}

export default ResetPassword;