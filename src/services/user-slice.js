import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginRequest, registerRequest} from "../utils/api";

// export const fetchTokens = createAsyncThunk(
//     'auth/fetch',
//     fetchTokensRequest
// )//TODO: переделать. Тут подразумевается первоначальный запрос за токеном. Но это не thunk

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
    initialState: {
        name: '',
        email: '',
        isAuthorized: false,
        isAuthInProgress: false,
    },
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
    }
})

export default userSlice.reducer;