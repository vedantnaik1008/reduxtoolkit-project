import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: [rate: number, count: number]
}

const initialState: CartItem[] = [];

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD: (state, action)=> {
        state.push(action.payload)
    },
    REMOVE: (state, action)=> {
        return state.filter(item => item.id !== action.payload)
    }
  }
 })

 export const { ADD, REMOVE } = cartSlice.actions
 export default cartSlice.reducer