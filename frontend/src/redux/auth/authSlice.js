import { createSlice } from "@reduxjs/toolkit";
import { signin } from "./operations.js";

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			email: '',
			name: '',
			token: '',
		},
		isLoggedIn: false,
		error: null
	},
	extraReducers: builder => {
		builder
			.addCase(signin.pending, state => {
				state.isLoggedIn = false;
			})
			.addCase(signin.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.user = action.payload;
			})
			.addCase(signin.rejected, (state, action) => {
				state.isLoggedIn = false;
				state.error = action.payload
			})
	}
})

export const authReducer = authSlice.reducer;