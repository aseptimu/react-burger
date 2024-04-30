import React, {FormEvent, useRef, useState} from 'react';
import styles from '../registration.module.css'
import {Button, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {HIDE_ICON, SHOW_ICON} from "../../constants";
import {registerUser, TRegisterData} from "../../../services/user-slice";
import {useForm} from "../../../hooks/hooks";
import {TICons} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import {useAppDispatch} from "../../../services";


function Register() {
    const {values, handleChange} = useForm({});
    const [passwordIcon, setPasswordIcon] = useState<keyof TICons>(SHOW_ICON);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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

    const onRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {email: values.email, password: values.password, name: values.name};
        dispatch(registerUser(userData)).then((response) => {
            const payload = response.payload as TRegisterData;
            localStorage.setItem('accessToken', payload.accessToken);
            localStorage.setItem('refreshToken', payload.refreshToken);
            navigate('/');
        });
    }

    return (
        <>
            <main className={styles.main}>
                <form className={styles.form} onSubmit={onRegister}>
                    <h1 className={styles.title}>Регистрация</h1>
                    <Input
                        value={values.name || ""}
                        name="name" onChange={handleChange}
                        placeholder="Имя"
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}                    />
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
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
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