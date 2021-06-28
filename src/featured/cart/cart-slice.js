import { createSlice } from "@reduxjs/toolkit";
import { notify } from "../../component/common/ToastNotification";

export const localvar = JSON.parse(localStorage.getItem("cart"));

export const slice = createSlice({
  name: "cart",
  initialState: {
    cartQuantity:  ( localvar == null ) ? 0 : localvar.length,
    cartItem: ( localvar !== null  ) ? localvar : [],
  },
  reducers: {
    additemtocart: (state, action) => {

        // if any product already available in cart
        let found = state.cartItem.find( (cart) => {
                return cart.sku === action.payload.sku
            }
        )
        let msg,type='';

        if(found == undefined){
            state.cartQuantity++;
            action.payload.pqty = 1
            state.cartItem.push(action.payload);
            msg='product added to cart';
            type = 'success';
        }else{
            msg='Already added item';
            type = 'warning';
        }

        notify(msg,type)
        
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
    
    },
    deleteItemFromCart: (state,action) => {

      let newresponse = state.cartItem.filter((cart)=>{
        return cart.sku !== action.payload
      })
      state.cartQuantity--;
      state.cartItem = newresponse
      localStorage.setItem("cart", JSON.stringify(newresponse))
      notify('Item removed from cart','error')
    
    },
    incrementItemQty: (state, action) =>{
      const newResponse = state.cartItem.filter((cart)=>{
        if(action.payload == cart.sku){
          cart.pqty++
        } 
        return cart
      })
      state.cartItem = newResponse
      localStorage.setItem("cart", JSON.stringify(newResponse))

    },
    decrementItemQty: (state, action) =>{
      const newResponse = state.cartItem.filter((cart)=>{
        if(action.payload == cart.sku){
          if(cart.pqty > 1){
            cart.pqty--
          }
              
        } 
        return cart
      })
      state.cartItem = newResponse
      localStorage.setItem("cart", JSON.stringify(newResponse))

    },

  },
});

export const { additemtocart,deleteItemFromCart,incrementItemQty,decrementItemQty } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getCartQuantity = (state) => state.cart.cartQuantity;
export const getCartList = (state) => state.cart.cartItem;

export default slice.reducer;
