import React from 'react';
import {BurgerIcon, Logo, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './app-header.module.css'
import HeaderLink from "./header-link/header-link";


function AppHeader() {
    return (
        <header className={style.header}>
            <nav>
                <ul className={style.navigation__list}>
                    <li className="mr-2">
                        <HeaderLink text={"Конструктор"}>
                            <BurgerIcon type="primary"/>
                        </HeaderLink>
                    </li>
                    <li>
                        <HeaderLink text={"Лента заказов"}>
                            <ListIcon type="secondary"/>
                        </HeaderLink>
                    </li>
                </ul>
            </nav>
            <Logo />
            <HeaderLink text={"Личный кабинет"}>
                <ProfileIcon type="secondary"/>
            </HeaderLink>
        </header>
    );
}

export default AppHeader;