import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  //   reducers: {
  // Thunks - Method# 1
  // setProducts(state, action) {
  //   // Do not do this. NEVER
  //   // const res = await fetch('https://fakestoreapi.com/products');

  //   state.data = action.payload;
  // },
  // setStatus(state, action) {
  //   state.status = action.payload;
  // },
  // },
  // Thunks - Method#2
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks - Method# 1
// export function fetchProducts() {
//   return async function fetchProductThank(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch('https://fakestoreapi.com/products');

//       const data = await res.json();

//       dispatch(setProducts(data));

//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }

// Thunks - Method#2
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://fakestoreapi.com/products');

  const data = await res.json();
  return data;
});
