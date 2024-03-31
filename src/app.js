import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.js'
import BurgerConstructor from './components/burger-constructor/burger-constructor.js'

import {useEffect, useReducer} from "react";
import {IngredientsContext} from "./services/ingredients-context";
import {BASE_URL} from "./utils/constants";
import {request} from "./utils/network-operations";
import {fetchIngredients} from "./services/ingredients-slice";
import {useDispatch} from "react-redux";

function ingredientsReducer(state, action) {
    switch(action.type) {
        case 'set':
            return action.value;
        default:
            return state;
    }
}
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchIngredients());
    }, [])

    return (
        <>
            <AppHeader></AppHeader>
            <main className='main'>
                    <BurgerIngredients />
                    <BurgerConstructor />
            </main>
        </>
    );
}

export default App;
