import React, {FormEvent, useEffect, useRef, useState} from 'react';
import styles from '../registration.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {HIDE_ICON, SHOW_ICON} from "../../constants";
import {resetPasswordRequest} from "../../../utils/api";
import {useForm} from "../../../hooks/hooks";
import {TICons} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";


function ResetPassword() {
    const {values, handleChange} = useForm({});
    const [passwordIcon, setPasswordIcon] = useState<keyof TICons>(SHOW_ICON);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const showPassword = () => {
        const type = passwordInputRef?.current?.type
        if (type === 'text' && passwordInputRef.current) {
            passwordInputRef.current.type = 'password';
            setPasswordIcon(SHOW_ICON);
        } else if (passwordInputRef.current)  {
            passwordInputRef.current.type = 'text';
            setPasswordIcon(HIDE_ICON);
        }
    }

    const resetPassword = (e: FormEvent<HTMLFormElement>) => {
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
    }, [navigate])

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
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    />
                    <Input
                        value={values.code || ""}
                        name="code"
                        onChange={handleChange}
                        placeholder="Введите код из письма"
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    />
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