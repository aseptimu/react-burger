import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.js'
import BurgerConstructor from './components/burger-constructor/burger-constructor.js'

import {useEffect, useReducer} from "react";
import {IngredientsContext} from "./services/ingredients-context";

function ingredientsReducer(state, action) {
    switch(action.type) {
        case 'set':
            return action.value;
        default:
            return state;
    }
}
function App() {
    const BASE_URL = 'https://norma.nomoreparties.space/api';
    const [ingredients, setIngredients] = useReducer(ingredientsReducer, []);
    useEffect(() => {
        fetch(`${BASE_URL}/ingredients`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
                }
                return res.json();
            })
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
