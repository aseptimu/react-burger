import React from 'react';
import AppHeader from "../../components/app-header/app-header";
import styles from './profile.module.css';
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";

function Profile() {
    return (
        <>
            <AppHeader/>
            <main className={styles.main}>
                {/*<div className={styles.navigation}>*/}
                {/*    <ul>*/}
                {/*        <li>Профиль</li>*/}
                {/*        <li className={styles.navigationItemInactive}>История заказов</li>*/}
                {/*        <li className={styles.navigationItemInactive}>Выход</li>*/}
                {/*    </ul>*/}
                {/*    <p className={styles.description}>В этом разделе вы можете изменить свои персональные данные</p>*/}
                {/*</div>*/}
                <section className={styles.personalData}>
                    <Input
                        value={"Text1"}
                        type="password"
                        onChange={null}
                        placeholder="Пароль"
                        icon={null}
                        onIconClick={null}
                        ref={null}
                    />
                    <Input
                        value={"Text2"}
                        type="password"
                        onChange={null}
                        placeholder="Пароль"
                        icon={null}
                        onIconClick={null}
                        ref={null}
                    />
                    <Input
                        value={"Text3"}
                        type="password"
                        onChange={null}
                        placeholder="Пароль"
                        icon={null}
                        onIconClick={null}
                        ref={null}
                    />
                </section>
            </main>
        </>
    );
}

export default Profile;