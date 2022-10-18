import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';



const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let { title, id, image, price } = action.payload;
      let item = {
        productId: id,
        productTitle: title,
        productImage: image,
        productPrice: price,
        productQuantity: 1,
      };

      const itemIndex = state.items.find(cartitem => cartitem.productId === id)

      if (itemIndex) {
        itemIndex !== undefined && itemIndex.productQuantity++;
      } else
        state.items.push(item)
    },
    increment: (state, { payload }) => {
      let index = state.items.find(item => item.productId == payload)
      index !== undefined && index.productQuantity++;
    },
    decrement: (state, { payload }) => {
      let index = state.items.find(item => item.productId == payload)
      if (index?.productQuantity !== undefined && index?.productQuantity > 0) {
        index.productQuantity--;
        if (index?.productQuantity === 0) {
          state.items = state.items.filter(item => item.productId !== payload)
        }
      }
    },
    removeItem: (state, { payload }) => {
      let index = state.items.indexOf(payload);
      state.items.splice(index, 1);
    }
  }
})

export default cartSlice.reducer
export const { addItem, removeItem, increment, decrement } = cartSlice.actions

