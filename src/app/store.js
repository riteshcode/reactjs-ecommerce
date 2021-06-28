import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../featured/counter/counter-slice';
import cartReducer from '../featured/cart/cart-slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,

  },
});
