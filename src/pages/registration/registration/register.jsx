import React, {useRef, useState} from 'react';
import styles from '../registration.module.css'
import {Button, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {HIDE_ICON, SHOW_ICON} from "../../constants";
import {registerUser} from "../../../services/user-slice";
import {useDispatch} from "react-redux";


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordIcon, setPasswordIcon] = useState(SHOW_ICON)
    const passwordInputRef = useRef(null)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onEmailChange = e => {
        setEmail(e.target.value);
    }

    const onNameChange = e => {
        setName(e.target.value);
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

    const onRegister = () => {
        const userData = {email, password, name};
        dispatch(registerUser(userData)).then((response) => {
            if (!response.error) {
                localStorage.setItem('accessToken', response.payload.accessToken);
                localStorage.setItem('refreshToken', response.payload.refreshToken)
                navigate('/');
            }
        });
    }


    return (
        <>
            <main className={styles.main}>
                <form className={styles.form}>
                    <h1 className={styles.title}>Регистрация</h1>
                    <Input value={name} onChange={onNameChange} placeholder="Имя"/>
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
                    <Button htmlType="button" type="primary" size="medium" onClick={onRegister}>
                        Зарегистрироваться
                    </Button>
                </form>
                <p className={styles.text}>Уже зарегистрированы? <Link className={styles.link} to="/login">Войти</Link></p>
            </main>
        </>
    );
}

export default Register;