import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.js'
import BurgerConstructor from './components/burger-constructor/burger-constructor.js'

import React from "react";

function App() {
    const BASE_URL = 'https://norma.nomoreparties.space/api';
    const [ingredients, setIngredients] = React.useState([]);
    React.useEffect(() => {
        fetch(`${BASE_URL}/ingredients`)
            .then(res => res.json())
            .then((ingredients) => setIngredients(ingredients.data))
            .catch(error => {throw new Error(error)});
    }, [])

    return (
        <>
            <AppHeader></AppHeader>
            <main className='main'>
                <BurgerIngredients ingredients={ingredients}/>
                <BurgerConstructor ingredients={ingredients}/>
            </main>
        </>
    );
}

export default App;
