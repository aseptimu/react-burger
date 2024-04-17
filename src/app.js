import Home from "./home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {NotFound404} from "./pages/not-found/not-found";
import SignIn from "./pages/registration/sign-in/sign-in";
import Register from "./pages/registration/registration/register";
import ForgotPassword from "./pages/registration/forgot-password/forgot-password";
import ResetPassword from "./pages/registration/reset-password/reset-password";
import Profile from "./pages/profile/profile";

function App() {


    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<SignIn/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/forgot-password"} element={<ForgotPassword/>}/>
                <Route path={"/reset-password"} element={<ResetPassword/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"*"} element={<NotFound404/>}/>
            </Routes>
        </Router>
    );
}

export default App;
