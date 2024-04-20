import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchIngredients} from "./services/ingredients-slice";
import AppHeader from "./components/app-header/app-header";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    return (
        <>
            <AppHeader/>
            <DndProvider backend={HTML5Backend}>
                <main className='main'>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </main>
            </DndProvider>
        </>
    );
}

export default Home;