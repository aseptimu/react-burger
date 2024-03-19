import AppHeader from './components/app-header/AppHeader';
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients.js'
import BurgetrConstructor from './components/burger-constructor/BurgerConstructor.js'

function App() {
  return (
    <>
      <AppHeader ></AppHeader>
      <main className='main'>
        <BurgerIngredients/>
        {/* <BurgetrConstructor/> */}
      </main>
    </>
  );
}

export default App;
