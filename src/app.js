import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.js'
import BurgerConstructor from './components/burger-constructor/burger-constructor.js'

import {useState, useEffect} from "react";

function App() {
    const BASE_URL = 'https://norma.nomoreparties.space/api';
    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/ingredients`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
                }
                return res.json();
            })
            .then((ingredients) => setIngredients(ingredients.data))
            .catch(error => {console.error(error)});
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
