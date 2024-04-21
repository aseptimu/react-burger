import Home from "./home";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {NotFound404} from "../pages/not-found/not-found";
import SignIn from "../pages/registration/sign-in/sign-in";
import Register from "../pages/registration/registration/register";
import ForgotPassword from "../pages/registration/forgot-password/forgot-password";
import ResetPassword from "../pages/registration/reset-password/reset-password";
import Profile from "../pages/profile/profile";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import IngredientDetails from "./burger-ingredients/ingredient-details/ingredient-details";
import AppHeader from "./app-header/app-header";
import {fetchIngredients} from "../services/ingredients-slice";
import Modal from "./modal/modal";
import {AuthorizedRoute, UnauthorizedRoute} from "./protected-route";

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state.background;

    // useEffect(() => {
    //     dispatch(checkUserAuth);//проверяем авторизацию пользователя
    // }, [dispatch]);

    const handleModalClose = () => {
        navigate(-1);
    };

    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    return (
        <>
            <AppHeader/>
            <Routes location={background || location}>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/ingredients/:id"} element={<IngredientDetails/>}/>
                <Route path={"/login"} element={<UnauthorizedRoute><SignIn/></UnauthorizedRoute>}/>
                <Route path={"/register"} element={<UnauthorizedRoute><Register/></UnauthorizedRoute>}/>
                <Route path={"/forgot-password"} element={<ForgotPassword/>}/>
                <Route path={"/reset-password"} element={<ResetPassword/>}/>
                <Route path={"/profile"} element={<AuthorizedRoute><Profile/></AuthorizedRoute>}/>
                <Route path={"*"} element={<NotFound404/>}/>
            </Routes>
            {
                background && (
                    <Routes>
                        <Route
                            path={`/ingredients/:id`}
                            element={
                                <Modal text={"Детали ингредиента"} onClose={handleModalClose}>
                                    <IngredientDetails />
                                </Modal>
                            }
                        />
                    </Routes>
                )
            }
        </>
    );
}

export default App;
