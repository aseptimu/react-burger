import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchUserRequest, loginRequest, logoutRequest, registerRequest, updateUserRequest} from "../utils/api";

export type TUserState = {
    name: string;
    email: string;
    isAuthorized: boolean;
    isAuthInProgress: boolean;
};

export type TUserAuth = {
    "success": boolean;
    "user": {
        "email": string;
        "name": string;
    }
}

export type TUserAuthData = {
    name: string;
    email: string;
    password: string;
}

export type TLogout = {
    "success": boolean;
    "message": string;
}

export type TRegister = {
    "email"?: string;
    "password"?: string;
    "name"?: string;
}

export type TRegisterData = {
    "success": boolean;
    "user": {
        "email": string;
        "name": string;
    },
    "accessToken": string;
    "refreshToken": string;
}

export type TAuth = {
    "email"?: string;
    "password"?: string;
};

export type TAuthData = {
    "success": boolean;
    "accessToken": string;
    "refreshToken": string;
    "user": {
        "email": string;
        "name": string;
    }
};

export const initialState: TUserState = {
    name: '',
    email: '',
    isAuthorized: false,
    isAuthInProgress: false,
};


export const updateUser = createAsyncThunk<TUserAuth, TUserAuthData>(
    'patch/user',
    updateUserRequest
)
export const getUser = createAsyncThunk<TUserAuth>(
    'auth/user',
    fetchUserRequest
)

export const userLogout = createAsyncThunk<TLogout, string | null>(
    'user/logout',
    logoutRequest
)

export const registerUser = createAsyncThunk<TRegisterData, TRegister>(
    'user/register',
    registerRequest
);

export const authUser = createAsyncThunk<TAuthData, TAuth>(
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