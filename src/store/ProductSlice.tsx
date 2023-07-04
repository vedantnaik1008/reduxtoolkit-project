import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
interface CartItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: [rate: number, count: number];
}

const initialState: {data: CartItem[], status: string} = {
    data:[],
    status: 'idle'
};

 const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // fetchProducts: (state, action) =>{
    //     state.data = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action)=>{
        state.data = action.payload
        state.status = 'idle'
    })
    .addCase(getProducts.pending, (state, action)=> {
        state.status = 'Loading'
    })
    .addCase(getProducts.rejected, (state, action)=> {
        state.status = 'error'
    })
  }
 })

 export const { } = productSlice.actions
 export default productSlice.reducer

 export const getProducts = createAsyncThunk('products/get', async () =>{
    const data = await fetch('https://fakestoreapi.com/products') as Response
    const result = (await data.json()) as CartItem[]
    return result
 })

//  export const getProducts = () => {
//     return async (dispatch: AppDispatch, getState: () => RootState) => {
  
//     }
//   }