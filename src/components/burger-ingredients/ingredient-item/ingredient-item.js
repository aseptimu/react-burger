import {useState} from 'react';
import styles from './ingredient-item.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {removeIngredient, setIngredient} from "../../../services/ingredient-details-slice";

function IngredientItem(props) {
    const [activeModal, setActiveModal] = useState(false);

    const dispatch = useDispatch();

    function openModal() {
        dispatch(setIngredient({...props}));
        setActiveModal(true);
    }

    function closeModal() {
        dispatch(removeIngredient())
        setActiveModal(false);
    }

    return (
        <>
            <div onClick={openModal}>
                {props.count && <Counter count={props.count} size="default" extraClass="m-1"/>}
                <img className={styles.burger_element__image} src={props.image} alt={props.name} width={240} height={120}/>
                <div className={styles.total}>
                    <p className={`${styles.price}`}>{props.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`${styles.description}`}>{props.name}</p>
            </div>
            {activeModal && <IngredientDetails onClose={closeModal}/>}
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