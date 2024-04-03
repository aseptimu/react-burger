import React, {useCallback} from 'react';
import ConstructorIngredient from "./constructor-ingredient/constructor-ingredient";
import {moveIngredient} from "../../../services/constructor-slice";
import {useDispatch} from "react-redux";

function ConstructorIngredients({ingredients}) {
    const dispatch = useDispatch()
    const handleMoveIngredient = useCallback((dragIndex, hoverIndex) => {
        dispatch(moveIngredient({dragIndex, hoverIndex}));
    }, [])
    return (
        ingredients?.length ? (
                ingredients.map((element, index) => (
                    <li key={element.nanoid} draggable={true} style={{minWidth: "100%"}}>
                        <ConstructorIngredient element={element} index={index} handleMoveIngredient={handleMoveIngredient}></ConstructorIngredient>
                    </li>
                ))
            ) : (

                <li>
                    <ConstructorIngredient  />
                </li>
            )
    );
}

export default ConstructorIngredients;