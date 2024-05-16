import style from "./header-link.module.css";
import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {TIconProps} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";

type THeaderLink = {
    url: string;
    Icon: React.ComponentType<TIconProps>;
    text: string;
}
const HeaderLink: FC<THeaderLink> = ({url, Icon, text}) => {
    return (
        <NavLink to={url}
                 className={({isActive}) => style.header__link + (!isActive ? ` ${style.text__header_inactive}` : '')}>
            {({isActive}) => (
                <>
                    <Icon type={isActive ? 'primary' : 'secondary'}/>
                    <p className={style.text__header}>{text}</p>
                </>
            )}
        </NavLink>
    );
}
export default HeaderLink;
