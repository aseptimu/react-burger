import React, {useEffect, useRef, useState} from 'react';
import styles from '../registration.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {HIDE_ICON, SHOW_ICON} from "../../constants";
import {resetPasswordRequest} from "../../../utils/api";


function ResetPassword() {
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [passwordIcon, setPasswordIcon] = useState(SHOW_ICON);
    const passwordInputRef = useRef(null);

    const navigate = useNavigate();
    const onCodeChange = e => {
        setCode(e.target.value);
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

    const resetPassword = () => {
        resetPasswordRequest(password, code).then((response) => {
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
                <form className={styles.form}>
                    <h1 className={styles.title}>Восстановление пароля</h1>
                    <Input
                        value={password}
                        type="password"
                        onChange={onPasswordChange}
                        placeholder="Введите новый пароль"
                        icon={passwordIcon}
                        onIconClick={showPassword}
                        ref={passwordInputRef}
                    />
                    <Input value={code} onChange={onCodeChange} placeholder="Введите код из письма"/>
                    <Button htmlType="button" type="primary" size="medium" onClick={resetPassword}>
                        Сохранить
                    </Button>
                </form>
                <p className={styles.text}>Вспомнили пароль? <Link className={styles.link} to="/login">Войти</Link></p>
            </main>
        </>
    );
}

export default ResetPassword;