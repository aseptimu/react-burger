import styles from './ingredient-item.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {DRAG_ELEMENT} from "../../../utils/constants";
import {Link, useLocation} from "react-router-dom";
import {FC} from "react";
import {Counters} from "../ingredients-group/ingredients-group";

type TIngredient = {
    image: string;
    name: string;
    _id: string;
    price: number;
    counters: Counters;
}

export const IngredientItem: FC<TIngredient> = ({counters, ...props}) => {
    const {image, name, _id, price } = props;
    const [{isDrag}, dragRef] = useDrag({
        type: DRAG_ELEMENT,
        item: {_id},
        collect: (monitor) => ({
            isDrag: monitor.isDragging()
        })
    });

    const location = useLocation();

    return (
        <Link
            key={_id}
            to={`/ingredients/${_id}`}
            state={{ background: location}}
        >
            <div ref={dragRef} style={{opacity: isDrag ? 0.5 : 1}}>
                {counters[_id] && <Counter count={counters[_id]} size="default" extraClass="m-1"/>}
                <img className={styles.burger_element__image} draggable={false} src={image} alt={name} width={240}
                     height={120}/>
                <div className={styles.total}>
                    <p className={`${styles.price}`}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`${styles.description}`}>{name}</p>
            </div>
        </Link>
    )
}
export default IngredientItem;