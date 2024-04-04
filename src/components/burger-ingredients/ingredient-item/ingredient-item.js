import {useState} from 'react';
import styles from './ingredient-item.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch} from "react-redux";
import {removeIngredient, setIngredient} from "../../../services/ingredient-details-slice";
import {useDrag} from "react-dnd";
import {DRAG_ELEMENT} from "../../../utils/constants";
import ingredientsPropTypes from "../../../utils/prop-types";

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

IngredientItem.propTypes = ingredientsPropTypes;
export default IngredientItem;