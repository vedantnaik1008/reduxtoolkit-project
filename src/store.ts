import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducers/counterSlice";
import cartSlice from "./store/CartSlice";
import ProductSlice from "./store/ProductSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartSlice,
        products: ProductSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch