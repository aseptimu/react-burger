import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.js'
import BurgerConstructor from './components/burger-constructor/burger-constructor.js'

import {useEffect} from "react";
import {fetchIngredients} from "./services/ingredients-slice";
import {useDispatch} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchIngredients());
    }, [])

    return (
        <>
            <AppHeader></AppHeader>
            <DndProvider backend={HTML5Backend}>
                <main className='main'>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </main>
            </DndProvider>
        </>
    );
}

export default App;
