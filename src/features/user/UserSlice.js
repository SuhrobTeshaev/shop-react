import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const createUsers = createAsyncThunk(
  "users/createUsers",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, payload);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const loginUsers = createAsyncThunk(
  "users/loginUsers",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, payload);
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      });
      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const updateUsers = createAsyncThunk(
  "users/updateUsers",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/users`, payload);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: null,
    cart: [],
    formType: "signup",
    showForm: false,
    isLoading: false,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload);
      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });
      state.cart = newCart;
    },
    removeItemToCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createUsers.fulfilled, addCurrentUser);
    builder.addCase(loginUsers.fulfilled, addCurrentUser);
    builder.addCase(updateUsers.fulfilled, addCurrentUser);
  },
});

export const { addItemToCart, removeItemToCart, toggleForm, toggleFormType } =
  usersSlice.actions;
export default userSlice.reducer;
