import style from "./header-link.module.css";
import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";


function HeaderLink({url, Icon, text}) {
    return (
        <NavLink to={url} className={({ isActive }) => style.header__link + (!isActive ? ` ${style.text__header_inactive}` : '')}>
            {({ isActive }) => (
                <>
                    <Icon type={isActive ? 'primary' : 'secondary'} />
                    <p className={style.text__header}>{text}</p>
                </>
            )}
        </NavLink>
    );
}

HeaderLink.propTypes = {
    url: PropTypes.string.isRequired,
    Icon: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};
export default HeaderLink;
