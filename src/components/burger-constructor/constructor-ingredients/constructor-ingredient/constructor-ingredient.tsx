import React, {useRef} from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyles from "../../burger-constructor.module.css";
import {removeIngredient, setBun, setIngredient} from "../../../../services/constructor-slice";
import {useAppDispatch, useAppSelector} from "../../../../services";
import {useDrag, useDrop} from "react-dnd";
import styles from "../constructor-ingredients.module.css"
import {CONSTRUCTOR_INGREDIENT, DRAG_ELEMENT} from "../../../../utils/constants";

type TConstructorIngredient = {

};

function ConstructorIngredient({element, index, handleMoveIngredient}) {
    const dispatch = useAppDispatch
    const ingredients = useAppSelector(state => state.ingredients.ingredients);
    const ref = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
        accept: [CONSTRUCTOR_INGREDIENT, DRAG_ELEMENT],
        drop(item, monitor) {
            if (!ref.current) {
                return;
            }
            let hoverIndex = index;
            const clientOffset = monitor.getClientOffset();
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if(hoverClientY > hoverMiddleY) {
                hoverIndex = Math.min(hoverIndex + 1, ingredients.length - 1);
            }
            if (monitor.getItemType() === DRAG_ELEMENT) {
                const ingredient = ingredients.find(element => element._id === item._id)
                if (ingredient.type === 'bun') {
                    dispatch(setBun(ingredient))
                } else {
                    dispatch(setIngredient({ingredient, hoverIndex}));
                }
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            if (monitor.getItemType() === CONSTRUCTOR_INGREDIENT) {
                handleMoveIngredient(dragIndex, hoverIndex)
            }
            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: CONSTRUCTOR_INGREDIENT,
        item: () => {
            return { id: element._id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    drag(drop(ref));
    function close(nanoid) {
        dispatch(removeIngredient(nanoid))
    }

    return (
        <div ref={ref} className={`${styles.constructor__element} ${isDragging && styles.opacity}`}>
            {element ? (
                <>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        text={element.name}
                        price={element.price}
                        thumbnail={element?.image_mobile}
                        extraClass={constructorStyles.element}
                        handleClose={() => close(element.nanoid)}
                    />
                </>
            ) : (
                <ConstructorElement text={"выберите элемент"} price={null} thumbnail={null}></ConstructorElement>
            )}
        </div>
    );
}

export default ConstructorIngredient;