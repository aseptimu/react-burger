import AppHeader from './components/app-header/AppHeader';
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients.js'
import BurgetrConstructor from './components/burger-constructor/BurgerConstructor.js'

import data from './utils/data'

function App() {
    return (
        <>
            <AppHeader></AppHeader>
            <main className='main'>
                <BurgerIngredients ingredients={data}/>
                <BurgetrConstructor/>
            </main>
        </>
    );
}

export default App;
