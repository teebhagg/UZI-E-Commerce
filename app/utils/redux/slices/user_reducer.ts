import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { UserInterface } from "../../interfaces/user_interface";

// Define the initial state using that type
const initialState: UserInterface = {};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserInterface>) => {
      const user: UserInterface = action.payload;
      state = user;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    signOut: (state) => {
      state = {};
    },
  },
});

export const { saveUser, signOut } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default userSlice.reducer;
