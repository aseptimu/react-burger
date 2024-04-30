import React from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";

function Home() {
    return (
        <DndProvider backend={HTML5Backend}>
            <main className='main'>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </main>
        </DndProvider>
    );
}

export default Home;