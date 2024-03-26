import {useContext, useState} from 'react';
import styles from './ingredient-item.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import {IngredientDetailsContext} from "../../../services/ingredient-details-context";

function IngredientItem(props) {
    const [, dispatchCurrentIngredient] = useContext(IngredientDetailsContext);
    const [activeModal, setActiveModal] = useState(false);

    function openModal() {
        dispatchCurrentIngredient({type: 'set', value: {...props, onClose: closeModal}})
        setActiveModal(true);
    }

    function closeModal() {
        setActiveModal(false);
    }

    return (
        <>
            <div onClick={openModal}>
                {props.count && <Counter count={props.count} size="default" extraClass="m-1"/>}
                <img className={styles.burger_element__image} src={props.image} alt={props.name} width={240} height={120}/>
                <div className={styles.price}>
                    <p className={"text text_type_digits-default mt-1 mb-1"}>{props.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={"text text_type_main-default"}>{props.name}</p>
            </div>
            {activeModal && <IngredientDetails />}
        </>
    )
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
export default IngredientItem;