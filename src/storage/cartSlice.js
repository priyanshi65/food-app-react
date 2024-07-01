import { createSlice } from "@reduxjs/toolkit";

// Define the initial state as an array of item objects.
const initialState = [
  { name: 'burger', price: 5 },
  { name: 'maggie', price: 2 },
  { name: 'coffee', price: 3 }
];

const CartSlice = createSlice({
  name: "cart",
  initialState: { items: initialState },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearItems } = CartSlice.actions;
export default CartSlice.reducer;
