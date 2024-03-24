import style from "./header-link.module.css";
import React from "react";
import PropTypes from "prop-types";


function HeaderLink({text, children}) {
    HeaderLink.propTypes = {
        text: PropTypes.string.isRequired,
        children: PropTypes.node
    };
    return (
        <a href="#" className={style.header__link}>
            {children}
            <p className={`${style.text__header} ${text !== 'Конструктор' && style.text__header_inactive}`}>{text}</p>
        </a>
    )
}

export default HeaderLink;
