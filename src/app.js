import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.js'
import BurgerConstructor from './components/burger-constructor/burger-constructor.js'

import {useEffect, useReducer} from "react";
import {IngredientsContext} from "./services/ingredients-context";
import {BASE_URL} from "./utils/constants";
import {request} from "./utils/network-operations";

function ingredientsReducer(state, action) {
    switch(action.type) {
        case 'set':
            return action.value;
        default:
            return state;
    }
}
function App() {
    const [ingredients, setIngredients] = useReducer(ingredientsReducer, []);
    useEffect(() => {
        request(`${BASE_URL}/ingredients`)
            .then((ingredients) => setIngredients({type: 'set', value: ingredients.data}))
            .catch(error => {console.error(error)});
    }, [])

    return (
        <>
            <AppHeader></AppHeader>
            <main className='main'>
                <IngredientsContext.Provider value={ingredients}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </IngredientsContext.Provider>
            </main>
        </>
    );
}

export default App;
