import {useState} from 'react';
import styles from './ingredient-item.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {removeIngredient, setIngredient} from "../../../services/ingredient-details-slice";
import {useDrag} from "react-dnd";
import {DRAG_ELEMENT} from "../../../utils/constants";

function IngredientItem(props) {
    const [activeModal, setActiveModal] = useState(false);
    const {__v, image, name, _id, price } = props;
    const [{isDrag}, dragRef] = useDrag({
        type: DRAG_ELEMENT,
        item: {_id},
        collect: (monitor) => ({
            isDrag: monitor.isDragging()
        })
    });

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
            <div onClick={openModal} ref={dragRef} style={{opacity: isDrag ? 0.5 : 1}}>
                {__v !== 0 && <Counter count={__v} size="default" extraClass="m-1"/>}
                <img className={styles.burger_element__image} draggable={false} src={image} alt={name} width={240}
                     height={120}/>
                <div className={styles.total}>
                    <p className={`${styles.price}`}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`${styles.description}`}>{name}</p>
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