import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './app-header.module.css'
import HeaderLink from "./header-link/header-link";


function AppHeader() {
    return (
        <header className={style.header}>
            <nav>
                <ul className={style.navigation__list}>
                    <li className="mr-2">
                        <HeaderLink Icon={BurgerIcon} text={'Конструктор'} url={'/'}/>
                    </li>
                    <li>
                        <HeaderLink Icon={ListIcon} text={'Лента заказов'} url={'/feed'}/>
                    </li>
                </ul>
            </nav>
            <Logo/>
            <HeaderLink Icon={ProfileIcon} text={'Личный кабинет'} url={'/profile'}/>
        </header>
    );
}

export default AppHeader;