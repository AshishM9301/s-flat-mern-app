import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface CounterState {
  data: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  data: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  },
  accessToken: "",
  refreshToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction) => {
      state.data = actions.payload?.data;
      state.accessToken = actions.payload?.accessToken;
      state.refreshToken = actions.payload?.refreshToken;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
