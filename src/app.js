import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.js'
import BurgerConstructor from './components/burger-constructor/burger-constructor.js'

import {useEffect} from "react";
import {fetchIngredients} from "./services/ingredients-slice";
import {useDispatch} from "react-redux";

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
