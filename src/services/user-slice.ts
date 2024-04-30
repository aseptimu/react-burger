import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchUserRequest, loginRequest, logoutRequest, registerRequest, updateUserRequest} from "../utils/api";

type TUserState = {
    name: string;
    email: string;
    isAuthorized: boolean;
    isAuthInProgress: boolean;
}

const initialState: TUserState = {
    name: '',
    email: '',
    isAuthorized: false,
    isAuthInProgress: false,
}

type TUserData = {
    'success': boolean;
    'user': {
        'email': string;
        'name': string;
    }
}

export const updateUser = createAsyncThunk(
    'patch/user',
    updateUserRequest
)
export const getUser = createAsyncThunk<TUserData>(
    'auth/user',
    fetchUserRequest
)

export const userLogout = createAsyncThunk(
    'user/logout',
    logoutRequest
)

export const registerUser = createAsyncThunk(
    'user/register',
    registerRequest
);

export const authUser = createAsyncThunk(
    'user/login',
    loginRequest
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            console.info("Registering a new user");
            state.isAuthInProgress = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            console.info("Register: success!")

            state.name = action.payload.user.name;
            state.email = action.payload.user.email;
            state.isAuthorized = true;
            state.isAuthInProgress = false;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            console.error("Register: fail!\n", action.error.stack);
            state.isAuthInProgress = false;
        });

        builder.addCase(authUser.pending, (state) => {
            console.info("Login in process...");
            state.isAuthInProgress = true;
        });
        builder.addCase(authUser.fulfilled, (state, action) => {
            console.info("Login: success!")
            state.name = action.payload.user.name;
            state.email = action.payload.user.email;
            state.isAuthorized = true;
            state.isAuthInProgress = false;
        });
        builder.addCase(authUser.rejected, (state, action) => {
            console.error("Login: fail!\n", action.error.stack);
            state.isAuthInProgress = false;
        });

        builder.addCase(getUser.pending, (state) => {
            console.info("Login in process...");
            state.isAuthInProgress = true;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            console.info("Login: success!")
            state.name = action.payload.user.name;
            state.email = action.payload.user.email;
            state.isAuthorized = true;
            state.isAuthInProgress = false;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            console.error("Login: fail!\n", action.error.stack);
            state.isAuthInProgress = false;
        });

        builder.addCase(updateUser.pending, (state) => {
            console.info("Login in process...");
            state.isAuthInProgress = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            console.info("Login: success!")
            state.name = action.payload.user.name;
            state.email = action.payload.user.email;
            state.isAuthorized = true;
            state.isAuthInProgress = false;
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            console.error("Login: fail!\n", action.error.stack);
            state.isAuthInProgress = false;
        });

        builder.addCase(userLogout.pending, (state) => {
            console.info("Logout in process...");
            state.isAuthInProgress = true;
        });
        builder.addCase(userLogout.fulfilled, (state) => {
            console.info("Logout: success!")
            state.name = '';
            state.email = '';
            state.isAuthorized = false;
            state.isAuthInProgress = false;
        });
        builder.addCase(userLogout.rejected, (state, action) => {
            console.error("Logout: fail!\n", action.error.stack);
            state.isAuthInProgress = false;
        });
    }
})

export default userSlice.reducer;