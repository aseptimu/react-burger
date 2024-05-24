import Home from "./home";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {NotFound404} from "../pages/not-found/not-found";
import SignIn from "../pages/registration/sign-in/sign-in";
import Register from "../pages/registration/registration/register";
import ForgotPassword from "../pages/registration/forgot-password/forgot-password";
import ResetPassword from "../pages/registration/reset-password/reset-password";
import Profile from "../pages/profile/profile";
import React, {useEffect} from "react";
import IngredientDetails from "./burger-ingredients/ingredient-details/ingredient-details";
import AppHeader from "./app-header/app-header";
import {fetchIngredients} from "../services/ingredients-slice";
import Modal from "./modal/modal";
import {AuthorizedRoute, UnauthorizedRoute} from "./protected-route";
import {getUser} from "../services/user-slice";
import {useAppDispatch} from "../services";
import Feed from "../pages/feed/feed";

function App() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state.background;

    useEffect(() => {
        const token = localStorage.getItem('refreshToken')
        if (token) {
            dispatch(getUser());
        }
    }, [dispatch]);

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
                <Route path={"/forgot-password"} element={<UnauthorizedRoute><ForgotPassword/></UnauthorizedRoute>}/>
                <Route path={"/reset-password"} element={<UnauthorizedRoute><ResetPassword/></UnauthorizedRoute>}/>
                <Route path={"/profile"} element={<AuthorizedRoute><Profile/></AuthorizedRoute>}/>
                <Route path={"/profile/orders"} element={<AuthorizedRoute><Profile/></AuthorizedRoute>}/>
                <Route path={"/profile/orders/:number"} element={<AuthorizedRoute><Profile/></AuthorizedRoute>}/>
                <Route path={"/logout"} element={<AuthorizedRoute><Profile/></AuthorizedRoute>}/>
                <Route path={"/feed"} element={<Feed />}/>
                <Route path={"/feed/:number"} element={<Feed />}/>
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
