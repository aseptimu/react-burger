import React, {FormEvent, useRef, useState} from 'react';
import styles from '../registration.module.css'
import {Button, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {HIDE_ICON, SHOW_ICON} from "../../constants";
import {authUser, TAuthData} from "../../../services/user-slice";
import {useForm} from "../../../hooks/hooks";
import {useAppDispatch} from "../../../services";
import {TICons} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";


function SignIn() {
    const {values, handleChange} = useForm({});
    const [passwordIcon, setPasswordIcon] = useState<keyof TICons>(SHOW_ICON);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();


    const showPassword = () => {
        const type = passwordInputRef?.current?.type
        if (type === 'text' && passwordInputRef.current) {
            passwordInputRef.current.type = 'password';
            setPasswordIcon(SHOW_ICON);
        } else if (passwordInputRef.current) {
            passwordInputRef.current.type = 'text';
            setPasswordIcon(HIDE_ICON);
        }
    }

    const onLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userData = {email: values.email, password: values.password};

        dispatch(authUser(userData)).then((response) => {
            const payload = response.payload as TAuthData;

            localStorage.setItem('accessToken', payload.accessToken);
            localStorage.setItem('refreshToken', payload.refreshToken);
            if (location.state?.from.pathname === '/profile') {
                navigate('/profile');
            } else {
                navigate('/');
            }
        });
    }

    return (
        <>
            <main className={styles.main}>
                <form className={styles.form} onSubmit={onLogin}>
                    <h1 className={styles.title}>Вход</h1>
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
                        Войти
                    </Button>
                </form>
                <p className={styles.text}>Вы — новый пользователь? <Link className={styles.link}
                                                                          to="/register">Зарегистрироваться</Link></p>
                <p className={styles.text}>Забыли пароль? <Link className={styles.link} to="/forgot-password">Восстановить
                    пароль</Link></p>
            </main>
        </>
    );
}

export default SignIn;