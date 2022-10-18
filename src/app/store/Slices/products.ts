import { AsyncThunk } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Rating {
  rate: number,
  count: number,
}

export interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: Rating
}

interface initialState {
  loading: boolean
  products: Products[]
}


const initialState: initialState = {
  products: [],
  loading: false
}


export const getProducts: AsyncThunk<initialState, void, {}> = createAsyncThunk(
  'products/getProducts', async (_, { rejectWithValue }) => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=5`)
      .then(data => data.json())
    // .catch(rejectWithValue=>console.error("Get Product AsyncThunk Error : " + rejectWithValue));
    return res
  })



const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true
    }),
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        Object.assign(state.products, payload)
      }),
      builder.addCase(getProducts.rejected, (state) => {
        state.loading = false;
        console.error(state)
      })
  },
})

export const productsReducer = productsSlice.reducer;