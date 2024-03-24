import React from 'react';
import styles from './ingredient-item.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";

function IngredientItem(props) {
    const [activeModal, setActiveModal] = React.useState(false);
    const {name, image, price, count} = props;

    function openModal() {
        setActiveModal(true);
    }

    function closeModal() {
        setActiveModal(false);
    }
    IngredientItem.propTypes = {
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number.isRequired,
        count: PropTypes.number
    };

    return (
        <>
            <div onClick={openModal}>
                {count && <Counter count={count} size="default" extraClass="m-1"/>}
                <img className={styles.burger_element__image} src={image} alt={name} width={240} height={120}/>
                <div className={styles.price}>
                    <p className={"text text_type_digits-default mt-1 mb-1"}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={"text text_type_main-default"}>{name}</p>
            </div>
            {activeModal && <IngredientDetails {...props} onClose={closeModal}/>}
        </>
    )
}

export default IngredientItem;