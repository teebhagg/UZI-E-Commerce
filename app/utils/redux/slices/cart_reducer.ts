import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { CartInterface } from "../../interfaces/cart_interface";
import type { RootState } from "../store";

const initialState: CartInterface[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartInterface>) => {
      const cartItem: CartInterface = action.payload;
      state.push(cartItem);
    },
    removeFromCart: (state, action: PayloadAction<CartInterface>) => {
      const arrayAfterRemoval = state.filter((item) => item._id !== action.payload._id);
      console.log(arrayAfterRemoval)
      return arrayAfterRemoval;
    },    
    updateOrderItemCount: (state, action: PayloadAction<CartInterface>) => {
      const orderItemData = action.payload;
      const updatedOrderItemData = {
        ...orderItemData,
      };
    
      const updatedState = state.map((item) => {
        if (item._id === updatedOrderItemData._id) {
          return updatedOrderItemData;
        } else {
          return item;
        }
      });
    
      return updatedState;
    },
    clearCart: (state) => {
      state = [];
    },
  },
});

export const { addToCart, removeFromCart, updateOrderItemCount, clearCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart;

export default cartSlice.reducer;
