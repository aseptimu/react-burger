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
        email: ''
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, () => {
            console.info("Registering a new user");
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            console.info("Register: success!")
            console.log(action)
            state.name = action.payload.user.name;
            state.email = action.payload.user.email;
        });
        builder.addCase(registerUser.rejected, (_, action) => {
            console.error("Register: fail!\n", action.error.stack);
        });

        builder.addCase(authUser.pending, () => {
            console.info("Login in process...");
        });
        builder.addCase(authUser.fulfilled, (state, action) => {
            console.info("Login: success!")
            state.name = action.payload.user.name;
            state.email = action.payload.user.email;
        });
        builder.addCase(authUser.rejected, (_, action) => {
            console.error("Login: fail!\n", action.error.stack);
        });
    }
})

export default userSlice.reducer;