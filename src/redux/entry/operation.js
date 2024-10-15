import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://slim-mom-api.onrender.com/api/';

axios.defaults.baseURL = BASE_URL;

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const fetchEntriesByDate = createAsyncThunk(
	'entries/fetchEntriesByDate',
	async(date, thunkAPI) => {
		try {
			const state = thunkAPI.getState();
			const token = state.auth.user.user.token;
			const res = await axios.get(`entries/${date}`,{ 
				headers: {
					'Authorization': `Bearer ${token}`,
					'Content-Type': 'application/json',
				} 
			});
			setAuthHeader(res.data.token);
			return res.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.status)
		}
	}
);