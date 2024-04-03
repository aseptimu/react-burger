import React, {useRef} from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyles from "../../burger-constructor.module.css";
import {removeIngredient, setBun, setIngredient} from "../../../../services/constructor-slice";
import {decrementIngredientCounter, incrementIngredientCounter} from "../../../../services/ingredients-slice";
import {useDispatch, useSelector} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import styles from "../constructor-ingredients.module.css"
import {CONSTRUCTOR_INGREDIENT, DRAG_ELEMENT} from "../../../../utils/constants";

function ConstructorIngredient({element, index, handleMoveIngredient}) {
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.ingredients.ingredients);
    const bun = useSelector(state => state.burgerConstructor.bun)
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: [CONSTRUCTOR_INGREDIENT, DRAG_ELEMENT],
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
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
                    bun && dispatch(decrementIngredientCounter(bun._id));
                    bun && dispatch(decrementIngredientCounter(bun._id));
                    dispatch(incrementIngredientCounter(item._id));
                } else {
                    dispatch(setIngredient({ingredient, hoverIndex}));
                }
                dispatch(incrementIngredientCounter(item._id));
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
    function close(id, nanoid) {
        dispatch(removeIngredient(nanoid))
        dispatch(decrementIngredientCounter(id));
    }

    return (
        <div ref={ref} className={styles.constructor__element}>
            {element ? (
                <>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        text={element.name}
                        price={element.price}
                        thumbnail={element.image_mobile}
                        extraClass={constructorStyles.element}
                        handleClose={() => close(element._id, element.nanoid)}
                    />
                </>
            ) : (
                <ConstructorElement text={"выберите элемент"}></ConstructorElement>
            )}
        </div>
    );
}

export default ConstructorIngredient;