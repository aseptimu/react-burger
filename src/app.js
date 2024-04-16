import Home from "./home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {NotFound404} from "./pages/not-found/not-found";
import SignIn from "./pages/registration/sign-in/sign-in";

function App() {


    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<SignIn/>}/>
                <Route path={"*"} element={<NotFound404/>}/>
            </Routes>
        </Router>
    );
}

export default App;
