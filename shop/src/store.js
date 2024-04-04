import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice';

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let cartData = createSlice({
    name : 'cartData',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
      changeCnt(state, action){
        var num = state.findIndex((val)=> val.id === action.payload);
        state[num].count ++;
      },
      changeList(state, action){
        var num = state.findIndex((val)=> val.id === action.payload.id);
        if(num > -1){
          state[num].count++;
        }else{
          state.push(action.payload);
        }
      },
      deleteList(state, action){
        var num = state.findIndex((val)=> val.id === action.payload);
        if(num > -1 ){
          state.splice(num, 1);
        }
        return state;
      }
    }
})

export let { changeCnt, changeList, deleteList } = cartData.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cartData : cartData.reducer
   }
}) 