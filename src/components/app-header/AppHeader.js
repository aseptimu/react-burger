import React from 'react';
import {BurgerIcon, Logo, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './app-header.module.css'


class AppHeader extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <nav>
                    <ul className={style.navigation__list}>
                        <li className="mr-2">
                            <a href="#" className={`${style.header__link} pt-4 pb-4 pl-5 pr-5`}>
                                <BurgerIcon type="primary"/>
                                <p className='text text_type_main-default ml-2'>Конструктор</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={`${style.header__link} pt-4 pb-4 pl-5 pr-5`}>
                                <ListIcon type="secondary"/>
                                <p className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <Logo/>
                <a href="#" className={`${style.header__link} ${style.login__link} pt-4 pb-4 pl-5 pr-5`}>
                    <ProfileIcon type="secondary"/>
                    <p className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</p>
                </a>
            </header>
        );
    }
}

export default AppHeader;