import React, {useRef, useState} from 'react';
import styles from '../registration.module.css'
import {Button, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {HIDE_ICON, SHOW_ICON} from "../../constants";
import {registerUser} from "../../../services/user-slice";
import {useDispatch} from "react-redux";
import {useForm} from "../../../hooks/hooks";


function Register() {
    const {values, handleChange} = useForm({});
    const [passwordIcon, setPasswordIcon] = useState(SHOW_ICON);
    const passwordInputRef = useRef(null);

    const dispatch = useDispatch();
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

    const onRegister = (e) => {
        e.preventDefault();
        const userData = {email: values.email, password: values.password, name: values.name};
        dispatch(registerUser(userData)).then((response) => {
            if (!response.error) {
                localStorage.setItem('accessToken', response.payload.accessToken);
                localStorage.setItem('refreshToken', response.payload.refreshToken);
                navigate('/');
            }
        });
    }


    return (
        <>
            <main className={styles.main}>
                <form className={styles.form} onSubmit={onRegister}>
                    <h1 className={styles.title}>Регистрация</h1>
                    <Input value={values.name || ""} name="name" onChange={handleChange} placeholder="Имя"/>
                    <EmailInput value={values.email || ""} name="email" onChange={handleChange} placeholder="E-mail"/>
                    <Input
                        value={values.password || ""}
                        name="password"
                        type="password"
                        onChange={handleChange}
                        placeholder="Пароль"
                        icon={passwordIcon}
                        onIconClick={showPassword}
                        ref={passwordInputRef}
                    />
                    <Button htmlType="submit" type="primary" size="medium">
                        Зарегистрироваться
                    </Button>
                </form>
                <p className={styles.text}>Уже зарегистрированы? <Link className={styles.link} to="/login">Войти</Link></p>
            </main>
        </>
    );
}

export default Register;